// import { useQuery, gql } from '@apollo/client';
import React from 'react';
import Nav from './Nav';
import HeaderStatusMessage from './HeaderStatusMessage';
import HeaderBadge from './HeaderBadge';
import HeaderLogo from './HeaderLogo';
import '../variables.scss';
import HeaderStyles from './HeaderContent.module.scss';


function HeaderContent() {
    return (
        <header className={HeaderStyles.site__header}>
            <HeaderStatusMessage />
            <div className={HeaderStyles.headerNavBadge}>
                <Nav />
                <div className={HeaderStyles.headerContent}>
                <HeaderLogo />
                <HeaderBadge />
                </div>
            </div>
        </header>
    )
}

export default HeaderContent;
