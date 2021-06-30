import Image from "next/image";
import readingTime from "reading-time";
import Link from "next/link";

export default function ArticleCard({ article }) {
  const stats = readingTime(article.content, { wordsPerMinute: 270 });
  const articleDate = new Date(article.date).toLocaleDateString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <article className=" max-w-xl md:max-w-5xl w-fill mx-auto  bg-white dark:bg-navy flex flex-col md:grid md:grid-cols-12 md:gap-6">
      <div className="md:col-span-5">
        <div className="relative aspect-h-3 aspect-w-5 shadow-lg">
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
      </div>
      <div className="md:col-span-7">
        <h3 className="text-navy dark:text-white font-bold text-base md:text-base tracking-wide leading-tight md:leading-tight ">
          {article.title}
        </h3>

        <div className="flex flex-col  text-gray-400  mt-0.5">
          <div className="text-xs flex flex-row space-x-2">
            {article.authors.map((author) => (
              <span key={author.name}>{author.name}</span>
            ))}
          </div>

          <span className=" text-xs">{`${articleDate} • ${stats.text}`}</span>
        </div>
        <p className="mt-1 text-xs tracking-wider leading-normal md:tracking-normal md:leading-normal md:text-xs font-medium text-navy dark:text-white  line-clamp-4">
          {article.excerpt}
        </p>
      </div>
    </article>
  );
}
