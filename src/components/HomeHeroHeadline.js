// import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_HOME } from '../graphql/Queries';
import HomeHeroStyles from './HomeHeroHeadline.module.scss';


function HomeHeroHeadline() {
    const { loading, error, data } = useQuery(LOAD_HOME);

    if (loading) return <p>Loading...</p>;
    if (error) return console.log(`Error: ${error.message}`);

    const heroHeadline = data.pages.nodes[0].template.homePage.heroHeadline;
    return (
        <div className={HomeHeroStyles.home__hero}>
            <h1>{heroHeadline}</h1>
        </div>
    )
}

export default HomeHeroHeadline;
