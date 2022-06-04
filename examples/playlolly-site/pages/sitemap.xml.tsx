const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://playlolly.net</loc>
            <lastmod>2022-05-17T14:48:00.000Z</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
        </url>
        <url>
            <loc>https://playlolly.net/roadmap</loc>
            <lastmod>2022-05-17T14:48:00.000Z</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
        </url>
        <url>
            <loc>https://playlolly.net/changelogs</loc>
            <lastmod>2022-05-17T14:48:00.000Z</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
        </url>
        <url>
            <loc>https://playlolly.net/docs</loc>
            <lastmod>2022-05-17T14:48:00.000Z</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
        </url>
    </urlset>
`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
