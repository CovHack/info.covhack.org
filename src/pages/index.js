import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Layout from '../components/layout'
import InfoSection from '../components/InfoSection'
import Nav from '../components/Nav'
import useSiteMetadata from '../components/SiteMetadata'

const Index = ({ data }) => {
  const { title, header, description } = useSiteMetadata()
  const sections = data.sections.edges
  console.log(sections)
  return (
    <Layout>
      <Helmet title={ title } />

      <Header header={ header } description={ description }/>
      <Nav items={ sections } />

      <div id="main">

        {sections.sort((a, b) => a.node.frontmatter.order - b.node.frontmatter.order)
            .map(siteSection =>
          <InfoSection data={siteSection} />
        )}

      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexPage {
    sections: allMarkdownRemark(filter: { frontmatter: { type: { eq: "section" } } }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            type
            container
            key
            order
         }
        }
      }
    }
  }
`

export default Index
