<p align="center">
<h2 align="center"><a href="https://www.npmjs.com/package/@arungovil/sanitize-js">sanitize-js</a></h2>
</p>
<p align="center">
RFC822 email sanitization in JavaScript.
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

## Usage:

```js
import sanitize from '@arungovil/sanitize-js';

const email = "arungovil@duck.com"

const sanitized = sanitize(email);

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
