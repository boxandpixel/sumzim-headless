// import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_HOME } from '../graphql/Queries';
import HomeServiceIconStyles from './HomeServiceIcons.module.scss';


function HomeServiceIcons() {
    const { loading, error, data } = useQuery(LOAD_HOME);

    if (loading) return <p>Loading...</p>;
    if (error) return console.log(`Error: ${error.message}`);

    return (
        <div className={HomeServiceIconStyles.home__serviceIcons}>
            {data.pages.nodes[0].template.homePage.serviceIcons.map(({ serviceIcon, serviceLink }) => {
                return (
                    
                        <figure className={HomeServiceIconStyles.home__serviceIcon}>
                            <a href={serviceLink.url}>
                            <img key={serviceIcon.mediaItemUrl} src={serviceIcon.mediaItemUrl} alt="" />
                            <figcaption>{serviceLink.title}</figcaption>
                            </a>
                        </figure>
                    
                )
            })}

        </div>
    )

    // return data.pages.nodes[0].template.homePage.serviceIcons.map(({ serviceIcon, serviceLink }) => {
    //     return (
    //         <div>
    //             <a href={serviceLink.url}><img key={serviceIcon.mediaItemUrl} src={serviceIcon.mediaItemUrl} alt="" /></a>
    //             <span>{serviceLink.title}</span>
    //         </div>
    //     )
    // });
}

export default HomeServiceIcons;
