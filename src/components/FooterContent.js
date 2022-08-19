// import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_FOOTER } from '../graphql/Queries';
import FooterContentStyles from './FooterContent.module.scss';


function FooterContent() {
    const { loading, error, data } = useQuery(LOAD_FOOTER);

    if (loading) return <p>Loading...</p>;
    if (error) return console.log(`Error: ${error.message}`);

    console.log(data);

    const Year = new Date().getFullYear();
    const addressInformation = data.footerContent.footerContent.addressInformation;
    const ancillaryInformation = data.footerContent.footerContent.ancillaryInformation;

    return (
        <>
        
        <footer className={FooterContentStyles.siteFooter}>
            <div>
                <p>&copy; Copyright {Year}, Summers &amp; Zim's</p>
                <div dangerouslySetInnerHTML={{__html: addressInformation}}></div>
            </div>
            <div className={FooterContentStyles.footer__ancillary}>
                <div dangerouslySetInnerHTML={{__html: ancillaryInformation}}></div>
            </div>
        </footer>
        </>
    )
}

export default FooterContent;
