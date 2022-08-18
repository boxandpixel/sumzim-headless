// import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_STAFF } from '../graphql/Queries';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HomeStaffStyles from './HomeStaff.module.scss';


function Staff() {
    const { loading, error, data } = useQuery(LOAD_STAFF);

    if (loading) return <p>Loading...</p>;
    if (error) return console.log(`Error: ${error.message}`);

    console.log(data);

    const isFeatured = data.allStaff.nodes.filter(({staff}) => staff.isFeatured === true).map(({staff, title, link}) => {
        return (
            <>
            <div key={staff} className={HomeStaffStyles.home__staffSlide}>
                <a href={link}>
                    <figure>
                        <img src={staff.thumbnailImage.mediaItemUrl} alt="" />
                        <figcaption>{title}</figcaption>
                    </figure>
                </a>
            </div>                 
            </>
        )
    });  

    const isWOF = data.allStaff.nodes.filter(({staff}) => staff.isWallOfFame !== null).map(({staff, title, link}) => {
        return (
            <>
            <div key={staff} className={HomeStaffStyles.home__staffSlide}>
                <a href={link}>
                    <figure className={HomeStaffStyles.staffWof}>
                        <div className={HomeStaffStyles.staffWof__Banner}>
                            <span>SZ Wall</span>
                            <span>of Fame</span>
                        </div>                        
                        <img src={staff.thumbnailImage.mediaItemUrl} alt="" />
                        <figcaption>{title}</figcaption>
                    </figure>
                </a>
            </div>                
            </>
        )            
    })

    const isNotFeaturedNotWOF = data.allStaff.nodes.filter(({staff}) => staff.isWallOfFame === null && staff.isFeatured !== true).map(({staff, title, link}) => {
        return (
            <>
            <div key={staff} className={HomeStaffStyles.home__staffSlide}>
                <a href={link}>
                    <figure>
                        <img src={staff.thumbnailImage.mediaItemUrl} alt="" />
                        <figcaption>{title}</figcaption>
                    </figure>
                </a>
            </div>                 
            </>
        )
    })

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6,
            slidesToSlide: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
            slidesToSlide: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 2
        }
    };    

    return (
        <Carousel responsive={responsive} infinite={true}>
            {isFeatured}
            {isNotFeaturedNotWOF}
            {isWOF}
        </Carousel>
    )
}

export default Staff;
