// import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_FOOTER } from '../graphql/Queries';


function FooterContent() {
    const { loading, error, data } = useQuery(LOAD_FOOTER);

    if (loading) return <p>Loading...</p>;
    if (error) return console.log(`Error: ${error.message}`);

    console.log(data);

    const Year = new Date().getFullYear();
    const addressInformation = data.footerContent.footerContent.addressInformation;
    const ancillaryInformation = data.footerContent.footerContent.ancillaryInformation;

    return (
        <div>
            &copy; Copyright {Year}, Summers &amp; Zim's
            <div>
                <div dangerouslySetInnerHTML={{__html: addressInformation}}></div>
            </div>
            <div>
                <div dangerouslySetInnerHTML={{__html: ancillaryInformation}}></div>
            </div>
        </div>
    )
}

export default FooterContent;
