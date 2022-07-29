// import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_HOME } from '../graphql/Queries';


function HomeHeroHeadline() {
    const { loading, error, data } = useQuery(LOAD_HOME);

    if (loading) return <p>Loading...</p>;
    if (error) return console.log(`Error: ${error.message}`);

    const heroHeadline = data.pages.nodes[0].template.homePage.heroHeadline;
    return (
        <>
            <h1>{heroHeadline}</h1>
        </>
    )
}

export default HomeHeroHeadline;
