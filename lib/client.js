import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.THINKBITES_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export const GetAllArticlesAndCategoriesAndAuthorsQuery = gql`
  {
    categories {
      name
      slug
      articles(sort: "date:DESC") {
        title
        slug
        date
        excerpt
        content
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
      content
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
    authors {
      name
      slug
      image {
        image {
          url
        }
      }
    }

    featured {
      article {
        title
        slug
        date
        excerpt
        content
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

      author {
        name
        slug
        quote
        image {
          image {
            url
          }
        }
      }
    }
  }
`;

export const GetAllArticles = gql`
  {
    articles {
      title
      slug
      date
    }
  }
`;
