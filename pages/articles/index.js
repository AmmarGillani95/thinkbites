import {
  client,
  GetAllArticlesAndCategoriesAndAuthorsQuery,
} from "../../lib/client";
import Container from "../../components/Container";
import FeaturedPost from "../../components/FeaturedPost";
import ArticlesComponent from "../../components/ArticlesComponent";
import AuthorsList from "../../components/AuthorsList";

export default function Articles({
  articles,
  categories,
  authors,
  featuredArticle,
}) {
  return (
    <Container>
      <div className="flex flex-col space-y-16 max-w-5xl w-fill mx-auto  px-8 mt-16">
        <FeaturedPost article={featuredArticle} />
        <div className="grid grid-cols-12 ">
          <div className="col-span-8">
            <ArticlesComponent articles={articles} categories={categories} />
          </div>
          <div className="col-span-4 pl-12">
            <AuthorsList authors={authors} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const response = await client.query({
    query: GetAllArticlesAndCategoriesAndAuthorsQuery,
  });

  return {
    props: {
      articles: response.data.articles,
      categories: response.data.categories,
      authors: response.data.authors,
      featuredArticle: response.data.featured.article,
      featuredAuthor: response.data.featured.author,
    },
  };
}
//  {articles.map((article) => (
//           <NextLink href={`/article/${article.slug}`} key={article.slug}>
//             {article.title}
//             <Image
//               src={article.image.image.url}
//               alt="Picture of the author"
//               width={200}
//               height={200}
//               quality={60}
//               objectFit="cover"
//             />
//           </NextLink>
//         ))}
