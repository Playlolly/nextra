import Image from "next/image";
import { FC } from "react";

export const Hud: FC = () => {
  const config = [
    {
      title: "Driving",
      type: "core",
      description:
        "Contains all important information about your ride, including your gear, speed, battery and automations.",
      image: "driving",
    },
    {
      title: "Parked",
      type: "core",
      description:
        "Shows you your current vehicle in parked condition including current model type and any open doors.",
      image: "parked",
    },
    {
      title: "Charging",
      type: "core",
      description:
        "Your Tesla detects when you are close to a Supercharger charging station and notifies you so you can start charging.",
      image: "charging",
    },
    {
      title: "Autopilot",
      type: "add-on",
      description:
        "As soon as you activate the autopilot, it will be displayed in the HUD with all the relevant information.",
      image: "autopilot",
    },
    {
      title: "Traffic Light",
      type: "add-on",
      description:
        "Traffic lights with their corresponding state color are detected and accordingly visually displayed.",
      image: "autopilot-traffic-light",
    },
    {
      title: "Auto Lane Change",
      type: "add-on",
      description:
        "Detected highway lanes are displayed and upon change, the HUD informs which lane the vehicle is changing to.",
      image: "auto-lane-change",
    },
    {
      title: "Auto Park",
      type: "add-on",
      description:
        "Detected parking lots are displayed in the HUD as well as the parking direction during the autonomous parking process.",
      image: "auto-park",
    },
    {
      title: "Crash Avoidance",
      type: "add-on",
      description:
        "Crash avoidance information is displayed directly in the HUD, including a visual warning in the event of danger.",
      image: "crash-avoidance",
    },
  ];

  return (
    <div id="hud" className="bg-gray-100 dark:bg-neutral-900">
      <div className="px-4 py-16 mx-auto sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-[90rem] lg:pt-24 lg:px-8">
        <div className="mx-auto text-center dark:text-gray-400">
          <p className="mb-6 text-lg leading-normal text-current lg:text-xl">
            <span className="font-bold bg-clip-text text-teslaRed">
              CORE&nbsp;
            </span>
            - TESLA HUD
          </p>
        </div>
        <h2 className="max-w-4xl mx-auto pb-6 text-5xl font-extrabold tracking-tight lg:text-6xl xl:text-7xl leading-[1.25!important] text-center dark:text-white">
          Built-in HUD containing&nbsp;
          <br className="hidden lg:block" />
          <span className="inline-block text-teslaRed">everything.</span>
        </h2>
        <div className="max-w-5xl mx-auto lg:mt-2 text-center dark:text-gray-400">
          <p className="mb-6  leading-normal text-current lg:text-xl">
            As soon as you sit down in a Tesla, the integrated HUD appears. It
            contains all relevant information about your Tesla and automatically
            adapts to your current model. The HUD has been designed with great
            attention to detail and reflects the original Tesla design.
          </p>
        </div>
        <div className="flex justify-center items-center rounded-md mt-4 mx-auto">
          <a
            href="https://playlolly.tebex.io/package/4948739"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center max-w-4xl px-8 py-3 text-base font-medium text-white no-underline border border-transparent rounded-md bg-teslaRed betterhover:dark:hover:bg-red-700 betterhover:hover:bg-red-700 md:py-3 md:text-lg md:px-5 md:leading-6"
          >
            Included in Tesla Core $20 ↗
          </a>
        </div>
        <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
          {config.map((feature) => (
            <div
              className="bg-white shadow-lg rounded-xl dark:bg-black"
              key={feature.title}
            >
              <Image
                src={`/images/home/hud/${feature.image}.jpg`}
                alt={`Tesla HUD ${feature.title}`}
                width={500}
                height={500}
                layout="responsive"
                className="rounded-t-xl"
              />
              <div className="p-10">
                <div>
                  <p
                    className={
                      feature.type.toLowerCase() == "core"
                        ? "text-teslaRed"
                        : "text-teslaBlue"
                    }
                    aria-hidden="true"
                  >
                    {feature.type.toLocaleUpperCase()}
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
