import Image from "next/image";

export default function AuthorCard({ author }) {
  return (
    <div className="max-w-lg">
      <div className="flex  flex-col lg:flex-row   items-center group cursor-pointer">
        <div className=" rounded-full shadow-md w-24 h-24 lg:w-16 lg:h-16 overflow-hidden  transition-all ease-out">
          <Image
            src={author.image.image.url}
            alt="Post featured image"
            width={120}
            height={120}
            quality={60}
            objectFit="cover"
            layout="responsive"
          />
        </div>
        <p className=" flex-1 text-base lg:text-xs font-medium tracking-wider uppercase ml-0 mt-2 lg:mt-0 lg:ml-2 group-hover:text-salmon transition-colors text-navy dark:text-white">
          {author.name}
        </p>
      </div>
      <p className="mt-4 text-base lg:text-sm  leading-normal text-navy dark:text-white">
        {author.bio}
      </p>
    </div>
  );
}
