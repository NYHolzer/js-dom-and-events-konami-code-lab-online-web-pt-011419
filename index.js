const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let keypresses = []

let index = 0

function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', function(e){
    const key = parseInt(e.which || e.detail)
    if (code[index] === key) {
      index++
      if (index === code.length){
        alert("Congradulations")
      }
    } else {
      index = 0 
    }
  });
}