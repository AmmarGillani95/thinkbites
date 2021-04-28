export default function Hero() {
  return (
    <section>
      <h2>Curated for the conscious soul.</h2>
      <span>Personal, spiritual, and community development</span>
      <p>
        Subscribe to our monthly newsletter for our latest work and content
        recommendations
      </p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label for="email" class="sr-only">
            Email address
          </label>
          <input id="email" type="email" placeholder="Email" />
        </div>
        <div>
          <button type="sumbit">Sign Up</button>
        </div>
      </form>
    </section>
  );
}
