import Document, { Html, Head, Main, NextScript } from 'next/document';
import getPortfolioProps from '../lib/getPortfolioProps';

const DEFAULT_GOOGLE_FONTS_URL =
  "//fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic|PT+Sans:400,700|PT+Sans+Narrow:400,700|Inconsolata:400";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const { data } = getPortfolioProps();
    const fontsUrl = data.style?.fonts?.googleFontsUrl || DEFAULT_GOOGLE_FONTS_URL;
    return { ...initialProps, fontsUrl };
  }

  render() {
    const { fontsUrl } = this.props;
    return (
      <Html>
        <Head>
          {fontsUrl && <link href={fontsUrl} rel="stylesheet" type="text/css" />}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
