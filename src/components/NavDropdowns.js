import React from 'react';

function NavDropdown({ submenu }) {
    return (
        <ul className="dropdown">
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