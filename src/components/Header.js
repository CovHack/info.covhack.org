import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img height="100em" src={logo} alt="" /></span>
        <h1>CovHack2020</h1>
        <p>Here is all <i>hopefully</i> all the information you need for the weekend!</p>
    </header>
)

export default Header
