import React from 'react'

const SubmissionSection = (props) => {
  const { node, link } = props
  return (
    <section id={node.frontmatter.key} className="main">
      <header className="major">
          <h2>{ node.frontmatter.title }</h2>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </header>
        <footer className="major">
          <ul className="actions">
            <li>
              <a href={ link } className="button special">
                Submit your project!
              </a>
            </li>
          </ul>
        </footer>
    </section>
  )
}
export default SubmissionSection
