import React from 'react'

const SponsorSection = (props) => {
  const { node } = props
  return (
    <section id={node.frontmatter.key} className="main">
      <header className="major">
          <h2>{ node.frontmatter.title }</h2>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </header>
    </section>
  )
}
export default SponsorSection
