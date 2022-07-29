// import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_HOME } from '../graphql/Queries';


function HomeServiceIcons() {
    const { loading, error, data } = useQuery(LOAD_HOME);

    if (loading) return <p>Loading...</p>;
    if (error) return console.log(`Error: ${error.message}`);

    return data.pages.nodes[0].template.homePage.serviceIcons.map(({ serviceIcon, serviceLink }) => {
        return (
            <>
                <a href={serviceLink.url}><img key={serviceIcon.mediaItemUrl} src={serviceIcon.mediaItemUrl} alt="" /></a>
            </>
        )
    });
}

export default HomeServiceIcons;
