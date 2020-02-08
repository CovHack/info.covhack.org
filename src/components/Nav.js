import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={props.items} currentClassName="is-active" offset={-300}>
          { props.items
              .sort((a, b) => a.node.frontmatter.order - b.node.frontmatter.order)
              .map(item => (
            <li>
              <Scroll type="id" element={item.node.frontmatter.key}>
                  <a href="#">{item.node.frontmatter.title}</a>
              </Scroll>
            </li>
          ))}
        </Scrollspy>
    </nav>
)

export default Nav
