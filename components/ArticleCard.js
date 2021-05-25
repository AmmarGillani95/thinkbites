import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ article }) {
  console.log("article card", article);
  return (
    <article className=" max-w-xl md:max-w-5xl w-fill mx-auto  bg-white dark:bg-navy flex flex-col md:grid md:grid-cols-12 md:gap-8">
      <div className="md:col-span-6">
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
      </div>
      <div className="md:col-span-6">
        <h3 className="text-navy dark:text-white font-bold text-base md:text-xl leading-tight tracking-wide mt-2">
          {article.title}
        </h3>

        <div className="flex flex-col  text-gray-500  mt-0.5">
          <div className="text-sm flex flex-row space-x-2">
            {article.authors.map((author) => (
              <span key={author.name}>{author.name}</span>
            ))}
          </div>

          <span className=" text-xs">April 10, 2021 • 7 min read</span>
        </div>
        <p className="mt-2 text-xs tracking-wider leading-normal md:tracking-normal md:leading-normal md:text-base font-medium text-navy dark:text-white">
          {article.excerpt}
        </p>
      </div>
    </article>
  );
}
