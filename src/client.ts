import { Book } from "./book";
import { APIError } from "./errors";

async function convertResponseToBook(response: Response): Promise<Book> {
    return {
        name: response.headers.get("book-name"),
        category: response.headers.get("book-category"),
        dateAdded: new Date(response.headers.get("book-date-added")),
        image: await response.arrayBuffer(),
        searchId: response.headers.get("book-search-id"),
        commit: {
            url: response.headers.get("book-commit-url"),
            author: response.headers.get("book-commit-author"),
            hash: response.headers.get("book-commit-hash"),
        }
    };
}

/** 
 * Client to interface with anime girls holding programming books API.
 */
export class Client {
    baseUrl: string;

    constructor(url: string = "https://api.devgoldy.xyz/aghpb") {
        this.baseUrl = url;
    }

    /** 
     * Returns a random anime girl holding a programming book. 
     * 
     * Uses the ``/v1/random`` endpoint.
     */
    async random(category?: string): Promise<Book> {
        let url = this.baseUrl + "/v1/random";

        if (category) {
            url += "?category=" + category;
        }

        url = encodeURI(url);
        let response = await fetch(url);

        if (!response.ok) {
            throw new APIError(
                await response.json()
            )
        }

        return convertResponseToBook(response);
    }

    /** 
     * Returns a list of available categories. 
     * 
     * Uses the ``/v1/categories`` endpoint.
     */
    async categories(): Promise<Array<string>> {
        let url = this.baseUrl + "/v1/categories";

        let response = await fetch(url);

        return await response.json();
    }

    /**
     * Returns a programming book based on the search id.
     * 
     * Uses the ``/v1/get/id`` endpoint.
     */
    async get_book(id: string): Promise<Book> {
        let url = this.baseUrl + `/v1/get/id/${id}`;

        url = encodeURI(url);
        let response = await fetch(url);

        if (!response.ok) {
            throw new APIError(
                await response.json()
            )
        }

        return convertResponseToBook(response);
    }

    /**
     * Searches for a programming book given a query & category.
     * 
     * Uses the ``/v1/search`` endpoint.
     */
    async search(query: string, category?: string, limit?: number): Promise<Array<Book>> {
        let url = this.baseUrl + `/v1/search?query=${query}`;

        if (category) {
            url += `&category=${category}`;
        }

        if (limit) {
            url += `&limit=${limit}`;
        }

        url = encodeURI(url);
        let response = await fetch(url);

        let json = await response.json();

        if (!response.ok) {
            throw new APIError(json)
        }

        let books: Array<Book> = [];
        for (let i = 0; i < json.length; i++) {
            books.push({
                name: json[i].name,
                category: json[i].category,
                dateAdded: new Date(json[i].date_added),
                searchId: json[i].search_id,
                commit: {
                    url: json[i].commit_url,
                    author: json[i].commit_author,
                    hash: json[i].commit_hash,
                }
            });
        }

        return books;
    }
}