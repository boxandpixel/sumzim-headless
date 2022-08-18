// import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_HOME } from '../graphql/Queries';
import HomeBrandsStyles from './HomeBrands.module.scss';


function HomeBrands() {
    const { loading, error, data } = useQuery(LOAD_HOME);

    if (loading) return <p>Loading...</p>;
    if (error) return console.log(`Error: ${error.message}`);

    console.log(data);

    const brandsHeading = data.pages.nodes[0].template.homePage.brandsHeading;
    const brandsIntroduction = data.pages.nodes[0].template.homePage.brandsIntroduction;

    return (
        <div className={HomeBrandsStyles.home__brands}>
            <h3>{brandsHeading}</h3>
            <div dangerouslySetInnerHTML={{__html: brandsIntroduction}}></div>
            
            <div className={HomeBrandsStyles.home__brandsLogos}>
            {data.pages.nodes[0].template.homePage.brandLogos.map(({ brandLogo }) => {
                return (
                    <figure className={HomeBrandsStyles.home__brandLogo}>
                        <img src={brandLogo.mediaItemUrl} alt="" />
                    </figure>
                )
            })}  
            </div>
        </div>
    )
}

export default HomeBrands;
