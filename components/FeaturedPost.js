import Image from "next/image";
import readingTime from "reading-time";
import NextLink from "./NextLink";

export default function FeaturedPost({ article }) {
  const stats = readingTime(article.content, { wordsPerMinute: 270 });
  const articleDate = new Date(article.date).toLocaleDateString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <article className=" max-w-xl md:max-w-5xl w-fill mx-auto  bg-white dark:bg-navy flex flex-col md:grid md:grid-cols-12 md:gap-8">
      <h2 className="text-salmon font-medium  text-sm tracking-widest uppercase block md:hidden text-center mb-4">
        Featured
      </h2>
      <div className="md:col-span-6">
        <NextLink href={`/article/${article.slug}`}>
          <div className="relative md:w-auto md:h-full aspect-h-3 aspect-w-5 shadow-lg">
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
      </div>
      <div className="md:col-span-6">
        <h2 className="text-salmon font-medium  text-sm tracking-widest uppercase hidden md:block">
          Featured
        </h2>
        <h3 className="text-navy dark:text-white font-bold text-base md:text-xl leading-tight tracking-wide mt-2">
          <NextLink href={`/article/${article.slug}`}>
            {article.title}{" "}
          </NextLink>
        </h3>

        <div className="flex flex-col  text-gray-500  mt-0.5">
          <div className="text-sm flex flex-row space-x-2">
            {article.authors.map((author) => (
              <NextLink href={`/authors/${author.slug}`}>
                <span key={author.name}>{author.name}</span>
              </NextLink>
            ))}
          </div>
          <span className=" text-xs">{`${articleDate} • ${stats.text}`}</span>
        </div>
        <p className="mt-2 text-xs tracking-wider leading-normal md:tracking-normal md:leading-normal md:text-base font-medium text-navy dark:text-white">
          <NextLink href={`/article/${article.slug}`}>
            {article.excerpt}
          </NextLink>
        </p>
      </div>
    </article>
  );
}
