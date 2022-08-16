// import { useQuery, gql } from '@apollo/client';
import React from 'react';
import Nav from './Nav';
import HeaderStatusMessage from './HeaderStatusMessage';
import YearsOfExperience from './YearsOfExperience';
import HeaderLogo from './HeaderLogo';
import '../variables.scss';
import HeaderStyles from './HeaderContent.module.css';


function HeaderContent() {
    return (
        <header className={HeaderStyles.site__header}>
            <HeaderStatusMessage />
            <div className={HeaderStyles.headerNavBadge}>
                <Nav />
                <HeaderLogo />
                <YearsOfExperience />
            </div>
        </header>
    )
}

export default HeaderContent;
