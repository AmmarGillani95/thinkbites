import Container from "../components/Container";
import Hero from "../components/Hero";
import FeaturedPost from "../components/FeaturedPost";
import RecentPosts from "../components/RecentPosts";
import FeaturedContributor from "../components/FeaturedContributor";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col  space-y-16">
        <Hero />

        <FeaturedPost />
        <RecentPosts />
        <FeaturedContributor />
      </div>
    </Container>
  );
}
