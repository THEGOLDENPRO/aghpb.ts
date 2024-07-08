import * as fs from "fs";
import { Client } from "../src/index";

const client = new Client();

client.random().then(
    (book) => {
        console.log(`Name: ${book.name}`);
        console.log(`Category: ${book.category}`);
        console.log(`Date Added: ${book.dateAdded}`);

        const buffer = Buffer.from(book.image)

        fs.createWriteStream("./anime_girl.png").write(
            buffer
        );
    }
);