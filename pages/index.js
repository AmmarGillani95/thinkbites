import {
  client,
  GetAllArticlesAndCategoriesAndAuthorsQuery,
} from "../lib/client";

import Container from "../components/Container";
import Hero from "../components/Hero";
import FeaturedPost from "../components/FeaturedPost";
import RecentPosts from "../components/RecentPosts";
import FeaturedContributor from "../components/FeaturedContributor";

export default function Home({ featuredArticle, featuredContributor }) {
  return (
    <Container>
      <Hero />
      <div className="flex flex-col max-w-5xl w-fill mx-auto  px-8 space-y-16 mt-4">
        <FeaturedPost article={featuredArticle} />
        <RecentPosts />
        <FeaturedContributor contributor={featuredContributor} />
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
      featuredContributor: response.data.featured.author,
    },
  };
}
