const joke = document.getElementById('joke')
const audio = document.getElementById('audio')
const showAndPlayJoke = (text, language, voice) => {
  if (text.length > 250) {
    joke.style.setProperty('font-size', '1rem')
  } else {
    joke.style.setProperty('font-size', '1.2rem')
  }
  audio.hidden = false
  joke.innerText = text
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
      '--text': 'tomato',
      '--btn-text': 'white',
      '--btn-bg': 'tomato',
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
      '--btn-text': 'tomato',
      '--btn-bg': 'lightblue',
      '--primary': 'tomato'
    },
    callback: async () => {
      const response = await fetch(
        'https://c0rsanywhere.herokuapp.com/https://blague.xyz/api/vdm/random',
        {
          headers: {
            Authorization:
              's5YZOz7pHvRp_WEJ0hvE_ovckgaMuXCH71bBGKtYbu3YokIlBQ4o69FIdmOn_.Oc'
          }
        }
      )
      const {
        vdm: { content }
      } = await response.json()
      showAndPlayJoke(content, 'fr-fr', 'Iva')
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
