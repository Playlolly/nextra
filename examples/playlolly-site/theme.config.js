import { Footer } from "./components/Footer";

const Logo = ({ height }) => (
  <svg height={height} viewBox="0 0 98.63 197.31" fill="none">
    <path
      d="M50.71,0a50.57,50.57,0,0,0-8,.32c-16.56,2.19-30.63,12-37.81,26.5A47.62,47.62,0,0,0,.61,39.6c-.38,1.91-.43,6-.51,52.09l-.1,50H98.63l-.07-49.9c-.08-49.29-.08-49.9-.62-52.46-.28-1.43-.64-3-.79-3.57l-.28-1H92.58a26.47,26.47,0,0,1-9.53-1.28A32.67,32.67,0,0,1,63.76,17.79,28.29,28.29,0,0,1,60.39,4.63L60.24,1,59.32.86A67.37,67.37,0,0,0,50.71,0ZM31.7,149.1v17.66c0,19.59-.05,19,1.71,22.45a16.91,16.91,0,0,0,6.39,6.34,17.4,17.4,0,0,0,15.23,0,18,18,0,0,0,6.36-6.22c1.78-3.32,1.73-2.76,1.73-22.49V149.1Z"
      fill="#E82127"
    />
  </svg>
);

export default {
  docsRepositoryBase: "https://discord.gg/BC73kTVSTK",
  titleSuffix: " | Playlolly",
  search: true,
  unstable_flexsearch: true,
  floatTOC: true,
  defaultMenuCollapsed: true,
  projectChatLink: "https://discord.gg/BC73kTVSTK",
  feedbackLink: "Questions? Join our Discord server →",
  feedbackLabels: "feedback",
  logo: () => {
    return (
      <>
        <Logo height={24} />
        <span
          className="mx-2 text-xl font-extrabold md:inline select-none"
          title={"Playlolly: Fivem Server & Resources"}
        >
          Playlolly
        </span>
      </>
    );
  },
  footer: () => {
    return <Footer />;
  },
  head: function Head({ title, meta }) {
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/images/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@playlolly" />
        <meta name="twitter:creator" content="@playlolly" />
        <meta property="og:type" content="website" />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={meta.description} />
        <meta property="og:url" content={`https://playlolly.net`} />
        <meta
          property="og:image"
          content={`https://playlolly.net${meta.ogImage ?? "/og-image.png"}`}
        />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:site_name" content="Playlolly" />
      </>
    );
  },
  i18n: [{ locale: "en", text: "English" }],
  gitTimestamp: "Last updated on",
};
