const textArea = document.getElementById('textArea')

async function start() {
   document.getElementById('first-page').style.display = "none"
   document.getElementById('second-page').style.display = "flex"
   await textArea.value.split(' ').forEach((word, i) => {
      setTimeout(() => {
         document.getElementById('word').textContent = word
      }, i*500)
   })
}