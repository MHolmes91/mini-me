import Head from "next/head";
import PortfolioEntries from "../components/PortfolioEntries";
import Header from "../components/Header";
import Footer from "../components/Footer";
import getPortfolioProps from "../lib/getPortfolioProps";

const DEFAULT_GOOGLE_FONTS_URL =
  "//fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic|PT+Sans:400,700|PT+Sans+Narrow:400,700|Inconsolata:400";

export async function getStaticProps() {
  return {
    props: getPortfolioProps(),
  };
}

export default function Home({
  data,
  headerPictureUrl,
  faviconUrl,
  faviconType,
  portfolioEntries,
  description,
}) {
  const styleVars = [];
  const colors = data.style?.colors || {};
  const fonts = data.style?.fonts || {};
  if (colors.text) styleVars.push(`--color-text: ${colors.text}`);
  if (colors.background)
    styleVars.push(`--color-background: ${colors.background}`);
  if (colors.accent) styleVars.push(`--color-accent: ${colors.accent}`);
  if (colors.accentAlt)
    styleVars.push(`--color-accent-alt: ${colors.accentAlt}`);
  if (colors.iconBackground)
    styleVars.push(`--color-icon-background: ${colors.iconBackground}`);
  if (colors.icon) styleVars.push(`--color-icon: ${colors.icon}`);
  if (fonts.body) styleVars.push(`--font-body: ${fonts.body}`);
  if (fonts.header) styleVars.push(`--font-header: ${fonts.header}`);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{data.pageTitle ? data.pageTitle : data.title}</title>
        {faviconUrl && <link rel="icon" type={faviconType} href={faviconUrl} />}
        <link
          href={fonts.googleFontsUrl || DEFAULT_GOOGLE_FONTS_URL}
          rel="stylesheet"
          type="text/css"
        />
        {styleVars.length > 0 && (
          <style>{`:root{${styleVars.join(";")};}`}</style>
        )}
      </Head>
      <div className="page-container">
        <main className="content">
          <Header
            title={data.title}
            description={description}
            pictureUrl={headerPictureUrl}
            pictureText={data.headerPicture?.pictureText}
          />
          <div className="portfolio">
            <PortfolioEntries entries={portfolioEntries} />
          </div>
        </main>
        {data.footer && <Footer content={data.footer} />}
      </div>
    </>
  );
}
