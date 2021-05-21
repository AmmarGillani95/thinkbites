import Container from "../components/Container";
import Hero from "../components/Hero";
import FeaturedPost from "../components/FeaturedPost";
import RecentPosts from "../components/RecentPosts";
import FeaturedContributor from "../components/FeaturedContributor";

export default function Home() {
  return (
    <Container>
      <Hero />
      <div className="flex flex-col max-w-5xl w-fill mx-auto  px-8 space-y-16 mt-4">
        <FeaturedPost />
        <RecentPosts />
        <FeaturedContributor />
      </div>
    </Container>
  );
}
