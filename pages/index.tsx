import Head from "next/head";
import fs from "fs";
import { Favicon } from "../components/Favicon";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Portfolio } from "../components/Portfolio";

export const getStaticProps = () => ({
  props: JSON.parse(fs.readFileSync("portfolio.json", "utf8")),
});

const Home = ({
  pageTitle,
  title,
  description,
  headerPicture,
  favicon,
  gravatarEmail,
  footer,
  portfolio,
}) => (
  <div>
    <Head>
      {/* TODO Typing */}
      {/* TODO Analytics */}
      {/* TODO React FontAwesome */}
      {/* TODO Style */}
      {/* TODO Change fonts and stuff */}
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
    <Favicon {...favicon} gravatarEmail={gravatarEmail} />
    <Header
      title={title}
      description={description}
      headerPicture={headerPicture}
      gravatarEmail={gravatarEmail}
    />
    <Portfolio entries={portfolio} />
    <Footer content={footer} />
  </div>
);
export default Home;
