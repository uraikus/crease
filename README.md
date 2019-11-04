Crease
=================

The super lightweight, fully tested, simple, and easy CSS by JS module. Create CSS with Ease.

Currently supports children inheritance and camelCase:
```js
import crease from 'crease'

var createdStyleElement = crease({
  '#container': {
    border: '1px solid black',
    padding: '5px',
    boxShadow: '3px 3px 6px black',
    
    'input[type="button"]': {
      cursor: 'pointer'
    }
  }
})
```
equals the following html element appended to the document's head (in minified form):
```css
<style>
  #container {
    border: 1px solid black;
    padding: 5px;
    box-shadow: 3px 3px 6px black;
  }
  #container input[type="button"] {
    cursor: pointer;
  }
</style>
```
Crease works great with [crelm](https://www.npmjs.com/package/crelm) for native javascript componentization:
```js
import crelm from 'crelm'
import crease from 'crease'

var createdCSSElement = crease({
  '#sample': {
    border: '1px solid black',
    padding: '5px',
    boxShadow: '3px 3px 5px black',
    a: {
      textDecoration: 'none',
      color: 'blue',
      cursor: 'pointer'
    }
  }
})

var createdDOMElement = crelm({
  id: 'sample',
  parent: document.body,
  children: [
    'My Links:',
    {tagName: 'a', innerText: 'My Website', href: 'https://<whatever>.me'},
  ]
})
```
Would equal:
```html
<head>
  <style>
    #sample {
      border: 1px solid black;
      padding: 5px;
      box-shadow: 3px 3px 5px black;
    }
    #sample a {
      text-decoration: none;
      color: blue;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div id="sample">
    My Links
    <a href="https://<whatever>.me">My Website</a>
  </div>
</body>
```