import { client, GetAllAuthorsSlugs, getAuthorDetails } from "@/lib/client";

import Author from "@/components/Author";
import NextLink from "@/components/NextLink";
import ArticleCard from "@/components/ArticleCard";
import SidebarRecentArticles from "@/components/SidebarRecentArticles";

import Container from "@/components/Container";

export default function Article({ author, recentArticles }) {
  //   const stats = readingTime(article.content, { wordsPerMinute: 270 });
  //   const articleDate = new Date(article.date).toLocaleDateString("en", {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //     timeZone: "UTC",
  //   });

  return (
    <Container>
      <section className=" max-w-5xl w-fill mx-auto  px-8 mt-8 bg-white dark:bg-navy flex flex-col">
        <Author author={author} />
        <div className="lg:grid lg:grid-cols-12 flex flex-col mt-12">
          <div className="lg:col-span-8">
            <h3 className="uppercase text-navy dark:text-salmon font-medium tracking-wider text-center md:text-left">
              Articles
            </h3>
            <div className="flex flex-col space-y-4 items-center md:items-start mt-4">
              <div className=" flex flex-row space-x-6">
                {author.articles.map((article) => (
                  <NextLink
                    href={`/article/${article.slug}`}
                    key={article.slug}
                  >
                    <ArticleCard article={article} key={article.slug} />
                  </NextLink>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:col-span-4 lg:pl-12">
            <SidebarRecentArticles
              className="mt-14 lg:mt-8"
              recentArticles={recentArticles}
            />
          </div>
        </div>
      </section>
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const response = await client.query({
    query: getAuthorDetails(params.author),
  });

  return {
    props: {
      author: response.data.authors[0],
      recentArticles: response.data.recentArticles,
    },
  };
}

export async function getStaticPaths() {
  const response = await client.query({
    query: GetAllAuthorsSlugs,
  });

  return {
    paths: response.data.authors.map((author) => {
      return { params: { author: author.slug } };
    }),
    fallback: false,
  };
}
