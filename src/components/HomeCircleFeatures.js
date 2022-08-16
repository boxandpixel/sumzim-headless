// import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_HOME } from '../graphql/Queries';


function HomeCircleFeatures() {
    const { loading, error, data } = useQuery(LOAD_HOME);

    if (loading) return <p>Loading...</p>;
    if (error) return console.log(`Error: ${error.message}`);


    return data.pages.nodes[0].template.homePage.circleFeatures.map(({ circleHeading, circleDetail, circleLink }) => {
        return (    
            <>
                <h3>{circleHeading}</h3>
                <div dangerouslySetInnerHTML={{__html: circleDetail}}></div>
                <a href={circleLink.url}>{circleLink.title}</a>
            </>
        )
    });
}

export default HomeCircleFeatures;
