import { Book } from "./book";
import { APIError } from "./errors";

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

        let response = await fetch(url);

        if (!response.ok) {
            throw new APIError(
                await response.json()
            )
        }

        return {
            name: response.headers.get("book-name"),
            category: response.headers.get("book-category"),
            dateAdded: new Date(response.headers.get("book-date-added")),
            image: await response.arrayBuffer(),
        }
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
}