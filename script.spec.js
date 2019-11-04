require('browser-env')()
const crease = require('./script.js')

test('Create a stylesheet.', () => {
  let sheet = crease({
    div: {
      border: '1px solid black',
      borderRadius: '5px',
      span: {
        background: 'none',
        '.input': {
          border: 'none'
        }
      }
    }
  })
  expect(sheet.innerHTML).toBe('div{border:1px solid black;border-radius:5px;}div span{background:none;}div span .input{border:none;}')
})