import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ className, link, label }) => {
    return (
        <div
            className={
                className ?
                    'menu-item ' + className :
                    'menu-item'
            }>
            <a href={link}>{label}</a>
        </div>
    )
}

export default MenuItem;