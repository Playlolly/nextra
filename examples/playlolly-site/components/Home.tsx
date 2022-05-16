import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import copy from "copy-to-clipboard";
import { DuplicateIcon } from "@heroicons/react/outline";
import { Superchargers } from "./Superchargers";
import { Hud } from "./Hud";
import { Vehicles } from "./Vehicles";
import { Dealer } from "./Dealer";
import { Autonomous } from "./Autonomous";
import { Testimonial } from "./Testimonials";
import { FC } from "react";

export const Home: FC = () => {
  const configCore = [
    {
      title: "HUD",
      description: `Visually displays all the information about your ride in a Head Up Display with the original Tesla design.`,
    },
    {
      title: "Superchargers",
      description: `A huge map with over 70 Superchargers that are true to detail and your Tesla can be charged at.`,
    },
  ];

  const configAddOns = [
    {
      title: "Vehicles",
      description: `All existing Tesla vehicles in the best possible quality featuring a large number of customisations.`,
    },
    {
      title: "Autonomous",
      description: `Use Autopilot, Traffic Light Detection, Crash Avoidance, Auto Lane Change, Smart Summon and Tesla Dance.`,
    },
    {
      title: "Dealer",
      description: `A vibrant Tesla dealership where you can view, test drive, rent, buy or configure all available Tesla vehicles.`,
    },
  ];

  const onClick = () => {
    copy("connect fivem.playlolly.net");
  };

  return (
    <>
      <Head>
        <title>Playlolly - Powerful FiveM Tesla resources.</title>
        <meta
          name="og:description"
          content="With our resources you have everything that exists in the real world
          of Tesla right on your FiveM server."
        />
      </Head>
      <div className="dark:text-white">
        <div className="px-4 pt-16 pb-8 sm:px-6 sm:pt-24 lg:px-8 dark:text-white">
          <h1 className="max-w-4xl mx-auto text-center text-6xl font-extrabold tracking-tighter leading-[1.1] sm:text-7xl lg:text-8xl xl:text-8xl">
            Powerful FiveM
            <br className="hidden lg:block" />
            <span className="inline-block text-teslaRed">Tesla resources</span>
          </h1>
          <p className="mx-auto mt-6 font-medium leading-tight text-center text-gray-400 sm:max-w-4xl sm:text-2xl md:text-3xl lg:text-4xl">
            With our resources you have everything that exists in the real world
            of Tesla right on your FiveM server.
          </p>
          <div className="max-w-xl mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md ">
              <Link href="/webstore/resources">
                <a className="flex items-center justify-center w-full px-8 py-3  font-medium text-white no-underline bg-black border border-transparent rounded-md dark:bg-white dark:text-black betterhover:dark:hover:bg-gray-300 betterhover:hover:bg-gray-700 md:py-3 md:text-lg md:px-10 md:leading-6">
                  Download now →
                </a>
              </Link>
            </div>
            <div className="relative mt-3 rounded-md sm:mt-0 sm:ml-3">
              <button
                onClick={onClick}
                className="flex items-center justify-center w-full px-8 py-3 font-mono text-sm font-medium text-gray-600 bg-black border border-transparent border-gray-200 rounded-md bg-opacity-5 dark:bg-white dark:text-gray-300 dark:border-gray-700 dark:bg-opacity-5 betterhover:hover:bg-gray-50 betterhover:dark:hover:bg-neutral-900 md:py-3 md:text-base md:leading-6 md:px-10"
              >
                connect fivem.playlolly.net
                <DuplicateIcon className="w-6 h-6 ml-2 -mr-3 text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        <div className="py-16 dark:bg-black ">
          <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
            <p className="font-semibold tracking-wide text-center text-gray-400 text-opacity-50 uppercase dark:text-gray-500">
              Flawless integration with existing FiveM frameworks
            </p>

            <div className="grid grid-cols-2 gap-8 mt-6 md:grid-cols-4 items-center">
              <Image
                className="h-6 filter contrast-50 grayscale dark:opacity-50"
                src="/images/home/logos/qbcore.svg"
                alt="QBCore"
                width={73}
                height={24}
              />
              <Image
                className="h-6 filter contrast-50 grayscale dark:opacity-50"
                src="/images/home/logos/esx.svg"
                alt="ESX"
                width={87}
                height={24}
              />
              <Image
                className="h-6 filter contrast-50 grayscale dark:opacity-50"
                src="/images/home/logos/vrp.svg"
                alt="vRP"
                width={52}
                height={24}
              />
              <Image
                className="h-6 filter contrast-50 grayscale dark:opacity-50"
                src="/images/home/logos/fivem.svg"
                alt="FiveM"
                width={68}
                height={24}
              />
            </div>
          </div>
        </div>

        <div className="relative dark:bg-black from-gray-50 to-gray-100">
          <div className="px-4 py-16 mx-auto sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-[90rem] lg:pt-24 lg:px-8">
            <h2 className="font-extrabold  tracking-tight text-5xl xl:text-6xl dark:text-white">
              Resources overview
            </h2>
            <p className="mt-4 font-medium text-left sm:text-center text-gray-400 lg:text-xl">
              As of 2022, the Playlolly team has decided to sell our scripts for
              a small amount of money. The money raised will be reinvested in
              future updates and cover the costs of our development server. The
              scripts are constantly updated with new functions and possible bug
              fixes.
            </p>
            <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
              <div className="p-10 sm:p-0 md:pr-20 md:pt-10 rounded-xl">
                <div className="mt-4">
                  <h3 className="text-3xl font-bold text-teslaRed">CORE</h3>
                  <p className="mt-2 text-base font-medium text-gray-500 dark:text-gray-400">
                    The heart of all Tesla resources, which manages all
                    interactions and contains the most important features.
                  </p>
                  <div className="rounded-md mt-4">
                    <Link href="/webstore/tesla-core">
                      <a className="flex items-center justify-center w-full px-8 py-3 font-medium text-white no-underline border border-transparent rounded-md bg-teslaRed betterhover:dark:hover:bg-red-700 betterhover:hover:bg-red-700 md:py-3 md:text-lg md:px-5 md:leading-6">
                        Buy now $20 →
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              {configCore.map((coreFeature) => (
                <div
                  className="p-10 bg-gray-100 shadow-lg rounded-xl dark:bg-neutral-900"
                  key={coreFeature.title}
                >
                  <div>
                    <p className="text-teslaRed " aria-hidden="true">
                      CORE
                    </p>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-2xl font-bold dark:text-white">
                      {coreFeature.title}
                    </h3>
                    <p className="mt-2 text-base font-medium text-gray-500 dark:text-gray-400">
                      {coreFeature.description}
                    </p>
                    <div className="rounded-md mt-4">
                      <Link href={`#${coreFeature.title.toLowerCase()}`}>
                        <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white no-underline bg-black border border-transparent rounded-md dark:bg-white dark:text-black betterhover:dark:hover:bg-gray-300 betterhover:hover:bg-gray-700 md:py-3 md:text-lg md:px-5 md:leading-6">
                          Learn More →
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              <br />

              <div className="p-10 sm:p-0 md:pr-20 md:pt-10 rounded-xl">
                <div className="mt-4">
                  <h3 className="text-3xl font-bold text-teslaBlue">ADD-ONS</h3>
                  <p className="mt-2 text-base font-medium text-gray-500 dark:text-gray-400">
                    Additional resources that make your experience even more
                    immersive and offer entirely new features.
                  </p>
                  <div className="rounded-md mt-4">
                    <Link href="/webstore/resources">
                      <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white no-underline bg-teslaBlue border border-transparent rounded-md betterhover:dark:hover:bg-blue-800 betterhover:hover:bg-blue-800 md:py-3 md:text-lg md:px-5 md:leading-6">
                        Buy now $15 →
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              {configAddOns.map((addOnFeature) => (
                <div
                  className="p-10 bg-gray-100 shadow-lg rounded-xl dark:bg-neutral-900"
                  key={addOnFeature.title}
                >
                  <div>
                    <p className=" text-teslaBlue" aria-hidden="true">
                      ADD-ON
                    </p>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-2xl font-bold dark:text-white">
                      {addOnFeature.title}
                    </h3>
                    <p className="mt-2 text-base font-medium text-gray-500 dark:text-gray-400">
                      {addOnFeature.description}
                    </p>
                    <div className="rounded-md mt-4">
                      <Link href={`#${addOnFeature.title.toLowerCase()}`}>
                        <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white no-underline bg-black border border-transparent rounded-md dark:bg-white dark:text-black betterhover:dark:hover:bg-gray-300 betterhover:hover:bg-gray-700 md:py-3 md:text-lg md:px-5 md:leading-6">
                          Learn More →
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Hud />
      <Superchargers />
      <Vehicles />
      <Autonomous />
      <Dealer />
      <Testimonial />
    </>
  );
};
