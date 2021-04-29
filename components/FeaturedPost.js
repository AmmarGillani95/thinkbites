import Image from "next/image";
import Link from "next/link";

export default function FeaturedPost() {
  return (
    <article className="max-w-5xl w-fill mx-auto  px-8 bg-white dark:bg-navy flex ">
      <div className=" w-6/12 h-full mr-16 shadow-2xl">
        <Image
          src="https://thinkbites.org/wp-content/uploads/2021/01/381CEEAF-5F36-4438-A58C-DF6D60AD176B-2.jpg"
          alt="Post featured image"
          width={540}
          height={321}
          quality={60}
          objectFit="cover"
          layout="responsive"
        />
      </div>
      <div className="w-6/12">
        <h2 className="text-salmon font-medium  text-sm tracking-widest uppercase ">
          Featured
        </h2>
        <h3 className="text-navy dark:text-white font-bold text-2xl  tracking-wide mt-2">
          Soft Skills: The Importance of Personal Development
        </h3>

        <div className="flex flex-col  text-gray-500 mt-1">
          <span className="text-lg">Omar Usman</span>
          <span className=" text-xs">April 10, 2021 • 7 min read</span>
        </div>
        <p className="mt-2  text-base font-medium text-navy dark:text-white">
          Investing in your personal growth means intentionally focusing on
          three key areas: education, experience, and relationships. No one else
          on earth shares the exact same intersection of those three elements as
          you. This is where you have the most potential to develop your unique
          value.
        </p>
      </div>
    </article>
  );
}
