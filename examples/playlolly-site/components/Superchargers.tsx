import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { YouTubeLite } from "react-youtube-lite";

export const Superchargers: FC = () => {
  const config = [
    {
      title: "Stations",
      type: "",
      description: `Teslas can be recharged at the stations located throughout the map. Depending on the location, there are several Superchargers that have been precisely placed.`,
      image: "station",
    },
    {
      title: "Charging",
      type: "",
      description: `Once arrived at a Supercharger, it is signaled in the HUD. By leaving the vehicle, the charging process can be started so that the vehicle has enough power again.`,
      video: "https://www.youtube.com/watch?v=VypJJhgiie0",
    },
  ];

  return (
    <div id="superchargers" className="bg-white dark:bg-black">
      <div className="px-4 py-16 mx-auto sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-[90rem] lg:pt-24 lg:px-8">
        <div className="mx-auto text-center dark:text-gray-400">
          <p className="mb-6 text-lg leading-normal text-current lg:text-xl">
            <span className="font-bold bg-clip-text text-teslaRed">
              CORE&nbsp;
            </span>
            - TESLA SUPERCHARGERS
          </p>
        </div>
        <h2 className="max-w-4xl mx-auto pb-6 text-5xl font-extrabold tracking-tight lg:text-6xl xl:text-7xl leading-[1.25!important] text-center dark:text-white">
          Charging grid with over&nbsp;
          <br className="hidden lg:block" />
          <span className="inline-block text-teslaRed">70 Superchargers.</span>
        </h2>
        <div className="max-w-5xl mx-auto lg:mt-2 text-center dark:text-gray-400">
          <p className="mb-6 text-lg leading-normal text-current lg:text-xl">
            Your Tesla to be charged at a Supercharger. The locations are
            distributed to allow quick charging of a Tesla from anywhere. At
            central locations, several Superchargers are located next to each
            other to ensure sufficient parking space is available for everyone.
          </p>
        </div>
        <div className="flex justify-center items-center rounded-md mt-4 mx-auto">
          <Link href="/webstore/tesla-core">
            <a className="flex items-center justify-center max-w-4xl px-8 py-3 text-base font-medium text-white no-underline border border-transparent rounded-md bg-teslaRed betterhover:dark:hover:bg-red-700 betterhover:hover:bg-red-700 md:py-3 md:text-lg md:px-5 md:leading-6">
              Included in Tesla Core $20 →
            </a>
          </Link>
        </div>

        <div className="items-center mt-12 lg:mt-16 lg:grid-cols-1">
          <div className="bg-white shadow-lg rounded-xl dark:bg-opacity-5 ">
            <Image
              src="/images/home/superchargers/map.jpg"
              alt="Tesla Supercharger Map"
              width={2000}
              height={2000}
              layout="responsive"
              className="rounded-xl"
            />
          </div>
        </div>

        <div className="items-center grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
          {config.map((feature) => (
            <div
              className="bg-gray-100 shadow-lg rounded-xl dark:bg-neutral-900"
              key={feature.title}
            >
              {feature.video && (
                <div className="rounded-t-xl overflow-hidden">
                  <YouTubeLite url={feature.video} title={feature.title} />
                </div>
              )}

              {feature.image && (
                <Image
                  src={`/images/home/superchargers/${feature.image}.jpg`}
                  alt={`Tesla Supercharger ${feature.title}`}
                  width={1920}
                  height={1080}
                  layout="responsive"
                  className="rounded-t-xl"
                />
              )}

              <div className="p-10">
                <div>
                  <h3 className="text-2xl font-bold dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base font-medium text-gray-500 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
