// import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_HOME } from '../graphql/Queries';
import HomeBackgroundMediaStyles from './HomeBackgroundMedia.module.scss';


function HomeBackGroundMedia() {
    const { loading, error, data } = useQuery(LOAD_HOME);

    if (loading) return <p>Loading...</p>;
    if (error) return console.log(`Error: ${error.message}`);

    console.log(data);

    const backgroundVideo = data.pages.nodes[0].template.homePage.backgroundVideoMp4.mediaItemUrl;

    return (
        <div className={HomeBackgroundMediaStyles.home__backgroundMedia}>
            <video autoPlay muted loop>
                <source src={`${backgroundVideo}`} />
            </video>
        </div>
    )
}

export default HomeBackGroundMedia;
