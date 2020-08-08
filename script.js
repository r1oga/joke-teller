const root = document.documentElement
const audioElement = document.getElementById('audio')
const btnElement = document.getElementById('button')

// init
let selected = 'tronald-dump'
btnElement.addEventListener('click', mapping[selected].callback)

document
  .getElementById('jokes')
  .addEventListener('change', ({ target: { value } }) => {
    // clean joke text div
    document.getElementById('joke').innerText = ''

    // stop and hide audio
    audioElement.pause()
    audioElement.hidden = true
    // remove previous event listener
    btnElement.removeEventListener('click', mapping[selected].callback)

    // add new event listener
    btnElement.addEventListener('click', mapping[value].callback)
    // update color palette
    Object.entries(mapping[value].colors).forEach(([k, v]) => {
      root.style.setProperty(k, v)
      root.style.setProperty('--bg-url', `url('img/${value}.png')`)
    })

    // store selected value
    selected = event.target.value
  })
