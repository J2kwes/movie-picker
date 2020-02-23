import React from 'react';

import NavMenu from '../nav-menu/nav-menu.component'

import './header.styles.scss';

const Header = ({ title }) => {
    return (
        <div className="header">
            <div className="container">
                <h1 className="header-title">{title}</h1>
                <NavMenu />
            </div>
        </div>
    )
}

export default Header;