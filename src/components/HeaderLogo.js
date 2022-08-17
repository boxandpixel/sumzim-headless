// import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_HEADER } from '../graphql/Queries';
import HeaderLogoStyles from './HeaderLogo.module.scss';


function HeaderLogo() {
    const { loading, error, data } = useQuery(LOAD_HEADER);

    if (loading) return <p>Loading...</p>;
    if (error) return console.log(`Error: ${error.message}`);

    const logo = data.headerUpdate.headerContent.logo.mediaItemUrl;
    return (
        <>
            <div className={HeaderLogoStyles.headerBrand}>
                <a href="/">
                    <img src={logo} alt="" className={HeaderLogoStyles.header__brandLogo} />
                </a>
            </div>
        </>
    )
}

export default HeaderLogo;
