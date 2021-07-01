import NextLink from "./NextLink";
import Image from "next/image";

export default function AuthorsList({ authors }) {
  return (
    <div className="">
      <h2 className="text-xs font-medium tracking-widest uppercase text-center lg:text-left">
        Contributors
      </h2>
      <div className="mt-4 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-3 gap-4 ">
        {authors.map((author) => (
          <div
            key={author.slug}
            className="flex flex-col   items-center group cursor-pointer"
          >
            <div className="rounded-full shadow-md w-16 h-16 overflow-hidden group-hover:scale-110 transition-all ease-out">
              <Image
                src={author.image.image.url}
                alt="Post featured image"
                width={60}
                height={60}
                quality={60}
                quality={60}
                objectFit="cover"
                layout="responsive"
              />
            </div>
            <p className="text-[10px] text-center font-medium tracking-wider uppercase mt-2 group-hover:text-salmon transition-colors">
              {author.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
