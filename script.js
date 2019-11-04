// .replace(/([A-Z])/g, v => '-' + v.toLowerCase())
function crease(css) {
  let CSSElement = document.createElement('style')
  CSSElement.innerHTML = unpack(css)
  document.head.appendChild(CSSElement)
  return CSSElement
}

function unpack(css, parent) {
  parent = parent ? parent + ' ' : ''
  let string = ''
  let append = ''
  let newBlock = false
  for (let key in css) {
    string += parent + key + '{'
    for (let attr in css[key]) {
      if (typeof css[key][attr] === 'object') {
        append += unpack({[attr]:css[key][attr]}, parent + key)
      } else {
        string += `${attr.replace(/([A-Z])/g, v => '-' + v.toLowerCase())}:${css[key][attr]};`
      }
    }
    string += '}'
  }
  return string + append
}

module.exports = crease