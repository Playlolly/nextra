import Image, { StaticImageData } from "next/image";
import nephilim from "../public/images/home/testimonials/nephilim.jpg";
import onurabicim from "../public/images/home/testimonials/onurabicim.jpg";
import moebi from "../public/images/home/testimonials/moebi.jpg";
import mrpickles from "../public/images/home/testimonials/mrpickles.jpg";
import beauflexx from "../public/images/home/testimonials/beauflexx.jpg";
import inchon from "../public/images/home/testimonials/inchon.jpg";
import faiterlp from "../public/images/home/testimonials/faiterlp.jpg";
import soletick from "../public/images/home/testimonials/soletick.jpg";
import xesteral from "../public/images/home/testimonials/xesteral.jpg";
import copy from "copy-to-clipboard";
import { FC } from "react";
import { DuplicateIcon } from "@heroicons/react/outline";

interface ReviewProps {
  name: string;
  avatar: StaticImageData;
  date: string;
  text: string;
}

const Review: FC<ReviewProps> = ({ name, avatar, date, text }) => (
  <div className="flex p-4 bg-gray-100 shadow-lg rounded-xl dark:bg-neutral-900">
    <div className="flex-shrink-0 mr-4">
      <Image
        className="w-12 h-12 rounded-full"
        width={42}
        height={42}
        src={avatar}
        alt={`${name} twitter avatar`}
      />
    </div>
    <div>
      <div className="flex items-center space-x-1 text-sm">
        <h4 className="text-base font-bold dark:text-white">{name}</h4>
        <div className="text-base font-medium text-gray-500 xl:block">
          • {date}
        </div>
      </div>
      <div className="mt-1 text-base font-medium text-gray-500 dark:text-gray-400">
        {text}
      </div>
    </div>
  </div>
);

export const Testimonial: FC = () => {
  const configFirst = [
    {
      name: "Nephilim | Sebastian",
      date: "Mar 6",
      avatar: nephilim,
      text: "Very good Tesla scripts looking forward to more updates! ⚡️",
    },
    {
      name: "Mr. Pickles",
      date: "Mar 18",
      avatar: mrpickles,
      text: "The support team has been great, its a great resource. I do encourage those who like what they see in the preview videos to purchase the product, its a great product.",
    },
    {
      name: "Onurabicim",
      date: "Mar 13",
      avatar: onurabicim,
      text: "Nice Tesla scripts! My Community and I we love it! ❤️",
    },
  ];

  const configSecond = [
    {
      name: "Möbi",
      date: "Mar 11",
      avatar: moebi,
      text: "Mega!! Thanks for the super fast implementation on feature requests and the awesome support!!! Amazing scripts, really! 🤯",
    },
    {
      name: "Inchon",
      date: "Mar 14",
      avatar: inchon,
      text: "Everything is like in a real Tesla, very impressive and making so much fun to play with. 🕹️",
    },
    {
      name: "Beauflexx",
      date: "Mar 10",
      avatar: beauflexx,
      text: "Dope, hahaha it can be pretty wild. Its a dope package, players are enjoying it! Thanks for the numerous updates. Good work guys. 🙏",
    },
  ];

  const configThird = [
    {
      name: "FaiterLP",
      date: "Apr 8",
      avatar: faiterlp,
      text: "Very Nice Script. Works very well and the support is 12/10. 💫",
    },
    {
      name: "Sole Tick",
      date: "Mar 8",
      avatar: soletick,
      text: "I requested a new feature, literally within a day there was an update including my requested feature. Development team is incredibly fast and helpful. Can highly recommend this to everyone.",
    },
    {
      name: "Xesteral",
      date: "Mar 17",
      avatar: xesteral,
      text: "Extremely simple installation, while everything is freely configurable. 🌟",
    },
  ];

  const onClick = () => {
    copy("connect fivem.playlolly.net");
  };

  return (
    <div id="testimonial" className="bg-white dark:bg-black">
      <div className="px-4 py-16 mx-auto sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-[90rem] lg:pt-24 lg:px-8">
        <h2 className="max-w-4xl mx-auto pb-6 text-5xl font-extrabold tracking-tight lg:text-6xl xl:text-7xl leading-[1.25!important] text-center dark:text-white">
          Loved by server owners and players&nbsp;
          <span className="inline-block text-teslaRed">worldwide.</span>
        </h2>

        <div className="max-w-xl mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md ">
            <a
              href="https://playlolly.tebex.io/category/resources"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full px-8 py-3  font-medium text-white no-underline bg-black border border-transparent rounded-md dark:bg-white dark:text-black betterhover:dark:hover:bg-gray-300 betterhover:hover:bg-gray-700 md:py-3 md:text-lg md:px-10 md:leading-6"
            >
              Download now ↗
            </a>
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

        <div className="grid mt-12 gap-x-6 gap-y-6 lg:mt-16 lg:grid-cols-3 ">
          <div className="space-y-6">
            {configFirst.map((review, key) => (
              <Review
                key={key}
                name={review.name}
                date={review.date}
                avatar={review.avatar}
                text={review.text}
              />
            ))}
          </div>

          <div className="space-y-6">
            {configSecond.map((review, key) => (
              <Review
                key={key}
                name={review.name}
                date={review.date}
                avatar={review.avatar}
                text={review.text}
              />
            ))}
          </div>

          <div className="space-y-6">
            {configThird.map((review, key) => (
              <Review
                key={key}
                name={review.name}
                date={review.date}
                avatar={review.avatar}
                text={review.text}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
