import Image from "next/image";

export default function AuthorCard({ author }) {
  return (
    <div>
      <div className="flex flex-row   items-center group cursor-pointer">
        <div className=" rounded-full shadow-md w-16 h-16 overflow-hidden  transition-all ease-out">
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
        <p className=" flex-1 text-xs font-medium tracking-wider uppercase ml-2 group-hover:text-salmon transition-colors">
          {author.name}
        </p>
      </div>
      <p className="mt-4 text-xs  leading-normal">{author.bio}</p>
    </div>
  );
}
