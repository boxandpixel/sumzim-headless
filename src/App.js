// import logo from './logo.svg';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import HomePage from './components/HomePage';
import HeaderContent from './components/HeaderContent';
import FooterContent from './components/FooterContent';
import "@fontsource/raleway/300.css";
import "@fontsource/raleway/300.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/700.css";
import './styles.scss';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, location, path }) => {
      return console.log(`GraphQL Error: ${message}, ${location}, ${path}`)
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({ uri: 'https://sumzimdev.wpengine.com/graphql' }),
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});


function App() {
  return (
    <ApolloProvider client={client}>
      <HeaderContent />
      <HomePage />
      <FooterContent />
    </ApolloProvider>
  )
}

export default App;
