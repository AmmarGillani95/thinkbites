import Image from "next/image";
import Link from "next/link";

import { recentpostsData } from "../public/dummy";

export default function RecentPosts() {
  return (
    <section className="max-w-5xl w-fill mx-auto px-8 bg-white dark:bg-navy flex flex-col">
      <h2 className="block mx-auto text-salmon font-medium  text-sm tracking-widest uppercase ">
        Recent
      </h2>
      <div className="grid grid-cols-3 grid-rows-1 gap-16 mt-6 text-navy dark:text-white">
        {recentpostsData.map((post) => (
          <article key={post.title}>
            <div className="shadow-md">
              <Image
                src={post.imgSrc}
                alt="Post featured image"
                width={540}
                height={321}
                quality={60}
                objectFit="cover"
                layout="responsive"
              />
            </div>
            <div className="mt-3">
              <h3 className="font-bold tracking-wider text-lg leading-snug">
                {post.title}
              </h3>
              <div className="flex flex-col  text-gray-500 mt-1">
                <span className="text-base">{post.author}</span>
                <span className="text-xs">{post.date}</span>
              </div>
              <p className="mt-2  text-xs font-medium tracking-wider leading-normal">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
