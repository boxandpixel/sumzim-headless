import React, {useEffect, useState} from 'react';

function YearsOfExperience() {
    const date = new Date();
    const [ years, setYears ] = useState(date);

    // Update YOE every minute
    useEffect(() => {
        const interval = setInterval(() => setYears(Date.now()), 3600000);
        return () => {
            clearInterval(interval);
        };
    }, []);  

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
        <div key={years}>
            <div>{calcYears(getYear)} Years of Experience</div>
            <div>1930 - {state.year}</div>
        </div>
        
        </>
    )
}

export default YearsOfExperience;
