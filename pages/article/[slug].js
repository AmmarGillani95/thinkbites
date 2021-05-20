import { client, GetAllArticlesQuery } from "../../lib/client";
import { gql } from "@apollo/client";
import Container from "../../components/Container";

export default function Article({ article }) {
  console.log(article);
  return (
    <Container>
      <div className="relative flex flex-col max-w-5xl w-fill mx-auto  px-8 justify-between pt-6">
        <h1>{article.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: article.content }}
          className=" prose  prose-md prose-yellow dark:text-white text-navy"
        ></div>
      </div>
    </Container>
  );
}

export async function getStaticProps({ params }) {
  console.log(params.slug);
  const GetArticleBySlugQuery = gql`
    {
      articles(where: { slug: "${params.slug}" }) {
        title
        slug
        date
        content
        authors {
          name
        }
        categories {
          name
        }
      }
    }
  `;

  const response = await client.query({ query: GetArticleBySlugQuery });

  return {
    props: {
      article: response.data.articles[0],
    },
  };
}

export async function getStaticPaths() {
  const response = await client.query({ query: GetAllArticlesQuery });
  console.log(response.data.articles);

  //   return {
  //     paths: [{ params: { slug: "suffering-unto-god" } }],
  //     fallback: false,
  //   };
  return {
    paths: response.data.articles.map((article) => {
      return { params: { slug: article.slug } };
    }),
    fallback: false,
  };
}
