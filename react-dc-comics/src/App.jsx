import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Icons from './components/Icons'
import Jumbotron from './components/Jumbotron'
import { dcComics, shop, dc, sites } from './data/footerData'

const nav = [
  {
    id: 1,
    title: 'CHARACTERS',
    link: '#',
    active: false
  },
  {
    id: 1,
    title: 'COMICS',
    link: '#',
    active: false
  },
  {
    id: 1,
    title: 'MOVIES',
    link: '#',
    active: true
  },
  {
    id: 1,
    title: 'TV',
    link: '#',
    active: false
  },
  {
    id: 1,
    title: 'GAMES',
    link: '#',
    active: false
  },
  {
    id: 1,
    title: 'COLLECTIBLES',
    link: '#',
    active: false
  },
  {
    id: 1,
    title: 'VIDEOS',
    link: '#',
    active: false
  },
  {
    id: 1,
    title: 'FANS',
    link: '#',
    active: false
  },
  {
    id: 1,
    title: 'NEWS',
    link: '#',
    active: false
  },
  {
    id: 1,
    title: 'SHOP',
    link: '#',
    active: false
  },
]

function App() {
  return (
    <>
      <Header nav={nav} />
      <Jumbotron />
      <Main />
      <Icons />
      <Footer dcComics={dcComics} shop={shop} dc={dc} sites={sites} />
    </>

  )
}

export default App
