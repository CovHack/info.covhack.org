import React from 'react'
import { useStaticQuery } from 'gatsby'

const ScheduleSection = (props) => {
  const { node } = props

  const { schedule } = useStaticQuery(
    graphql`
      query  {
        schedule: allMarkdownRemark (filter: { frontmatter: { type: { eq: "schedule" } } }) {
          edges {
            node {
              html
              frontmatter {
                title
                order
                type
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
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
      </header>
      <p class="content">
      {schedule.edges
        .sort((a, b) => a.node.frontmatter.order - b.node.frontmatter.order)
        .map(item =>
          <div>

            <h3>{ item.node.frontmatter.title }</h3>
            <div dangerouslySetInnerHTML={{ __html: item.node.html }} />
          </div>
          )
      }
      </p>
    </section>
  )
}
export default ScheduleSection
