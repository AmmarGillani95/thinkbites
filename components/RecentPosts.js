import Image from "next/image";
import NextLink from "./NextLink";
import readingTime from "reading-time";

export default function RecentPosts({ articles }) {
  return (
    <section className="max-w-xl md:max-w-5xl mx-auto bg-white dark:bg-navy flex flex-col">
      <h2 className="block mx-auto text-salmon font-medium  text-sm tracking-widest uppercase ">
        Recent
      </h2>
      <div className="grid grid-cols-1 auto-rows-max  gap-y-16  gap-x-12 md:grid-cols-3 md:grid-rows-1  mt-6 text-navy dark:text-white">
        {articles.map((article) => {
          const stats = readingTime(article.content, { wordsPerMinute: 270 });
          const articleDate = new Date(article.date).toLocaleDateString("en", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC",
          });
          return (
            <article key={article.slug}>
              <NextLink href={`/article/${article.slug}`}>
                <div className="shadow-md relative aspect-h-3 aspect-w-5 ">
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
              </NextLink>
              <div className="mt-3">
                <NextLink href={`/article/${article.slug}`}>
                  <h3 className="font-bold tracking-wide text-base leading-tight">
                    {article.title}
                  </h3>
                </NextLink>
                <div className="flex flex-col  text-gray-500 mt-0.5">
                  {article.authors.map((author) => (
                    <NextLink href={`/authors/${author.slug}`}>
                      <span key={author.name} className="text-sm">
                        {author.name}
                      </span>
                    </NextLink>
                  ))}
                  <span className=" text-xs">{`${articleDate} • ${stats.text}`}</span>
                </div>
                <NextLink href={`/article/${article.slug}`}>
                  <p className="mt-2  text-xs font-medium tracking-wider leading-normal">
                    {article.excerpt}
                  </p>
                </NextLink>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
