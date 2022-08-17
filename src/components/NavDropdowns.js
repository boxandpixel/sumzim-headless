import React from 'react';
import NavStyles from './Nav.module.scss';

function NavDropdown({ submenu }) {
    return (
        <ul className={NavStyles.subMenu}>
            {submenu.childItems.edges.map(({node}) => {
                return (
                    <>
                    <li>
                        <a href={node.url}>{node.label}</a>
                    </li>                  
                    </>
                )
                
            })}
        </ul>
    )
}
export default NavDropdown;