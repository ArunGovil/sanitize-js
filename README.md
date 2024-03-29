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

## Usage

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
    <td>options</td>
    <td>object</td>
    <td>false</td>
    <td>Additional options</td>
  </tr>
</table>

### Options

<table>
  <tr>
    <th>Name<br/></th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>customRegex</td>
    <td>regex</td>
    <td>false</td>
    <td>Regex to strip out custom patterns</td>
  </tr>
   <tr>
    <td>isNormalString</td>
    <td>boolean</td>
    <td>false</td>
    <td>To sanitize non email inputs</td>
  </tr>
</table>

## Examples
### Using custom regex
Pass a custom regex to strip out matching characters.

```js
import { sanitize } from "@arungovil/sanitize-js";

const email = "arun(🐞)govil@duck.com";
const myRegex = /#/g; // regex to strip out #

const sanitizedEmail = sanitize(email, { customRegex: myRegex  });
```
#### Result 

```js
❌ Before
arun#govil@duck.com 

✅ After
arungovil@duck.com 
```

### Sanitize non email strings
To sanitize only the username of an email or a random string

```js
import { sanitize } from "@arungovil/sanitize-js";

const userName = "arun(🐞)govil";

const sanitizedUserName = sanitize(userName, { isNormalString: true  });
```
#### Result 

```js
❌ Before
arun(🐞)govil

✅ After
arungovil 
```

#### Note
Sanitize-js is used for email sanitization, if you are looking for an email validator use [validator.js](https://github.com/validatorjs/validator.js)
