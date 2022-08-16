import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_HOME } from '../graphql/Queries';


function HomeFeaturedCards() {
    const { loading, error, data } = useQuery(LOAD_HOME);

    if (loading) return <p>Loading...</p>;
    if (error) return console.log(`Error: ${error.message}`);

    return data.pages.nodes[0].template.homePage.featuredCards.map(({ featuredCardTitle, featuredCardImage, featuredCardDetail, featuredCardLink }) => {
        return (
            <>
                <h3>{featuredCardTitle}</h3>
                <img src={featuredCardImage.mediaItemUrl} alt="" />
                <div dangerouslySetInnerHTML={{__html: featuredCardDetail}}></div>
                <a href={featuredCardLink.url}>{featuredCardLink.title}</a>
            </>
        )
    });
}

export default HomeFeaturedCards;
