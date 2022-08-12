// import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_STAFF } from '../graphql/Queries';
// https://www.npmjs.com/package/react-multi-carousel


function Staff() {
    const { loading, error, data } = useQuery(LOAD_STAFF);

    if (loading) return <p>Loading...</p>;
    if (error) return console.log(`Error: ${error.message}`);

    console.log(data);

    return (
        <>

        
        {data.allStaff.nodes.map(({ staff, title, }) => {
            return (
                <>
                <div key={staff}>
                <h3>{title}</h3>
                <img src={staff.thumbnailImage.mediaItemUrl} alt="" />
                </div>
                </>
            )
        })}  
        </>      
    )
}

export default Staff;
