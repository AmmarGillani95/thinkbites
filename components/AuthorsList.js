import NextLink from "./NextLink";

export default function AuthorsList({ authors }) {
  return (
    <div>
      <h2>Authors</h2>
      {authors.map((author) => (
        <p key={author.slug}>{author.name}</p>
      ))}
    </div>
  );
}
