import React from 'react'
import { Router, Link } from '@reach/router'
import Home from './routes/Home'
import Docs from './routes/Docs'

const App = () => (
  <>
    <header>
      <Link to='/'>
        <h3>Use animate on show</h3>
      </Link>
      <Link to='/docs'>Docs</Link>
    </header>
    <main>
      <Router>
        <Home path='/' />
        <Docs path='/docs' />
      </Router>
    </main>
    <footer>
      <a
        href='http://github.com/jenaro94/useanimateonshow'
        target='_blank'
        rel='noopener noreferrer'
      >
        Github
      </a>
    </footer>
  </>
)

export default App
