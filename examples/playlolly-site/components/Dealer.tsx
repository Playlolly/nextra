import Image from "next/image";
import { FC } from "react";
import { YouTubeLite } from "react-youtube-lite";

export const Dealer: FC = () => {
  const config = [
    {
      title: "On Display",
      type: "",
      description:
        "You can buy your Tesla from the Dealer, swap the displayed vehicle or take it for a test drive. It is also possible to finance the vehicles with a down payment.",
      image: "on-display",
    },
    {
      title: "Tesla Lounge",
      type: "",
      description:
        "The Tesla Dealer is often visited by customers who are as excited to talk about their new Tesla as you are. Or just hang out and talk about their experience.",
      image: "small-talk",
    },
    {
      title: "Design Studio",
      type: "",
      description:
        "At the Design Studio you can configure the Tesla of your dreams. You can choose appropriate paint jobs, interior equipment or find out about the available autonomous features.",
      image: "roleplay-ready",
    },
  ];

  const configComingSoon = [
    {
      title: "Web Shop",
      type: "available soon",
      description:
        "Each Tesla can also be configured and ordered via the Tesla web shop. In the web shop modeled according to the original, you can configure paint job, rims, interior and autonomous features.",
      image: "web-shop",
    },
    {
      title: "Video",
      type: "showcase",
      description:
        "In this showcase video you can see how the Tesla Dealer looks from the outside as well as from the inside. The position, color, specification, prices, etc. of the vehicles to be displayed can be easily customized in the configuration file.",
      video: "https://www.youtube.com/watch?v=ThJm4qHxBm0&feature=youtu.be",
    },
  ];

  return (
    <div id="dealer" className="bg-gray-100 dark:bg-neutral-900">
      <div className="px-4 py-16 mx-auto sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-[90rem] lg:pt-24 lg:px-8">
        <div className="mx-auto text-center dark:text-gray-400">
          <p className="mb-6 text-lg leading-normal text-current lg:text-xl">
            <span className="font-bold bg-clip-text text-teslaBlue">
              ADD-ON&nbsp;
            </span>
            - TESLA DEALER
          </p>
        </div>
        <h2 className="max-w-4xl mx-auto pb-6 text-5xl font-extrabold tracking-tight lg:text-6xl xl:text-7xl leading-[1.25!important] text-center dark:text-white">
          High quality dealer with&nbsp;
          <br className="hidden lg:block" />
          <span className="inline-block text-teslaBlue">showroom.</span>
        </h2>
        <div className="max-w-5xl mx-auto lg:mt-2 text-center dark:text-gray-400">
          <p className="mb-6 text-lg leading-normal text-current lg:text-xl">
            The Tesla dealer is where you can buy your Tesla, just like in real
            life. The map has been lovingly created with custom 3D textures to
            represent a realistic dealership. The car salesman workspace is
            frequently visited. All Tesla vehicles are displayed and you can
            even take a test drive.
          </p>
        </div>
        <div className="flex justify-center items-center rounded-md mt-4 mx-auto">
          <a
            href="https://playlolly.tebex.io/package/4948738"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center max-w-4xl px-8 py-3 text-base font-medium text-white no-underline border border-transparent rounded-md bg-teslaBlue betterhover:dark:hover:bg-blue-800 betterhover:hover:bg-blue-800 md:py-3 md:text-lg md:px-5 md:leading-6"
          >
            Buy now $15 ↗
          </a>
        </div>

        <div className="items-center mt-12 lg:mt-16 lg:grid-cols-1 hidden dark:block">
          <div className="bg-white shadow-lg rounded-xl dark:bg-opacity-5 ">
            <Image
              src="/images/home/dealer/dealer-dark.jpg"
              alt="Tesla Dealer"
              width={1920}
              height={1080}
              layout="responsive"
              className="rounded-xl"
            />
          </div>
        </div>

        <div className="items-center mt-12 lg:mt-16 lg:grid-cols-1 dark:hidden">
          <div className="bg-white shadow-lg rounded-xl dark:bg-opacity-5 ">
            <Image
              src="/images/home/dealer/dealer-light.jpg"
              alt="Tesla Dealer"
              width={1920}
              height={1080}
              layout="responsive"
              className="rounded-xl"
            />
          </div>
        </div>

        <div className="items-center grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {config.map((feature) => (
            <div
              className="bg-white shadow-lg rounded-xl dark:bg-black "
              key={feature.title}
            >
              <Image
                src={`/images/home/dealer/${feature.image}.jpg`}
                alt={`Tesla Dealer ${feature.title}`}
                width={1920}
                height={1080}
                layout="responsive"
                className="rounded-t-xl"
              />
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

        <div className="items-center grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
          {configComingSoon.map((feature) => (
            <div
              className="bg-white shadow-lg rounded-xl dark:bg-black "
              key={feature.title}
            >
              {feature.image ? (
                <Image
                  src={`/images/home/dealer/${feature.image}.jpg`}
                  alt={`Tesla Dealer ${feature.title}`}
                  width={1920}
                  height={1080}
                  layout="responsive"
                  className="rounded-t-xl"
                />
              ) : (
                <div className="rounded-t-xl overflow-hidden">
                  <YouTubeLite url={feature.video} title={feature.title} />
                </div>
              )}
              <div className="p-10">
                <div>
                  <p className="text-teslaBlue" aria-hidden="true">
                    {feature.type.toUpperCase()}
                  </p>
                </div>

                <div className="mt-4">
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
