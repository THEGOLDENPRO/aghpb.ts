<div align="center">

  # 🟦 aghpb.ts 📚
  <sub>Typescript API wrapper for the anime girls holding programming books [API](https://api.devgoldy.xyz/aghpb/v1/docs)</sub>

</div>

<div align="center">

  <img src="./assets/book_1.png" width="400px">

</div>

<br>

> #### BTW this is my first ever typescript code, so please don't crucify me harshly 🥺🙏

## Install
```typescript
npm install aghpb
```
The NPM package can be located [**here**](https://www.npmjs.com/package/aghpb).

## Examples
This is how you may retrieve a random anime girl holding a programming book:
```typescript
import * as fs from "fs";
import { Client } from "aghpb";

let client = new Client();

client.random().then(
    (book) => {
        console.log(`Name: ${book.name}`);
        console.log(`Category: ${book.category}`);
        console.log(`Date Added: ${book.dateAdded}`);

        let imageView = new Uint8Array(book.image);

        fs.writeFile(
            "./anime_girl.png", imageView, 
            error => { if (error) throw error }
        );
    }
);
```
You can also retrieve specific categories of anime girls holding programming books like so:
```rust
client.random("typescript");
```

<br>

This is how you may retrieve a list of available categories:
```typescript
import { Client } from "aghpb";

let client = new Client();

client.categories().then(
    (categories) => {
        categories.forEach((category) => {
            console.log(category);
        })
    }
);
```

Made using my API at 👉 https://api.devgoldy.xyz/aghpb/v1/