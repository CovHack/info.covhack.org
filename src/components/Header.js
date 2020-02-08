import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img height="100em" src={logo} alt="" /></span>
        <h1>{props.header}</h1>
        <p>{props.description}</p>
    </header>
)

export default Header
