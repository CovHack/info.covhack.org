import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const IntroductionSection = (props) => {
  const { node } = props
  /* Find the list of top links */
  const { links } = useStaticQuery(
    graphql`
      query links {
        links: allMarkdownRemark (filter: { frontmatter: { type: { eq: "link" } } }) {
          edges {
            node {
              frontmatter {
                title
                order
                link
              }
            }
          }
        }
      }
    `
  )
  return (
    <section id={node.frontmatter.key} className="main special">
      <header className="major">
        <h2>{ node.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: node.html}} />
      </header>
      <footer className="major">
        <ul className="actions">
          {links.edges
              .sort((a, b) => a.node.frontmatter.order - b.node.frontmatter.order)
              .map(item => 
                  <li>
                    <a href={ item.node.frontmatter.link } className="button special">
                    { item.node.frontmatter.title }
                  </a>
                </li>
              )
          }
        </ul>
      </footer>
      <br />
    </section>
  )
}

export default IntroductionSection
