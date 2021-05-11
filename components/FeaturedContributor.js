import Image from "next/image";
import Link from "next/link";

export default function FeaturedContributor() {
  return (
    <section className=" max-w-2xl md:max-w-3xl w-fill mx-auto px-8 bg-white dark:bg-navy">
      <div className="flex flex-col md:flex-row text-navy dark:text-white">
        <h2 className="text-salmon font-medium  text-sm tracking-widest uppercase block md:hidden text-center mb-6">
          Featured Contributor
        </h2>
        <div className=" h-full    md:w-4/12 rounded-full border-salmon border-4  overflow-hidden shadow-md   w-56 mx-auto">
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
        <div className=" flex flex-col  md:w-8/12 md:ml-8 md:max-w-3xl text-center md:text-left mt-4 md:mt-0">
          <h2 className=" text-salmon font-medium  text-sm tracking-widest uppercase hidden md:block">
            Featured Contributor
          </h2>
          <h3 className=" font-semibold text-xl mt-1">Omar Usman</h3>
          <p className="font-medium  text-base mt-1">
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
