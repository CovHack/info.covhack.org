import React from 'react'
import { useStaticQuery } from 'gatsby' 

const ConnectivitySection = (props) => {
  const { node } = props

    const { wifi } = useStaticQuery(
      graphql`
        query wifi {
          wifi: allMarkdownRemark (filter: { frontmatter: { type: { eq: "wifi" } } }) {
            edges {
              node {
                html
                frontmatter {
                  title
                  auth
                  type
                  icon
                  order
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
        <h2>{ node.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: node.html}} />
      </header>
      <ul className="statistics">
        {wifi.edges
          .sort((a, b) => a.node.frontmatter.order - b.node.frontmatter.order)
          .map(item =>
            <li className={`style${item.node.frontmatter.order + 1}`}>
              {item.node.frontmatter.icon === 'secure' && 
                <span class="icon fa-lock"></span>
              }
              {item.node.frontmatter.icon === 'insecure' && 
                <span class="icon fa-eye"></span>
              }
              <h2>{item.node.frontmatter.title}</h2>
              {item.node.frontmatter.auth}
              <br />< br/>
              <div dangerouslySetInnerHTML={{ __html: item.node.html }} />
            </li>
          )
        }
      </ul>
    </section>
  )
}
export default ConnectivitySection
