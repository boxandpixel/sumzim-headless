// import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_HOME } from '../graphql/Queries';
import Staff from './Staff';
import HomeStaffStyles from './HomeStaff.module.scss';
import '../buttons.scss';
// https://www.npmjs.com/package/react-multi-carousel


function HomeStaff() {
    const { loading, error, data } = useQuery(LOAD_HOME);

    if (loading) return <p>Loading...</p>;
    if (error) return console.log(`Error: ${error.message}`);

    console.log(data);

    const staffHeading = data.pages.nodes[0].template.homePage.staffHeading;
    const staffLink = data.pages.nodes[0].template.homePage.staffLink;

    return (
        <>
            <div className={HomeStaffStyles.home__staff}>
                <h2>{staffHeading}</h2>
                <div className={HomeStaffStyles.home__staffSlides}>
                    <Staff />
                    <a href={staffLink.url} className={`button button--secondary`}>{staffLink.title}</a>
                </div>
            </div>
        </>
    )
}

export default HomeStaff;
