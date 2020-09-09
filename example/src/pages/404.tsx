import React, { FunctionComponent } from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

const Docs: FunctionComponent = () => {
  return (
    <Layout>
      <h1>There's nothing here!</h1>
      <Link to='/'>&larr; Go back home</Link>
    </Layout>
  )
}

export default Docs
