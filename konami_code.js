const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0

function init() {
  // Write your JavaScript code inside the init() function
  return document.body.addEventListener('keydown', function (e) {
    const input = parseInt(e.which || e.detail)

    if (input === code[index]) {
      index++
      if (index === code.lenght) {
        return alert('Hurray')
      }
    } else {
      index = 0
    }
  })
}
