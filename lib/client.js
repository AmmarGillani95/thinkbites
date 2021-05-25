import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.THINKBITES_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export const GetAllArticlesAndCategoriesQuery = gql`
  {
    categories {
      name
      slug
      articles(sort: "date:DESC") {
        title
        slug
        date
        excerpt
        authors {
          name
        }
        categories {
          name
          slug
        }
        image {
          image {
            url
          }
          alt
        }
      }
    }
    articles(sort: "date:DESC") {
      title
      slug
      date
      excerpt
      authors {
        name
      }
      categories {
        name
        slug
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
