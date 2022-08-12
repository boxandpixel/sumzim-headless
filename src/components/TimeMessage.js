import React, {useState, useEffect} from 'react';
// import {date} from '../Utils';

function TimeMessage() {
    const date = new Date();
    const [ time, setTime ] = useState(date);

    // Update time every second
    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);  

    // Get day, hour, minute, and string for output.
    const state = {
        day: date.getDay(),
        hour: date.getHours(),
        min: date.getMinutes(),
        year: date.getFullYear(),
        loc: date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
    }

    // Declare variable for getting current day in number format (needed for checkDay parameter)
    const currDay = state.day;
    const currHour = state.hour;

    // Convert day to string
    const dayToString = (currDay) => {
        let isDay;

        switch(currDay) {
            case 0:
                isDay =  "Sunday";
                break;
            case 1:
                isDay = "Monday";
                break;
            case 2:
                isDay = "Tuesday";
                break;
            case 3:
                isDay = "Wednesday";
                break;
            case 4:
                isDay = "Thursday";
                break;
            case 5:
                isDay = "Friday";
                break;
            case 6:
                isDay = "Saturday";
                break;
            default:
                return "test";
        }

        return isDay;
    
    }

    // Display messsage based on current day and time
    const displayMessage = (currDay, currHour) => {
        const officeClosed = " our on-call staff is here to assist you";
        const officeOpen = " our office is now open";

        if(currDay === 1 ||
            currDay === 2 || 
            currDay === 3 ||
            currDay === 4 ||
            currDay === 5
            ) {
                if(currHour > 7 && currHour < 17) {
                    return officeOpen;
                } else {
                    return officeClosed;
                }
            
        } else if (currDay === 6) {
            if(currHour > 7 && currHour < 12) {
                return officeOpen;
            } else {
                return officeClosed;
            }
        } else {
            return officeOpen;
        }
    }


        


    return (
        <>
        <span key={time}>It's {dayToString(currDay)} at {state.loc} and </span>
        {displayMessage(currDay,currHour)}
        </>
    )
}

export default TimeMessage;
