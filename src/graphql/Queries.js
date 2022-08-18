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
                  id,
                  mediaItemUrl
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
      sourceUrl(size: MEDIUM)
    }
    featuredCardDetail
    featuredCardLink {
      title
      url
    }
  }
`;

export const LOAD_HEADER = gql`
  query HeaderContent {
    headerUpdate {
      headerContent {
          logo {
            id
            mediaItemUrl
          }
          logoMinified {
            id
            mediaItemUrl
          }
          yearsOfExperience {
            mediaItemUrl
          }
        }
      }
  }
`;

export const LOAD_MENU = gql`
query MyQuery3 {
  menus {
    nodes {
      id
      databaseId
      name
      menuItems(first: 100) {
        edges {
          node {
            id
            label
            parentId
            url
            childItems {
              edges {
                node {
                  label
                  url
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

export const LOAD_STAFF = gql`
query GetStaff {
  allStaff(first:100) {
    nodes {
      title
      staff {
        thumbnailImage {
          mediaItemUrl
        }
        isFeatured
        isWallOfFame
      }
      link
    }
  } 
}`

export const LOAD_FOOTER = gql`
query GetFooter {
  footerContent {
    footerContent {
      addressInformation
      ancillaryInformation
      fieldGroupName
    }
  }
}
`
