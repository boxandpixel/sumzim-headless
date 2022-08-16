// import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_HOME } from '../graphql/Queries';


function HomeContentFeatures() {
    const { loading, error, data } = useQuery(LOAD_HOME);

    if (loading) return <p>Loading...</p>;
    if (error) return console.log(`Error: ${error.message}`);

    const HomeContentFeaturesHeading = data.pages.nodes[0].template.homePage.contentFeaturesHeading;
    const HomeContentFeaturesIntroduction = data.pages.nodes[0].template.homePage.contentFeaturesIntroduction;
    const HomeContentFeaturesAddendum = data.pages.nodes[0].template.homePage.contentFeaturesAddendum;

    return (
        <div>
        {HomeContentFeaturesHeading}
        <div dangerouslySetInnerHTML={{__html: HomeContentFeaturesIntroduction}}></div>

        {data.pages.nodes[0].template.homePage.contentFeaturesSlides.map(({ contentFeaturesSlidesHeading, contentFeaturesSlidesDetail }) => {
            return (
                <div>
                    <h3>{contentFeaturesSlidesHeading}</h3>
                    <div dangerouslySetInnerHTML={{__html: contentFeaturesSlidesDetail}}></div>
                </div>
            )
        })}            
        <div dangerouslySetInnerHTML={{__html: HomeContentFeaturesAddendum}}></div>
        </div>
    )
}

export default HomeContentFeatures;
