import { FC } from "react";

export const Footer: FC = () => {
  const Logo = ({ height }) => (
    <svg height={height} viewBox="0 0 98.63 197.31" fill="none">
      <path
        d="M50.71,0a50.57,50.57,0,0,0-8,.32c-16.56,2.19-30.63,12-37.81,26.5A47.62,47.62,0,0,0,.61,39.6c-.38,1.91-.43,6-.51,52.09l-.1,50H98.63l-.07-49.9c-.08-49.29-.08-49.9-.62-52.46-.28-1.43-.64-3-.79-3.57l-.28-1H92.58a26.47,26.47,0,0,1-9.53-1.28A32.67,32.67,0,0,1,63.76,17.79,28.29,28.29,0,0,1,60.39,4.63L60.24,1,59.32.86A67.37,67.37,0,0,0,50.71,0ZM31.7,149.1v17.66c0,19.59-.05,19,1.71,22.45a16.91,16.91,0,0,0,6.39,6.34,17.4,17.4,0,0,0,15.23,0,18,18,0,0,0,6.36-6.22c1.78-3.32,1.73-2.76,1.73-22.49V149.1Z"
        fill="#E82127"
      />
    </svg>
  );

  return (
    <footer
      className="bg-gray-100 dark:bg-neutral-900 dark:border-gray-800"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className=" mx-auto max-w-[90rem] ">
        <div className="md:flex md:items-center md:justify-between">
          <div>
            <div className="flex items-center">
              <Logo height={24} />
              <span
                className="mx-2 text-xl font-extrabold md:inline select-none"
                title={"Playlolly: Fivem Server & Resources"}
              >
                Playlolly
              </span>
            </div>
            <p className="mt-4 text-xs text-gray-500 ">
              &copy; {new Date().getFullYear()} Playlolly. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
