<div align="center">

  # 🟦 aghpb.ts 📚
  <sub>Typescript API wrapper for the anime girls holding programming books [API](https://api.devgoldy.xyz/aghpb/v1/docs)</sub>

  [![npm](https://img.shields.io/npm/v/aghpb?style=flat)](https://www.npmjs.com/package/aghpb)

</div>

<div align="center">

  <img src="./assets/book_1.png" width="400px">

</div>

<br>

> [!Note]
> 
> This is part of my [aghpb api](https://github.com/THEGOLDENPRO/aghpb_api) wrapper challenge where I attempt to write an api wrapper in every language possible. So yes expect spaghetti code as it will be my first time writing in these languages. Although I'm 100% open to improvements and corrections so feel free to contribute anything.
> **[Other languages I've done](https://github.com/THEGOLDENPRO/aghpb_api#-api-wrappers)**

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
```
You can also retrieve specific categories of anime girls holding programming books like so:
```typescript
client.random("typescript");
```

<br>

This is how you may retrieve a list of available categories:
```typescript
import { Client } from "aghpb";

const client = new Client();

client.categories().then(
    (categories) => {
        categories.forEach((category) => {
            console.log(category);
        })
    }
);
```

Made using my API at 👉 https://api.devgoldy.xyz/aghpb/v1/
