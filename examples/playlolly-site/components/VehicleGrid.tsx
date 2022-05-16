import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

interface GridPorps {
  feature: Feature;
}

interface Feature {
  title: string;
  type: string;
  description: string;
  image: string;
  imageCount: number;
  link?: string;
}

export const VehicleGrid: FC<GridPorps> = ({ feature }) => {
  const [imageId, setImageId] = useState(1);

  return (
    <div
      className={`bg-white shadow-lg rounded-xl dark:bg-black col-span-2 ${
        feature.title === "Semi (2022)" && "lg:col-start-2"
      }`}
      key={feature.title}
    >
      <div className="relative">
        <Image
          src={`/images/home/vehicles/${feature.image}/${imageId}.jpg`}
          alt={`Tesla Cars ${feature.title}`}
          width={1920}
          height={1080}
          layout="responsive"
          className="rounded-t-xl "
        />
        <button
          onClick={() =>
            setImageId(imageId > 1 ? imageId - 1 : feature.imageCount)
          }
          className="bg-black hover:bg-neutral-900 dark:bg-white dark:hover:bg-gray-100 absolute bottom-4 right-20 rounded-md px-2 py-1 text-white dark:text-black text-base"
        >
          ←
        </button>
        <button
          onClick={() =>
            setImageId(imageId < feature.imageCount ? imageId + 1 : 1)
          }
          className="bg-black hover:bg-neutral-900 dark:bg-white dark:hover:bg-gray-100 absolute bottom-4 right-10 rounded-md px-2 py-1 text-white dark:text-black text-base"
        >
          →
        </button>
      </div>
      <div className="p-10">
        <h3 className="text-2xl font-bold dark:text-white">{feature.title}</h3>
        <p className="mt-2 text-base font-medium text-gray-500 dark:text-gray-400">
          {feature.description}
        </p>
        <div className="mt-5 sm:flex md:mt-8">
          <Link href={feature.link}>
            <a className="flex items-center w-full justify-center px-8 py-3 font-medium text-white no-underline bg-black border border-transparent rounded-md dark:bg-white dark:text-black betterhover:dark:hover:bg-gray-300 betterhover:hover:bg-gray-700 md:py-3 md:text-lg md:px-10 md:leading-6">
              Buy now $15 →
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
