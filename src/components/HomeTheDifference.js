// import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_HOME } from '../graphql/Queries';
import HomeTheDifferenceStyles from './HomeTheDifference.module.scss';


function HomeTheDifference() {
    const { loading, error, data } = useQuery(LOAD_HOME);

    if (loading) return <p>Loading...</p>;
    if (error) return console.log(`Error: ${error.message}`);

    const homeTheDifferenceCard = HomeTheDifferenceStyles.home__theDifferenceCard;

    return (
        <div className={HomeTheDifferenceStyles.home__theDifference}>
            {data.pages.nodes[0].template.homePage.theDifferenceCards.map(({ theDifferenceCardTitle, theDifferenceCardImage, theDifferenceCardDetail }) => {
                return (
                    <div className={`${homeTheDifferenceCard} card card--color-primary`}>
                        <h4>{theDifferenceCardTitle}</h4>
                        <figure>
                            <img src={theDifferenceCardImage.mediaItemUrl} alt="" />
                        </figure>
                        <div dangerouslySetInnerHTML={{__html: theDifferenceCardDetail}}></div>
                    </div>
                )
            })}

        </div>
    )

    // return data.pages.nodes[0].template.homePage.theDifferenceCards.map(({ theDifferenceCardTitle, theDifferenceCardImage, theDifferenceCardDetail }) => {
    //     return (
    //         <>
    //             <h3>{theDifferenceCardTitle}</h3>
    //             <img src={theDifferenceCardImage.mediaItemUrl} alt="" />
    //             <div dangerouslySetInnerHTML={{__html: theDifferenceCardDetail}}></div>
    //         </>
    //     )
    // });
}

export default HomeTheDifference;
