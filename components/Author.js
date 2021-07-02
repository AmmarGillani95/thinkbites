import Image from "next/image";

export default function Author({ author }) {
  return (
    <section className=" max-w-xl md:max-w-3xl w-fill mx-auto bg-white dark:bg-navy flex flex-col">
      <div className="flex flex-col items-center md:flex-row text-navy dark:text-white">
        <div className=" h-full   md:w-4/12 rounded-full border-salmon border-4  overflow-hidden shadow-md w-56 mx-auto">
          <Image
            src={author.image.image.url}
            alt={`${author.name} image`}
            width={326}
            height={326}
            quality={60}
            objectFit="cover"
            layout="responsive"
            priority={true}
          />
        </div>
        <div className=" flex flex-col  md:w-8/12 md:ml-8 md:max-w-3xl text-center md:text-left mt-4 md:mt-0">
          <h2 className=" font-semibold text-4xl">{author.name}</h2>
          <p className="font-medium  text-base mt-2">{`${author.bio}`}</p>
        </div>
      </div>
    </section>
  );
}
