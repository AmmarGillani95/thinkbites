import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.THINKBITES_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export const GetAllArticlesQuery = gql`
  {
    articles {
      title
      slug
      date
      authors {
        name
      }
      categories {
        name
      }
      image {
        image {
          url
        }
        alt
      }
    }
  }
`;
