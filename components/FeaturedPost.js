import Image from "next/image";
import Link from "next/link";

export default function FeaturedPost() {
  return (
    <article className=" max-w-xl md:max-w-5xl w-fill mx-auto  px-8 bg-white dark:bg-navy flex flex-col md:flex-row">
      <h2 className="text-salmon font-medium  text-sm tracking-widest uppercase block md:hidden text-center mb-4">
        Featured
      </h2>

      <div className=" md:w-6/12 h-full md:mr-16 shadow-2xl">
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
      <div className="md:w-6/12 mt-4 md:mt-0">
        <h2 className="text-salmon font-medium  text-sm tracking-widest uppercase hidden md:block">
          Featured
        </h2>
        <h3 className="text-navy dark:text-white font-bold text-base md:text-xl leading-tight tracking-wide mt-2">
          Soft Skills: The Importance of Personal Development
        </h3>

        <div className="flex flex-col  text-gray-500  mt-0.5">
          <span className="text-sm">Omar Usman</span>
          <span className=" text-xs">April 10, 2021 • 7 min read</span>
        </div>
        <p className="mt-2 text-xs tracking-wider leading-normal md:tracking-normal md:leading-normal md:text-base font-medium text-navy dark:text-white">
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
