import db from "@/lib/firebase";

export default function getTopArticles() {

    const topArticles = []

    const scoresRef = db.ref('views');
    scoresRef.orderByValue().on('value', (snapshot) => {
      snapshot.forEach((data) => {
        topArticles.push({
          "slug": data.key,
          "views": data.val()
        })
      });
    });

    return topArticles.reverse();

}