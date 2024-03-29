<p align="center">
<h2 align="center"><a href="https://www.npmjs.com/package/@arungovil/sanitize-js">sanitize-js</a></h2>
</p>
<p align="center"> 
🧹 RFC822 based email sanitization in Javascript.
</p>

---

## Installation

Using npm

```sh
npm i @arungovil/sanitize-js
```

Using Yarn

```sh
yarn add @arungovil/sanitize-js
```

## Example:

```js
import { sanitize } from "@arungovil/sanitize-js";

const email = "arun(🐞)govil@duck.com";

const sanitizedEmail = sanitize(email);
```
#### Result 

```js
❌ Before
arun(🐞)govil@duck.com 

✅ After
arungovil@duck.com 
```

## Parameters

<table>
  <tr>
    <th>Name<br/></th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Email</td>
    <td>string</td>
    <td>true</td>
    <td>Email string to sanitize</td>
  </tr>
   <tr>
    <td>customRegex</td>
    <td>regex</td>
    <td>false</td>
    <td>Additional custom sanitizer regex</td>
  </tr>
</table>

#### Note
Sanitize-js is used for email sanitization, if you are looking for an email validator use [validator.js](https://github.com/validatorjs/validator.js)
