import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import data from '../../content/restaurants.json'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <h1>{data.title}</h1>
    <ul class='grid'>
      {data.content.map((data, index) => {
        return (
          <li class='cell' key={`content_item_${index}`}>
            <p>{data.title}</p>
            <p>{data.neighborhood}</p>
            <p>{data.type}</p>
            <button>EAT IT</button>
          </li>
        )
      })}
    </ul>
  </Layout>
)

export default IndexPage
