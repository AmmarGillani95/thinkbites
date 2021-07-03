import sanitizedHTML from "@/lib/sanitizedHTML";
import readingTime from "reading-time";
import getTopArticles from "@/lib/getTopArticles";
import Image from "next/image";
import NextLink from "@/components/NextLink";
import {
  client,
  GetAllArticlesAndCategoriesAndAuthorsQuery,
  GetAllArticles,
} from "@/lib/client";
import { gql } from "@apollo/client";
import Container from "@/components/Container";
import ViewCounter from "@/components/ViewCounter";
import AuthorCard from "@/components/AuthorCard";
import SidebarRecentArticles from "@/components/SidebarRecentArticles";
import ArticleShareLinks from "@/components/ArticleShareLinks";

export default function Article({ article, recentArticles, domain }) {
  const stats = readingTime(article.content, { wordsPerMinute: 270 });
  const articleDate = new Date(article.date).toLocaleDateString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <Container>
      <div className=" relative aspect-h-8 aspect-w-16 md:aspect-h-6">
        <Image
          src={article.image.image.url}
          alt={article.image.alt}
          // width={540}
          // height={321}
          quality={60}
          objectFit="cover"
          layout="fill"
          priority={true}
          className="object-bottom"
        />
      </div>
      <div className="relative flex flex-col max-w-5xl w-fill mx-auto  px-8 justify-between pt-6">
        <div className="flex flex-col lg:flex-row">
          <div className="max-w-2xl  w-full mx-auto lg:mx-0">
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
            <h1 className="font-semibold text-2xl md:text-4xl text-navy dark:text-white ">
              {article.title}
            </h1>
            <div className="mt-4 lg:hidden">
              {article.authors.map((author) => (
                <NextLink href={`/authors/${author.slug}`} key={author.slug}>
                  <p className="text-sm font-medium tracking-wider uppercase text-navy dark:text-salmon">
                    {author.name}
                  </p>
                </NextLink>
              ))}
              <span className=" text-xs  tracking-wide text-gray-400">{`${articleDate} • ${stats.text}`}</span>
            </div>
            <span>
              <ViewCounter slug={article.slug} />
            </span>
            <div
              dangerouslySetInnerHTML={{
                __html: sanitizedHTML(article.content),
              }}
              className=" prose prose-lg dark:prose-dark text-navy  mt-6"
            ></div>
          </div>
          <div className="text-navy dark:text-white w-full flex-1 ml-0 lg:ml-16 flex flex-col items-center lg:items-start mt-4 lg:mt-0">
            <span className=" text-xs  tracking-wide text-gray-400 hidden lg:block">{`${articleDate} • ${stats.text}`}</span>
            <ArticleShareLinks
              url={`${domain}/article/${article.slug}`}
              title={article.title}
            />
            <div className="mt-4 lg:mt-4 flex flex-col items-center">
              {article.authors.map((author) => (
                <AuthorCard author={author} key={author.slug} />
              ))}
            </div>
            <SidebarRecentArticles
              className="mt-14 lg:mt-8"
              recentArticles={recentArticles}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const GetArticleBySlugQuery = gql`
    {
      article: articles(where: { slug: "${params.slug}" }) {
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
          bio
          slug
          image {
            image {
              url
            }
          }
        }
        categories {
          name
        }
      }
      recentArticles: articles(sort: "date:DESC", limit: 5) {
        title
        slug
      }
    }
  `;

  const response = await client.query({ query: GetArticleBySlugQuery });
  const allArticles = await client.query({
    query: GetAllArticles,
  });
  const topArticles = getTopArticles(allArticles.data.articles);

  return {
    props: {
      article: response.data.article[0],
      recentArticles: response.data.recentArticles,
      topArticles: topArticles,
      domain: process.env.domain,
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
