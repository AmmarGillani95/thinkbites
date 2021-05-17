import Container from "../../components/Container";
import { client, GetAllArticlesQuery } from "../../lib/client";
import Hero from "../../components/Hero";
import FeaturedPost from "../../components/FeaturedPost";
import RecentPosts from "../../components/RecentPosts";
import FeaturedContributor from "../../components/FeaturedContributor";

export default function Articles({ articles }) {
  console.log(articles);
  return (
    <Container>
      <div className="flex flex-col space-y-16"></div>
    </Container>
  );
}

export async function getStaticProps() {
  const response = await client.query({
    query: GetAllArticlesQuery,
  });

  console.log(response);

  return {
    props: {
      articles: response.data.articles,
    },
  };
}
