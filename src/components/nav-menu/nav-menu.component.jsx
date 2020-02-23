import React from 'react';

import MenuItem from '../menu-item/menu-item.component'

import './nav-menu.styles.scss';

const NavMenu = () => {
    return (
        <div className="nav">
            <MenuItem link='#' label='home' />
            <MenuItem link='#' label='trending' />
            <MenuItem link='#' label='new' />
            <MenuItem className='fill' link='#' label='contact' />
        </div>
    )
}

export default NavMenu;