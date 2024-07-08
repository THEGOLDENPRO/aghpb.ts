import { Client } from "../src/index";

const client = new Client();

client.search("lain").then(
    (books) => {
        books.forEach(book => {
            console.log(`Search ID: ${book.searchId}`);
            console.log(`Name: ${book.name}`);
            console.log(`Category: ${book.category}`);
            console.log(`Date Added: ${book.dateAdded}`);
            console.log(`Commit Author: ${book.commit.author}`);
        });
    }
);