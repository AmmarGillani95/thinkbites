import Container from "../components/Container";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <Container>
      <Hero />
      <div className="max-w-5xl w-fill mx-auto"></div>
    </Container>
  );
}
