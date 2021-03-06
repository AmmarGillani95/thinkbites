import Image from "next/image";
import NextLink from "./NextLink";

export default function FeaturedContributor({ contributor }) {
  return (
    <section className=" max-w-xl md:max-w-3xl w-fill mx-auto bg-white dark:bg-navy flex flex-col">
      <h2 className="text-salmon font-medium  text-sm tracking-widest uppercase block md:hidden text-center mb-6">
        Featured Contributor
      </h2>
      <div className="flex flex-col items-center md:flex-row text-navy dark:text-white">
        <div className=" h-full    md:w-4/12 rounded-full border-salmon border-4  overflow-hidden shadow-md   w-56 mx-auto">
          <NextLink href={`/authors/${contributor.slug}`}>
            <Image
              src={contributor.image.image.url}
              alt={`${contributor.name} image`}
              width={326}
              height={326}
              quality={60}
              objectFit="cover"
              layout="responsive"
            />
          </NextLink>
        </div>

        <div className=" flex flex-col  md:w-8/12 md:ml-8 md:max-w-3xl text-center md:text-left mt-4 md:mt-0">
          <h2 className=" text-salmon font-medium  text-sm tracking-widest uppercase hidden md:block">
            Featured Contributor
          </h2>
          <NextLink href={`/authors/${contributor.slug}`}>
            <h3 className=" font-semibold text-xl mt-1">{contributor.name}</h3>
          </NextLink>
          <NextLink href={`/authors/${contributor.slug}`}>
            <p className="font-medium  text-base mt-1">
              {`"${contributor.quote}"`}
            </p>
          </NextLink>
        </div>
      </div>
    </section>
  );
}
