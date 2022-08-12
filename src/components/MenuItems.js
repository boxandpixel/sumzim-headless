import React from 'react';
import NavDropdown from './NavDropdowns';
// https://blog.logrocket.com/creating-multilevel-dropdown-menu-react/
function MenuItems({ items }) {

    return (
        <li>
        {items.childItems.edges.length !== 0 ? (
            // Has children
            <>
            <a href={items.url}>{items.label}</a>
            <NavDropdown submenu={items} />
            </>
            
        ) : (
            // Nothing
           <>
           </>
        )
        
        }
        </li>
    )
}
export default MenuItems;