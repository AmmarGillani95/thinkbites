import sanitizeHtml from "sanitize-html";
import Image from "next/image";
import {
  client,
  GetAllArticlesAndCategoriesAndAuthorsQuery,
} from "@/lib/client";
import { gql } from "@apollo/client";
import Container from "@/components/Container";
import ViewCounter from "@/components/ViewCounter";

export default function Article({ article }) {
  return (
    <Container>
      {/* <div className="shadow-md  relative h-[600px] bg-center">
        <Image
          src={article.image.image.url}
          alt={article.image.alt}
          // width={540}
          // height={321}
          quality={60}
          objectFit="cover"
          layout="fill"
        />
      </div> */}
      <div className="relative flex flex-col max-w-5xl w-fill mx-auto  px-8 justify-between pt-8">
        <div className="max-w-2xl mx-auto w-full">
          <div className="shadow-md relative aspect-h-3 aspect-w-5">
            <Image
              src={article.image.image.url}
              alt={article.image.alt}
              // width={540}
              // height={321}
              quality={60}
              objectFit="cover"
              layout="fill"
            />
          </div>
          <h1 className="font-semibold text-2xl text-center mt-6">
            {article.title}
          </h1>
          <span>
            <ViewCounter slug={article.slug} />
          </span>
          <div
            dangerouslySetInnerHTML={{ __html: article.content }}
            className=" prose  prose-md dark:prose-dark text-navy mx-auto mt-6"
          ></div>
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const GetArticleBySlugQuery = gql`
    {
      articles(where: { slug: "${params.slug}" }) {
        title
        slug
        date
        content
        image {
          image {
            url
          }
          alt
        }
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
  const response = await client.query({
    query: GetAllArticlesAndCategoriesAndAuthorsQuery,
  });

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
