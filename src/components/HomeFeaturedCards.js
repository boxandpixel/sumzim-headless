import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_HOME } from '../graphql/Queries';
import HomeFeaturedCardsStyles from './HomeFeaturedCards.module.scss';
import '../cards.scss';
import '../buttons.scss';


function HomeFeaturedCards() {
    const { loading, error, data } = useQuery(LOAD_HOME);

    if (loading) return <p>Loading...</p>;
    if (error) return console.log(`Error: ${error.message}`);

    const homeFeaturedCard = HomeFeaturedCardsStyles.home__featuredCard;
    const homeFeaturedCardStyles = `${homeFeaturedCard} card card--color-primary`;
    const homeFeaturedCardButtons = `button button--secondary`;


    return (
        <div className={HomeFeaturedCardsStyles.home__featuredCards}>
            {data.pages.nodes[0].template.homePage.featuredCards.map(({ featuredCardTitle, featuredCardImage, featuredCardDetail, featuredCardLink }) => {
                return (
                    <div className={homeFeaturedCardStyles}>
                        <h4>{featuredCardTitle}</h4>
                        <figure>
                            <img src={featuredCardImage.sourceUrl} alt="" />
                        </figure>
                        <div dangerouslySetInnerHTML={{__html: featuredCardDetail}}></div>
                        <a href={featuredCardLink.url} className={homeFeaturedCardButtons}>{featuredCardLink.title}</a>
                    </div>
                )
            })}            
        </div>
    )
}

export default HomeFeaturedCards;
