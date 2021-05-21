import Image from "next/image";

import Container from "../../components/Container";
import { client, GetAllArticlesQuery } from "../../lib/client";
import NextLink from "../../components/NextLink";
import FeaturedPost from "../../components/FeaturedPost";

export default function Articles({ articles }) {
  console.log(articles);
  return (
    <Container>
      <div className="flex flex-col space-y-2 max-w-5xl w-fill mx-auto  px-8 mt-16">
        <FeaturedPost />
        {articles.map((article) => (
          <NextLink href={`/article/${article.slug}`} key={article.slug}>
            {article.title}
            <Image
              src={article.image.image.url}
              alt="Picture of the author"
              width={200}
              height={200}
              quality={60}
              objectFit="cover"
            />
          </NextLink>
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const response = await client.query({
    query: GetAllArticlesQuery,
  });

  return {
    props: {
      articles: response.data.articles,
    },
  };
}
