import Image from "next/image";
import Link from "next/link";

export default function FeaturedContributor() {
  return (
    <section className="max-w-5xl w-fill mx-auto px-8 bg-white dark:bg-navy">
      <div className="flex flex-col md:flex-row text-navy dark:text-white">
        <div className="w-full h-full mr-16 max-w-xs rounded-full border-salmon border-4  overflow-hidden shadow-md">
          <Image
            src="https://thinkbites.org/wp-content/uploads/2021/01/Omar-Usman.jpeg"
            alt="Omar Usman picture"
            width={326}
            height={326}
            quality={60}
            objectFit="cover"
            layout="responsive"
          />
        </div>
        <div className="w-full flex flex-col ">
          <h2 className="block text-salmon font-medium  text-sm tracking-widest uppercase ">
            Featured Contributor
          </h2>
          <h3 className=" font-semibold text-3xl mt-2">Omar Usman</h3>
          <p className="font-medium text-xl mt-2">
            “Investing in your personal growth means intentionally focusing on
            three key areas: education, experience, and relationships. No one
            else on earth shares the exact same intersection of those three
            elements as you. This is where you have the most potential to
            develop your unique value.”
          </p>
        </div>
      </div>
    </section>
  );
}
