// import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_HOME } from '../graphql/Queries';


function HomeTheDifference() {
    const { loading, error, data } = useQuery(LOAD_HOME);

    if (loading) return <p>Loading...</p>;
    if (error) return console.log(`Error: ${error.message}`);

    return data.pages.nodes[0].template.homePage.theDifferenceCards.map(({ theDifferenceCardTitle, theDifferenceCardImage, theDifferenceCardDetail }) => {
        return (
            <>
                <h3>{theDifferenceCardTitle}</h3>
                <img src={theDifferenceCardImage.mediaItemUrl} alt="" />
                {theDifferenceCardDetail}
            </>
        )
    });
}

export default HomeTheDifference;
