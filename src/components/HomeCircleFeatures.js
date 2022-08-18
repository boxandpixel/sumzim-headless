// import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_HOME } from '../graphql/Queries';
import HomeCircleFeaturesStyles from './HomeCircleFeatures.module.scss';
import '../buttons.scss';


function HomeCircleFeatures() {
    const { loading, error, data } = useQuery(LOAD_HOME);

    if (loading) return <p>Loading...</p>;
    if (error) return console.log(`Error: ${error.message}`);

    return (
        <div className={HomeCircleFeaturesStyles.home__circleFeatures}>
            <div className={HomeCircleFeaturesStyles.home__circleAnchor} id="circle-trigger"></div>
            {data.pages.nodes[0].template.homePage.circleFeatures.map(({ circleHeading, circleDetail, circleLink }) => {
                return (    
                    <div className={HomeCircleFeaturesStyles.home__circleFeatureWrap} data-aos="example-anim2" data-aos-duration="1500" data-aos-anchor="#circle-trigger">
                        <div className={HomeCircleFeaturesStyles.home__circleFeature} data-aos="example-anim3" data-aos-duration="1500" data-aos-anchor="#circle-trigger">
                            <h4>{circleHeading}</h4>
                            <div dangerouslySetInnerHTML={{__html: circleDetail}}></div>
                            <a className={`button button--secondary`} href={circleLink.url}>{circleLink.title}</a>
                        </div>
                    </div>
                )
        })}
        </div>
    )
}

export default HomeCircleFeatures;
