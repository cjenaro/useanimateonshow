import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import '../index.css'

const App: FunctionComponent = ({ children }) => (
  <>
    <header>
      <Link to='/'>
        <h3>Use animate on show</h3>
      </Link>
      <Link to='/docs'>Docs</Link>
    </header>
    <main>{children}</main>
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
