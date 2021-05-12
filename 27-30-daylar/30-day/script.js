const textEl = document.getElementById('text')
const speeedEl = document.getElementById('speed')
const text = 'WE Love Programming'
let idx = 1
let speed = 300 / speeedEl.value

writeText()

function writeText () {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}


speeedEl.addEventListener('input', (e) => speed = 300 / e.target.value)