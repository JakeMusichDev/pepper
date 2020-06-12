import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import data from '../../content/restaurants.json'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h1>{data.title}</h1>
    <ul class='grid'>
      {data.content.map((data, index) => {
        return (
          <li class='cell' key={`content_item_${index}`}>
            {data.title}
            {data.neighborhood}
            {data.type}
          </li>
        )
      })}
    </ul>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to='/page-2/'>Go to page 2</Link> <br />
    <Link to='/using-typescript/'>Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
