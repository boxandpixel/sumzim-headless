// import { useQuery, gql } from '@apollo/client';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
// import { onError } from "@apollo/client/link/error";





const client = new ApolloClient({
  uri: 'https://sumzimdev.wpengine.com/qraphql',
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

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  // Log any GraphQL errors or network error that occurred


  return data.locations.map(({ pages }) => (
    <p>{pages}</p>
  ));
}

function Home() {
  return (
    <div>
      test
      <ApolloProvider client={client}>
        <DisplayLocations />
      </ApolloProvider>
    </div>
  );
}

export default Home;
