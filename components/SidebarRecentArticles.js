import NextLink from "./NextLink";

export default function SidebarRecentArticles({ className, recentArticles }) {
  return (
    <div className={className}>
      <h3 className="uppercase text-salmon text-sm font-medium tracking-widest">
        Recent
      </h3>
      <div className="flex flex-col space-y-2 mt-2">
        {recentArticles.map((article) => (
          <NextLink
            href={`/article/${article.slug}`}
            className="text-lg lg:text-base text-navy dark:text-white"
            key={article.slug}
          >
            {article.title}
          </NextLink>
        ))}
      </div>
    </div>
  );
}
