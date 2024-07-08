import * as fs from "fs";
import { Client } from "../src/index";

const client = new Client();

client.get_book("151").then(
    (book) => {
        console.log(`Search ID: ${book.searchId}`)
        console.log(`Name: ${book.name}`);
        console.log(`Category: ${book.category}`);
        console.log(`Date Added: ${book.dateAdded}`);
        console.log(`Commit Author: ${book.commit.author}`);

        const buffer = Buffer.from(book.image)

        fs.createWriteStream("./anime_girl.png").write(
            buffer
        );
    }
);