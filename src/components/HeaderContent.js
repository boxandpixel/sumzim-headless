// import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_HEADER } from '../graphql/Queries';


function HeaderContent() {
    const { loading, error, data } = useQuery(LOAD_HEADER);

    if (loading) return <p>Loading...</p>;
    if (error) return console.log(`Error: ${error.message}`);

    const logo = data.headerUpdate.headerContent.logo.mediaItemUrl;
    return (
        <>
            <img src={logo} alt="" />
        </>
    )
}

export default HeaderContent;
