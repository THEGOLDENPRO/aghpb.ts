import { Client } from "../src/index";

const client = new Client();

client.categories().then(
    (categories) => {
        categories.forEach((category) => {
            console.log(category);
        })
    }
);