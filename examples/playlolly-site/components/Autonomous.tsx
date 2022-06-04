import { FC } from "react";
import { YouTubeLite } from "react-youtube-lite";

export const Autonomous: FC = () => {
  const config = [
    {
      title: "Autopilot",
      type: "",
      description: `Mark a location on the map and your Tesla vehicle can drive to the location completely autonomously without any accidents. Autopilot takes into account other vehicles, traffic lights, speed limits and automatically sets turn signals.`,
      video: "https://www.youtube.com/watch?v=zn71QXlD3BE",
    },
    {
      title: "Auto Lane Change",
      type: "",
      description: `On the highway, Tesla vehicles can automatically change lanes, taking oncoming vehicles into account and announcing a line change by blinking. Furthermore, vehicles can also be cut off when overtaking by activating the "Reckless" mode.`,
      video: "https://www.youtube.com/watch?v=uf5Abhv4ZG4",
    },
    {
      title: "Auto Park",
      type: "",
      description: `When a Tesla vehicle is near a parking lot, it will automatically be detected and the vehicle can be parked fully automated in the desired direction (forward or backward), ensuring that the vehicle is always perfectly parked.`,
      video: "https://www.youtube.com/watch?v=mQRJYao2mB8",
    },
    {
      title: "Crash Avoidance",
      type: "",
      description: `Crash Avoidance can be activated while driving. The Tesla detects any hazards and tries to avoid them accordingly. Furthermore, a possible danger is signaled with a sound and visually in the HUD.`,
      video: "https://www.youtube.com/watch?v=8y33aCpwkec",
    },
    {
      title: "Dance",
      type: "",
      description: `As a small Easter Egg, the Dance Mode can be activated in the Tesla. Accordingly, all doors move and lights flash with matching music. Players in the vicinity can listen to the sound and the dance as well.`,
      video: "https://www.youtube.com/watch?v=O-anZBQbM2M",
    },
    {
      title: "Smart Summon",
      type: "",
      description: `With Smart Summon, your Tesla can automatically drive to you from anywhere and pick you up. For example, you can park the vehicle and let it drive to you autonomously after shopping.`,
      video: "https://www.youtube.com/watch?v=gwi4BfunzMk",
    },
  ];

  return (
    <div id="autonomous" className="bg-white dark:bg-black">
      <div className="px-4 py-16 mx-auto sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-[90rem] lg:pt-24 lg:px-8">
        <div className="mx-auto text-center dark:text-gray-400">
          <p className="mb-6 text-lg leading-normal text-current lg:text-xl">
            <span className="font-bold bg-clip-text text-teslaBlue">
              ADD-ON&nbsp;
            </span>
            - TESLA AUTONOMOUS
          </p>
        </div>
        <h2 className="max-w-4xl mx-auto pb-6 text-5xl font-extrabold tracking-tight lg:text-6xl xl:text-7xl leading-[1.25!important] text-center dark:text-white">
          Full potential for&nbsp;
          <br className="hidden lg:block" />
          <span className="inline-block text-teslaBlue">autonomous&nbsp;</span>
          driving.
        </h2>
        <div className="max-w-5xl mx-auto lg:mt-2 text-center dark:text-gray-400">
          <p className="mb-6 text-lg leading-normal text-current lg:text-xl">
            Tesla Autonomous Add-On introduces and enhances additional features
            to make Tesla vehicles even more powerful. All functionalities
            complement the existing resources and are signaled by sounds and HUD
            integration.
          </p>
        </div>
        <div className="flex justify-center items-center rounded-md mt-4 mx-auto">
          <a
            href="https://playlolly.tebex.io/package/4948736"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center max-w-4xl px-8 py-3 text-base font-medium text-white no-underline border border-transparent rounded-md bg-teslaBlue betterhover:dark:hover:bg-blue-800 betterhover:hover:bg-blue-800 md:py-3 md:text-lg md:px-5 md:leading-6"
          >
            Buy now $15 ↗
          </a>
        </div>

        <div className="items-center grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
          {config.map((feature) => (
            <div
              className="bg-gray-100 shadow-lg rounded-xl dark:bg-neutral-900"
              key={feature.title}
            >
              <div className="rounded-t-xl overflow-hidden">
                <YouTubeLite url={feature.video} title={feature.title} />
              </div>
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
