# crocksjs-examples

Exported examples from crocks.dev

```sh
npm install
npm start

->

🔥 Terminal playground 🔥

Choose a file or directory: examples/ [ ENTER ]
```

## log utility

```js
import log from "./log";
import All from "crocks/All";

log(All(true).equals(All(true)));
//=> true

log("Result:", All(true).equals(All(false)));
//=> false
```
