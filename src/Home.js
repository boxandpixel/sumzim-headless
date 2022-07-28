// import { useQuery, gql } from '@apollo/client';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
// import { onError } from "@apollo/client/link/error";





const client = new ApolloClient({
  uri: 'https://sumzimdev.wpengine.com/graphql',
  cache: new InMemoryCache(),
});

const HomeContent = gql`
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
`;

function DisplayHero() {
  const { loading, error, data } = useQuery(HomeContent);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const homePage = data.pages.nodes[0].template.homePage;


  const heroHeadline = homePage.heroHeadline;
  // const featuredCards = homePage.featuredCards.map(() => {

  // })

  return (
    <>
      <h1>{heroHeadline}</h1>
    </>
  )



  // return data.pages.edges.map(({ node }) => {
  //   return (
  //     <><h1 key="{node.title}">{node.title}</h1></>
  //   )
  // })
  // return console.log(homePage)

}

function Home() {
  return (
    <div>
      Load GraphQL
      <ApolloProvider client={client}>
        <DisplayHero />
      </ApolloProvider>
    </div>
  );
}

export default Home;
