import { FC } from "react";
import { VehicleGrid, VintageVehicleGrid } from "./VehicleGrid";
import Image from "next/image";
import {
  GiCarDoor,
  GiCrackedGlass,
  GiSpeedometer,
  GiSteeringWheel,
  GiLightBulb,
  GiCarSeat,
  GiMirrorMirror,
  GiPlatform,
} from "react-icons/gi";

export const Vehicles: FC = () => {
  const configVehicles = [
    {
      title: "Model S Plaid (2022)",
      type: "",
      description:
        "Model S Plaid is built for speed and range, with beyond ludicrous acceleration, unparalleled performance and a refined design.",
      image: "modelSPlaid",
      imageCount: 6,
      link: "https://playlolly.tebex.io/package/5030299",
    },
    {
      title: "Model X Plaid (2022)",
      type: "",
      description:
        "Model X Plaid is built for utility and performance, with standard AWD, best in class storage and the highest towing capacity of any electric SUV.",
      image: "modelXPlaid",
      imageCount: 6,
      link: "https://playlolly.tebex.io/package/5030300",
    },
    {
      title: "Model 3 (2022)",
      type: "",
      description:
        "Model 3 is designed for electric-powered performance, with quick acceleration, long range and fast charging.",
      image: "model3",
      imageCount: 6,
      link: "https://playlolly.tebex.io/package/5064706",
    },
    {
      title: "Model Y (2022)",
      type: "",
      description:
        "Model Y is a fully electric, mid-size SUV with unparalleled protection and versatile cargo space.",
      image: "modelY",
      imageCount: 6,
      link: "https://playlolly.tebex.io/package/5030297",
    },
    {
      title: "Roadster (2022)",
      type: "",
      description:
        "An all-electric vehicle, the Tesla Roadster is the quickest car in the world, with record-setting acceleration, range and performance. Reserve yours today.",
      image: "roadster",
      imageCount: 5,
      link: "https://playlolly.tebex.io/package/5064713",
    },
    {
      title: "Cybertruck & Cyberquad (2022)",
      type: "",
      description:
        "Cybertruck is designed to have the utility of a truck with sports car performance. Built to be durable, versatile and high-performance both on-road and off-road.",
      image: "cybertruckCyberquad",
      imageCount: 9,
      link: "https://playlolly.tebex.io/package/5064711",
    },
    {
      title: "Semi (2022)",
      type: "",
      description:
        "Semi is the safest, most comfortable truck ever. Four independent motors provide maximum power and acceleration and require the lowest energy cost per mile.",
      image: "semi",
      imageCount: 4,
      link: "https://playlolly.tebex.io/package/5064715",
    },
  ];

  const configVintageVehicles = [
    {
      title: "Model S (2016)",
      image: "modelS",
      type: "",
      description: "",
      imageCount: 5,
      link: "https://playlolly.tebex.io/package/5112135",
    },
    {
      title: "Model X (2016)",
      image: "modelX",
      type: "",
      description: "",
      imageCount: 6,
      link: "https://playlolly.tebex.io/package/5112137",
    },
    {
      title: "Roadster Sport (2011)",
      image: "roadsterSport",
      type: "",
      description: "",
      imageCount: 5,
      link: "https://playlolly.tebex.io/package/5112138",
    },
  ];

  const configFeatures = [
    {
      title: "3D model",
      icon: <GiPlatform size={28} />,
      description: `Our vehicles are built on high quality 3D models based on the original vehicle dimensions.`,
    },
    {
      title: "Doors, frunk and trunk",
      icon: <GiCarDoor size={28} />,
      description: `All doors, boot and trunk can be opened and closed and come with proper door sills and jams.`,
    },
    {
      title: "Interior",
      icon: <GiCarSeat size={28} />,
      description: `Vehicles come with high quality interior which is based on 3D objects not only textures.`,
    },
    {
      title: "Lights",
      icon: <GiLightBulb size={28} />,
      description: `Includes headlights, turn signals, taillights, brake lights, rear turn signals and interior lights.`,
    },
    {
      title: "Glasses",
      icon: <GiCrackedGlass size={28} />,
      description: `All glasses including lights can be broken and have a specific crack texture.`,
    },
    {
      title: "Tachometer",
      icon: <GiSpeedometer size={28} />,
      description: `The tachometer works and shows the current speed and gear.`,
    },
    {
      title: "Steering wheel",
      icon: <GiSteeringWheel size={28} />,
      description: `The player's hands are on the steering wheel, which rotates accordingly.`,
    },
    {
      title: " Mirrors",
      icon: <GiMirrorMirror size={28} />,
      description: `The mirrors are fully functional, and represent the corresponding viewing angle.`,
    },
  ];

  return (
    <div id="vehicles" className="bg-gray-100 dark:bg-neutral-900">
      <div className="px-4 py-16 mx-auto sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-[90rem] lg:pt-24 lg:px-8">
        <div className="mx-auto text-center dark:text-gray-400">
          <p className="mb-6 text-lg leading-normal text-current lg:text-xl">
            <span className="font-bold bg-clip-text text-teslaBlue">
              ADD-ON&nbsp;
            </span>
            - TESLA VEHICLES
          </p>
        </div>
        <h2 className="max-w-4xl mx-auto pb-6 text-5xl font-extrabold tracking-tight lg:text-6xl xl:text-7xl leading-[1.25!important] text-center dark:text-white">
          <span className="inline-block text-teslaBlue">All available</span>
          &nbsp;Teslas playable in game.
        </h2>

        <div className="max-w-5xl mx-auto lg:mt-2 text-center dark:text-gray-400">
          <p className="mb-6 text-lg leading-normal text-current lg:text-xl">
            Every Tesla existing in the real world is driveable as a
            high-resolution 3D vehicle in FiveM with all associated functions.
            This includes working mirrors, speedometer, doors, breakable glass,
            accurate lighting and correct steering wheel positioning and much
            more.
          </p>
        </div>
        <div className="flex justify-center items-center rounded-md mt-4 mx-auto">
          <a
            href="https://playlolly.tebex.io/category/resources"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center max-w-4xl px-8 py-3 text-base font-medium text-white no-underline border border-transparent rounded-md bg-teslaBlue betterhover:dark:hover:bg-blue-800 betterhover:hover:bg-blue-800 md:py-3 md:text-lg md:px-5 md:leading-6"
          >
            Buy now $15 ↗
          </a>
        </div>

        <div className="items-center mt-12 lg:mt-16 lg:grid-cols-1">
          <div className="bg-white shadow-lg rounded-xl dark:bg-black">
            <Image
              src="/images/home/vehicles/all-vehicles.jpg"
              alt="Tesla Cars"
              width={1920}
              height={1080}
              layout="responsive"
              className="rounded-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
          {configVehicles.map((feature) => (
            <VehicleGrid feature={feature} key={feature.title} />
          ))}
        </div>

        <div className="pt-20">
          <h2 className="font-extrabold tracking-tight text-5xl xl:text-6xl dark:text-white">
            Vintage vehicles
          </h2>

          <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
            {configVintageVehicles.map((feature) => (
              <VintageVehicleGrid feature={feature} key={feature.title} />
            ))}
          </div>
        </div>

        <div className="pt-20">
          <h2 className="font-extrabold tracking-tight text-5xl xl:text-6xl dark:text-white">
            Features overview
          </h2>
          <p className="mt-4 font-medium text-left sm:text-center text-gray-400 lg:text-xl">
            All our vehicles contain essential features that ensure the best
            possible quality and gaming experience. All vehicles are LOD
            optimized to ensure optimal performance of the highly detailed 3D
            models.
          </p>
          <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
            {configFeatures.map((feature) => (
              <div
                className="p-10 bg-white shadow-lg rounded-xl dark:bg-black"
                key={feature.title}
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gray-100 dark:bg-neutral-900">
                  {feature.icon}
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
