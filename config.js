const showAndPlayJoke = (text, language, voice) => {
  document.getElementById('joke').innerText = text
  VoiceRSS.speech({
    key: '8545e35dc3fc48619d6eee407b318eff',
    src: text,
    hl: language,
    v: voice,
    r: 0,
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false
  })
}

const mapping = {
  'tronald-dump': {
    colors: {
      '--bg': '#fdbc82',
      '--text': ' #3f41bf',
      '--btn-text': '#d82129',
      '--btn-bg': '#1f174b',
      '--primary': '#383498'
    },
    callback: async () => {
      const response = await fetch('https://api.tronalddump.io/random/quote')
      const { value } = await response.json()
      showAndPlayJoke(value, 'en-us', 'Mike')
    }
  },
  'chuck-norris': {
    colors: {
      '--bg': '#fff',
      '--text': '#4ca7ad',
      '--btn-text': '#e5432d',
      '--btn-bg': '#3b3b3b',
      '--primary': 'gold'
    },
    language: 'en-us',
    voice: 'John',
    callback: async () => {
      const response = await fetch(
        'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
        {
          headers: {
            'x-rapidapi-host':
              'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
            'x-rapidapi-key':
              'd1ffc86058msh4655832d2998888p1a41e9jsn7b85fb5f6ed4',
            accept: 'application/json',
            useQueryString: true
          }
        }
      )
      const { value } = await response.json()
      showAndPlayJoke(value, 'en-us', 'Mike')
    }
  },
  en: {
    colors: {
      '--bg': 'lightblue',
      '--text': 'red',
      '--btn-text': 'white',
      '--btn-bg': 'red',
      '--primary': 'white'
    },
    callback: async () => {
      const response = await fetch(
        'https://sv443.net/jokeapi/v2/joke/any?type=single'
      )
      const { joke } = await response.json()
      showAndPlayJoke(joke, 'en-us', 'Mary')
    }
  },
  fr: {
    colors: {
      '--bg': '#fff',
      '--text': 'blue',
      '--btn-text': 'red',
      '--btn-bg': 'blue',
      '--primary': 'red'
    },
    callback: async () => {
      const response = await fetch('https://www.blagues-api.fr/api/random', {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNzE3NDIxMjU1MDMyMDQ1NjM5IiwibGltaXQiOjEwMCwia2V5IjoibnVZYzZhbjBJaE0ybXY1aUozQ2Jpc0JkdjhlaDR4QVJZMW95WlZGREZhQmI3aUN2aFMiLCJjcmVhdGVkX2F0IjoiMjAyMC0wOC0wOFQwOTo1NDowNyswMjowMCIsImlhdCI6MTU5Njg3MzI0N30.jqdF9UJpzHreGrjBk05jwW5dCRlx5Gcrn8lLNXrhIJw'
        }
      })
      const { joke, answer } = await response.json()
      showAndPlayJoke(`${joke} \n ${answer}`, 'fr-fr', 'Iva')
    }
  },
  kanye: {
    colors: {
      '--bg': '#e7e2bf',
      '--text': '#090808',
      '--btn-text': '#090808',
      '--btn-bg': '	#c8c9ac',
      '--primary': '#928b61'
    },
    callback: async () => {
      const response = await fetch('https://api.kanye.rest')
      const { quote } = await response.json()
      showAndPlayJoke(quote, 'en-us', 'Mike')
    }
  }
}
