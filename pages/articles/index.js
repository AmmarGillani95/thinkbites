import { client, GetAllArticlesAndCategoriesQuery } from "../../lib/client";
import Container from "../../components/Container";
import FeaturedPost from "../../components/FeaturedPost";
import ArticlesComponent from "../../components/ArticlesComponent";

export default function Articles({ articles, categories }) {
  return (
    <Container>
      <div className="flex flex-col space-y-12 max-w-5xl w-fill mx-auto  px-8 mt-16">
        <FeaturedPost />
        <ArticlesComponent articles={articles} categories={categories} />
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const response = await client.query({
    query: GetAllArticlesAndCategoriesQuery,
  });

  return {
    props: {
      articles: response.data.articles,
      categories: response.data.categories,
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
