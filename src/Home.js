// import { useQuery, gql } from '@apollo/client';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
// import { onError } from "@apollo/client/link/error";





const client = new ApolloClient({
  uri: 'https://sumzimdev.wpengine.com/graphql',
  cache: new InMemoryCache(),
  // credentials: 'include'
  // mode: 'no-cors'
});

const GET_LOCATIONS = gql`
  query MyQuery {
    pages(where: {id: 2}) {
      edges {
        node {
          title
        }
      } 
    }
  }
`;

function DisplayHome() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  // Log any GraphQL errors or network error that occurred


  return data.title;

}

function Home() {
  return (
    <div>
      Load GraphQL
      <ApolloProvider client={client}>
        <DisplayHome />
      </ApolloProvider>
    </div>
  );
}

export default Home;
