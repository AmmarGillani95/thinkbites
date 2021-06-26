import NextLink from "./NextLink";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

export default function ArticlesComponent({ articles, categories }) {
  const [currentCategory, setCategory] = useState("all");

  useEffect(() => {}, [currentCategory]);

  return (
    <section>
      <div className="flex flex-col space-y-4">
        <div className=" flex flex-row space-x-6">
          <button
            onClick={() => setCategory("all")}
            className={`text-navy font-medium dark:text-white uppercase border-b-2   tracking-widest text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-salmon  transition-colors  duration-300 ease-in-out ${
              currentCategory == "all"
                ? "border-b-2 border-salmon"
                : "border-transparent "
            } `}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => setCategory(category.slug)}
              className={`text-navy font-medium dark:text-white uppercase border-b-2   tracking-widest text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-salmon  transition-colors  duration-300 ease-in-out ${
                currentCategory == category.slug
                  ? "border-b-2 border-salmon"
                  : "border-transparent "
              } `}
            >
              {category.name.split(" ")[0]}
            </button>
          ))}
        </div>
        <div className="mt-4 flex flex-col space-y-16">
          {categories.map((category) => {
            if (currentCategory === category.slug) {
              return category.articles.map((article) => (
                <ArticleCard article={article} key={article.slug} />
              ));
            }
          })}

          {currentCategory === "all" &&
            articles.map((article) => (
              <NextLink href={`/article/${article.slug}`} key={article.slug}>
                <ArticleCard article={article} key={article.slug} />
              </NextLink>
            ))}
        </div>
      </div>
    </section>
  );
}
