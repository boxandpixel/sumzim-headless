import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_MENU } from '../graphql/Queries';
import MenuItems from './MenuItems';
import NavStyles from './Nav.module.scss';

function Nav() {
    const { loading, error, data } = useQuery(LOAD_MENU);

    if (loading) return <p>Loading...</p>;
    if (error) return console.log(`Error: ${error.message}`);

    console.log(data);

    return (
        <nav className={NavStyles.header__nav}>
            <div className={NavStyles.menuPrimaryNavigationContainer}>
            <ul className={NavStyles.menuPrimaryNavigation}>
                {data.menus.nodes[0].menuItems.edges.filter(({node}) => node.parentId === null).map(({node}) => {
                    return <MenuItems items={node} />
                })}
            </ul>
            </div>
        </nav>
    )
}

export default Nav;