import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const HASSection = (props) => {
  const { node } = props
  /* Find the list of top links */
  const { has } = useStaticQuery(
    graphql`
      query has {
        has: allMarkdownRemark (filter: { frontmatter: { type: { eq: "has" } } }) {
          edges {
            node {
              html
              frontmatter {
                title
                order
                image
              }
            }
          }
        }
      }
    `
  )
  return (
    <section id={node.frontmatter.key} className="main">
      <header className="major">
        <h2>{ node.frontmatter.title }</h2>
        <div dangerouslySetInnerHTML={{ __html: node.html}} />
      </header>
      {has.edges
          .sort((a, b) => a.node.frontmatter.order - b.node.frontmatter.order)
          .map(item =>
            <div>
              {item.node.frontmatter.image === "" ? (
                <header className='major'>
                  <h3>{ item.node.frontmatter.title }</h3>
                  <div dangerouslySetInnerHTML={{ __html: item.node.html}} />
                </header>
              ) : 
                <div className="spotlight">
                  <div className="content">
                    <header className="major">
                      <h3>{ item.node.frontmatter.title }</h3>
                      <div dangerouslySetInnerHTML={{ __html: item.node.html}} />
                    </header>
                  </div>
                  <span class="image">
                    <img src={item.node.frontmatter.image} />
                  </span>
                </div>
              }
            </div>
          )
      }
      <br />
    </section>
  )
}

export default HASSection
