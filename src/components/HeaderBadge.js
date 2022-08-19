import React, {useEffect, useState} from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_HEADER } from '../graphql/Queries';
import HeaderBadgeStyles from './HeaderBadge.module.scss';


function HeaderBadge() {
    const { loading, error, data } = useQuery(LOAD_HEADER);

    // Update YOE every minute
    useEffect(() => {
        const interval = setInterval(() => setYears(Date.now()), 3600000);
        return () => {
            clearInterval(interval);
        };
    }, []);      

    const date = new Date();
    const [ years, setYears ] = useState(date);



    if (loading) return <p>Loading...</p>;
    if (error) return console.log(`Error: ${error.message}`);

    console.log(data.headerUpdate.headerContent.yearsOfExperience.mediaItemUrl);

    const badgeStyles = {
        backgroundImage: `url(${data.headerUpdate.headerContent.yearsOfExperience.mediaItemUrl})`,
        backgroundPosition: 'left top',
        backgroundRepeat: 'no repeat',
        backgroundSize: '100%',
    }

    // Get day, hour, minute, and string for output.
    const state = {
        year: date.getFullYear()
    }

    const getYear = state.year;

    const calcYears = (getYear) => {
        return getYear - 1930;
    }

    return (
        <>
        <div key={years} className={HeaderBadgeStyles.header__badge} style={badgeStyles}>
            <div className={HeaderBadgeStyles.header__years}>{calcYears(getYear)}</div>
            <div className={HeaderBadgeStyles.header__yearsDuration}>1930 - {state.year}</div>
        </div>
        
        </>
    )
}

export default HeaderBadge;
