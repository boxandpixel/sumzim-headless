// import { useQuery, gql } from '@apollo/client';
import React, { useRef, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_HOME } from '../graphql/Queries';
import HomeCircleFeaturesStyles from './HomeCircleFeatures.module.scss';
import '../buttons.scss';

//https://www.digitalocean.com/community/tutorials/implementing-a-scroll-based-animation-with-javascript

function HomeCircleFeatures() {
    const { loading, error, data } = useQuery(LOAD_HOME);

    const myRef = useRef();
    const [myElementIsVisible, setMyElementVisible] = useState();
    console.log('myElementIsVisible', myElementIsVisible);
    useEffect(() => {
        if(data) {
            const observer = new IntersectionObserver((entries) => {
                const entry = entries[0];
                setMyElementVisible(entry.isIntersecting);
            })

            observer.observe(myRef.current)            
        }

    }, [loading,data]);


    if (loading) return <p>Loading...</p>;
    if (error) return console.log(`Error: ${error.message}`);

    const noAnim = HomeCircleFeaturesStyles.home__circleFeature;
    const withAnim = 'aos-animate';

    return (
        <div ref={myRef} className={HomeCircleFeaturesStyles.home__circleFeatures}>
            <div className={HomeCircleFeaturesStyles.home__circleAnchor} id="circle-trigger"></div>
            {data.pages.nodes[0].template.homePage.circleFeatures.map(({ circleHeading, circleDetail, circleLink }) => {
                return (    
                    <div className={HomeCircleFeaturesStyles.home__circleFeatureWrap} data-aos="example-anim2" data-aos-duration="1500" data-aos-anchor="#circle-trigger">
                        <div className={myElementIsVisible ? `${noAnim} ${withAnim}` : `${noAnim}` } data-aos="example-anim3" data-aos-duration="1500" data-aos-anchor="#circle-trigger">
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
