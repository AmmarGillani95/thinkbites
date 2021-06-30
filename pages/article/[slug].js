import sanitizeHtml from "sanitize-html";
import getTopArticles from "@/lib/getTopArticles";
import Image from "next/image";
import {
  client,
  GetAllArticlesAndCategoriesAndAuthorsQuery,
} from "@/lib/client";
import { gql } from "@apollo/client";
import Container from "@/components/Container";
import ViewCounter from "@/components/ViewCounter";

export default function Article({ article, topArticles }) {
  console.log(topArticles);

  return (
    <Container>
      <div className=" relative aspect-h-5 aspect-w-16 bg-bottom">
        <Image
          src={article.image.image.url}
          alt={article.image.alt}
          // width={540}
          // height={321}
          quality={60}
          objectFit="cover"
          layout="fill"
          priority={true}
        />
      </div>
      <div className="relative flex flex-col max-w-5xl w-fill mx-auto  px-8 justify-between pt-4">
        <div className="max-w-2xl  w-full">
          {/* <div className="shadow-md relative aspect-h-3 aspect-w-5">
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
          <h1 className="font-semibold text-3xl  mt-6">{article.title}</h1>
          <span>
            <ViewCounter slug={article.slug} />
          </span>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(article.content, {
                allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
                allowedAttributes: {
                  p: ["style"],
                  span: ["style"],
                  h1: ["style"],
                  h2: ["style"],
                  h3: ["style"],
                  h4: ["style"],
                },
                allowedStyles: {
                  "*": {
                    "text-align": [/^left$/, /^right$/, /^center$/],
                  },
                  p: {
                    "text-align": [/^left$/, /^right$/, /^center$/],
                  },
                },
              }),
            }}
            className=" prose prose-md dark:prose-dark text-navy  mt-6"
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
  const topArticles = getTopArticles();

  return {
    props: {
      article: response.data.articles[0],
      topArticles: topArticles,
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
