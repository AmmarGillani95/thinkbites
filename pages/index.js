import Head from "next/head";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <div className="text-center">
      <Head>
        <title>Dark mode with Tailwind and Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text:2xl">Dark mode with Tailwind and Next-themes</h1>
      <button onClick={switchTheme}>Change theme</button>
    </div>
  );
}
