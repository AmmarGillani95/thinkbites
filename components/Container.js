import Head from "next/head";
import { useRouter } from "next/router";

import Navbar from "./Navbar";

export default function Container(props) {
  const router = useRouter();

  const { children, ...customMeta } = props;

  const domain = "https://thinkbites.org";
  const meta = {
    title: "Thinkbites",
    description: `Curated for the conscious soul. Personal, spiritual, and community development.`,
    image:
      "https://thinkbites.org/wp-content/uploads/2020/10/twitter_fb_card2.png",
    type: "website",
    ...customMeta,
  };

  return (
    <div className="relative">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`${domain}${router.asPath}`} />
        <link rel="canonical" href={`${domain}${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@thinkbites" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Navbar />

      <main>{children}</main>
    </div>
  );
}
