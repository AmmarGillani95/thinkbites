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
          slug
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
        slug
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
          slug
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
    recentArticles: articles(sort: "date:DESC", limit: 5) {
      title
      slug
      date
      excerpt
      content
      image {
        alt
        image {
          url
        }
      }
      authors {
        name
        slug
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

export const GetAllAuthorsSlugs = gql`
  {
    authors {
      slug
    }
  }
`;

export function getAuthorDetails(slug) {
  return gql`
    {
      authors(where: { slug: "${slug}" }) {
        slug
        name
        bio
        image {
          image {
            url
          }
          alt
        }
        articles {
          title
          slug
          date
          content
          excerpt
          image {
            image {
              url
            }
            alt
          }
          authors {
            name
            bio
            slug
  
          }
          categories {
            name
          }
        }
      }
      recentArticles: articles(sort: "date:DESC", limit: 5) {
        title
        slug
      }
    }
  `;
}
