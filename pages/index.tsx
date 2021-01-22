import Head from "next/head";
import styles from "../styles/Home.module.css";
import fs from "fs";
import { Description } from "../components/Description";
import { HeaderPicture } from "../components/HeaderPicture";
import { Favicon } from "../components/Favicon";
import { Footer } from "../components/Footer";

export const getStaticProps = () => ({
  props: {
    portfolioParameters: JSON.parse(fs.readFileSync("portfolio.json", "utf8")),
  },
});

const Home = ({ portfolioParameters }) => {
  const {
    pageTitle,
    title,
    description,
    headerPicture,
    favicon,
    gravatarEmail,
    footer,
  } = portfolioParameters;
  return (
    <div>
      {JSON.stringify(portfolioParameters)}

      <Head>
        {/* TODO Analytics */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="//fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic|PT+Sans:400,700|PT+Sans+Narrow:400,700|Inconsolata:400"
          rel="stylesheet"
          type="text/css"
        />
        <script src="https://kit.fontawesome.com/f938125ef2.js"></script>

        {/* Needs to be direct due to restrictions on children of <Head> */}
        {Favicon({ ...favicon, gravatarEmail })}
        <title>{pageTitle ? pageTitle : title}</title>
      </Head>
      <div className="header">
        <Favicon {...favicon} gravatarEmail={gravatarEmail} />
        <div className="header__text">
          <h1 className="header__title">{title}</h1>
          <p className="header__description">
            <Description description={description} />
          </p>
        </div>
        <HeaderPicture {...headerPicture} gravatarEmail={gravatarEmail} />
      </div>
      <div className="portfolio">
        {/* ${portfolioEntries.reduce((str, entry) => str + entry, "")} */}
      </div>
      <Footer content={footer} />
    </div>
  );
};

export default Home;
