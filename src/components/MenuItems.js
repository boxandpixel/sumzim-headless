import React from 'react';
import NavDropdown from './NavDropdowns';
import NavStyles from './Nav.module.scss';
// https://blog.logrocket.com/creating-multilevel-dropdown-menu-react/
function MenuItems({ items }) {

    return (
        <li className={NavStyles.menuItemHasChildren}>
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