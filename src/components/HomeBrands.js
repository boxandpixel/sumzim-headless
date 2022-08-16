// import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_HOME } from '../graphql/Queries';


function HomeBrands() {
    const { loading, error, data } = useQuery(LOAD_HOME);

    if (loading) return <p>Loading...</p>;
    if (error) return console.log(`Error: ${error.message}`);

    console.log(data);

    const brandsHeading = data.pages.nodes[0].template.homePage.brandsHeading;
    const brandsIntroduction = data.pages.nodes[0].template.homePage.brandsIntroduction;

    return (
        <>
        <h1>{brandsHeading}</h1>
        <div dangerouslySetInnerHTML={{__html: brandsIntroduction}}></div>
        
        {data.pages.nodes[0].template.homePage.brandLogos.map(({ brandLogo }) => {
            return <img src={brandLogo.mediaItemUrl} alt="" />
        })}  
        </>      
    )
}

export default HomeBrands;
