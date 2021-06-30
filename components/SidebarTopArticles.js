import NextLink from "./NextLink";

export default function SidebarTopArticles({ className, topArticles }) {
  return (
    <div className={className}>
      <h3 className="uppercase text-salmon text-xs font-medium tracking-widest">
        Most Read
      </h3>
      <div className="flex flex-col space-y-3 mt-3">
        {topArticles.slice(0, 5).map((article) => (
          <NextLink
            href={`/article/${article.slug}`}
            className="text-xs"
            key={article.slug}
          >
            {article.title}
          </NextLink>
        ))}
      </div>
    </div>
  );
}
