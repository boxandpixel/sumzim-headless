import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_MENU } from '../graphql/Queries';
import MenuItems from './MenuItems';

function Nav() {
    const { loading, error, data } = useQuery(LOAD_MENU);

    if (loading) return <p>Loading...</p>;
    if (error) return console.log(`Error: ${error.message}`);

    console.log(data);

    return (
        <nav>
        <ul>
            {data.menus.nodes[0].menuItems.edges.filter(({node}) => node.parentId === null).map(({node}) => {
                return <MenuItems items={node} />
            })}
        </ul>
        </nav>
    )

    // return data.menus.nodes[0].menuItems.edges.map(({ node }) => {
    //     return (
    //         <>
        
    //             <ul>
    //                 <li>
    //                     <MenuItems items={node} />
    //                 </li>
    //             </ul>
                
    //         </>
    //     )
    // });
}

export default Nav;