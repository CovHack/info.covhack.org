import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={[
          'intro',
          'schedule',
          'food',
          'connectivity',
          'help',
          'submissions',
          'has',
          'sponsors',
          'misc',
          'contact'
          ] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">Introduction</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="schedule">
                    <a href="#">Schedule</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="food">
                    <a href="#">Food</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="connectivity">
                    <a href="#">Connectivity</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="help">
                    <a href="#">Help</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="submissions">
                    <a href="#">Submissions</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="has">
                    <a href="#">Health And Safety</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="sponsors">
                    <a href="#">Sponsors</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="misc">
                    <a href="#">Misc</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="contact">
                    <a href="#">Contact</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
