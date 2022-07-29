import { gql } from '@apollo/client';

export const LOAD_HOME = gql`
  query HomeContent {
    pages(where: {id: 2}) {
      nodes {
        template {
          ... on Template_HomePage {
            homePage {
              heroHeadline
              backgroundVideoMp4 {
                mediaItemUrl
              }
              featuredCards {
                ... homeFeatured
              }
              serviceIcons {
                serviceIcon {
                  mediaItemUrl
                }
                serviceLink {
                  title
                  url
                }
              }
              theDifferenceCards {
                theDifferenceCardTitle
                theDifferenceCardImage {
                  id
                }
                theDifferenceCardDetail
              }
              staffHeading
              staffLink {
                title
                url
              }
              circleFeatures {
                circleHeading
                circleDetail
                circleLink {
                  url
                  title
                }
              }
              contentFeaturesHeading
              contentFeaturesIntroduction
              contentFeaturesSlides {
                contentFeaturesSlidesHeading
                contentFeaturesSlidesDetail
                contentFeaturesSlidesLink {
                  title
                  url
                }
              }
              contentFeaturesAddendum
              brandsHeading
              brandsIntroduction
              brandLogos {
                brandLogo {
                  mediaItemUrl
                }
              }
            }
          }
        }
      }
    }
  }

  fragment homeFeatured on Template_HomePage_Homepage_featuredCards {
    featuredCardTitle
    featuredCardImage {
      mediaItemUrl
    }
    featuredCardDetail
    featuredCardLink {
      title
      url
    }
  }
`;