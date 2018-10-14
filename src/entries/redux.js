import {createStore} from 'redux'

const $form = document.getElementById('form')
const $playlist = document.getElementById('playlist')

function createElement(title) {
  const template = `
    <div class="song">
      <h2>${title}</h2>
    </div>
  `

  const html = document.implementation.createHTMLDocument()
  html.body.innerHTML = template

  return html.body.children[0]
}

$form.addEventListener('submit', ev => {
  ev.preventDefault()
  const data = new FormData($form)
  const title = data.get('title')
  store.dispatch({
    type: 'ADD_SONG',
    payload: {
      title
    }
  })
})

const initialState = [
  {
    "title": "D.I.A.B.L.O"
  },
  {
    "title": "Hope"
  },
  {
    "title": "Venom"
  },
  {
    "title": "Nunca vemos nada"
  }
]

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_SONG':
      return [...state, action.payload]
    default:
      return state
  }
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(handleChange)

function handleChange() {
  render()
}

function render() {
  $playlist.innerHTML = ''
  const playlist = store.getState()
  playlist.forEach(item => {
    $playlist.appendChild(createElement(item.title))
  })
}

render()
