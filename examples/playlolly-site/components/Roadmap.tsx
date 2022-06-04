import Head from "next/head";
import { FC } from "react";
import { BiTimeFive, BiCheckCircle } from "react-icons/bi";

export const Roadmap: FC = () => {
  const config = [
    {
      title: "Vehicles",
      type: "add-on",
      features: [
        {
          title: "Tesla Model S Plaid (2022)",
          status: "done",
        },
        { title: "Tesla Model 3 (2022)", status: "done" },
        {
          title: "Tesla Model X Plaid (2022)",
          status: "done",
        },
        { title: "Tesla Model Y (2022)", status: "done" },
        { title: "Tesla Roadster (2022)", status: "done" },

        { title: "Tesla Cybertruck & Cyberquad (2022)", status: "done" },
        { title: "Tesla Semi (2022)", status: "done" },
      ],
    },

    {
      title: "HUD",
      type: "core",
      features: [
        { title: "Display active turn signal", status: "done" },
        { title: "Tesla settings user interface", status: "in-progress" },
        {
          title: "Automatic Dark / Light Mode based on the ambient light",
          status: "in-progress",
        },
        { title: "Display open doors and windows", status: "in-progress" },
        { title: "Color matching HUD vehicle", status: "in-progress" },
      ],
    },
    {
      title: "Autonomous",
      type: "add-on",
      features: [
        { title: "Traffic Light and Stop Sign Control", status: "done" },
        { title: "Auto Lane Change", status: "done" },
        { title: "Autopark", status: "done" },
        { title: "Reverse Camera with Ultrasonic", status: "done" },
        { title: "Adaptive Lighting", status: "done" },
        { title: "Sport Mode", status: "in-progress" },
      ],
    },
    {
      title: "Dealer",
      type: "add-on",
      features: [
        { title: "Complete Dealer redesign", status: "done" },
        {
          title: "Tesla website for vehicle ordering and configuration",
          status: "in-progress",
        },
      ],
    },
  ];

  let counter = 0;

  return (
    <>
      <div className="dark:text-white dark:bg-black">
        <div className="relative dark:bg-black from-gray-50 to-gray-100">
          <div className="px-4 py-16 mx-auto sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-[90rem] lg:pt-24 lg:px-8">
            <h2 className="font-extrabold  tracking-tight text-5xl xl:text-6xl dark:text-white">
              Roadmap
            </h2>
            <p className="mt-4 font-medium text-left sm:text-center text-gray-400 lg:text-xl">
              Below is an overview of the features we will be adding to our
              resources. If we receive enough support these features will be
              released in upcoming updates. Of course, in case of any bugs,
              corresponding bugfixes will be released and requests from the
              community will be taken into account and implemented.
            </p>

            <div className="container mx-auto w-full h-full mt-16">
              <div className="relative wrap overflow-hidden h-full">
                <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border ml-4 md:-ml-2 md:left-1/2 "></div>

                {config.map((item) => {
                  counter++;

                  return (
                    <div
                      className={`mb-8 flex justify-between items-center w-full ${
                        counter % 2 === 0
                          ? "right-timeline md:left-timeline md:flex-row-reverse"
                          : "right-timeline"
                      }`}
                      key={item.title}
                    >
                      <div className="order-1 md:w-5/12 hidden md:block"></div>

                      <div className="z-10 flex items-center order-1 md:bg-gray-100 dark:md:bg-neutral-900 shadow-xl md:w-28 md:h-8 rounded-full mr-4 md:mr-0 ">
                        <h1
                          className={`mx-auto font-semibold text-lg ${
                            item.type === "core"
                              ? "text-teslaRed"
                              : item.type === "add-on"
                              ? "text-teslaBlue"
                              : "text-orange-500"
                          }`}
                        >
                          {item.type.toUpperCase()}
                        </h1>
                      </div>
                      <div className="order-1 p-10 bg-gray-100 shadow-lg rounded-xl dark:bg-neutral-900 w-11/12 md:w-5/12">
                        <h3 className="text-2xl font-bold dark:text-white">
                          {item.title}
                        </h3>
                        <ul className="list-none">
                          {item.features.map((feature) => (
                            <li
                              className="mt-2 text-base font-medium text-gray-500 dark:text-gray-400 flex items-center "
                              key={feature.title}
                            >
                              <div className="z-10 flex items-center justify-center dark:md:bg-black md:bg-white md:w-8 md:h-8 rounded-full mr-2 md:mr-0 ">
                                {feature.status === "done" ? (
                                  <BiCheckCircle
                                    size="20"
                                    className="text-teslaGreen"
                                  />
                                ) : (
                                  <BiTimeFive
                                    size="20"
                                    className="text-teslaOrange"
                                  />
                                )}
                              </div>
                              {feature.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
