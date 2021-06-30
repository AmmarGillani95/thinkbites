import db from "@/lib/firebase";

export default function getTopArticles(allArticles) {
  const topArticles = [];

  const scoresRef = db.ref("views");
  scoresRef.orderByValue().on("value", (snapshot) => {
    snapshot.forEach((data) => {
      topArticles.push({
        slug: data.key,
        views: data.val(),
      });
    });
  });

  topArticles.map((article) => {
    let t = allArticles.find((i) => i.slug === article.slug);
    article.title = t.title;
  });

  return topArticles.reverse();
}
