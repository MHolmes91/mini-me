import Document, { Html, Head, Main, NextScript } from 'next/document';
import getPortfolioProps from '../lib/getPortfolioProps';

const DEFAULT_GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic|PT+Sans:400,700|PT+Sans+Narrow:400,700|Inconsolata:400&display=swap";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const { data } = getPortfolioProps();
    const fontsUrlRaw =
      data.style?.fonts?.googleFontsUrl || DEFAULT_GOOGLE_FONTS_URL;
    // Always use HTTPS even if the config omits the protocol or specifies HTTP
    let fontsUrl = fontsUrlRaw;
    if (fontsUrl.startsWith('http://')) {
      fontsUrl = `https://${fontsUrl.slice(7)}`;
    } else if (fontsUrl.startsWith('//')) {
      fontsUrl = `https:${fontsUrl}`;
    }
    return { ...initialProps, fontsUrl };
  }

  render() {
    const { fontsUrl } = this.props;
    return (
      <Html>
        <Head>
          {fontsUrl && (
            <>
              {/*
                Preconnect warms up the TLS and DNS connections for Google's
                font domains. This helps fonts load faster and reduces layout
                shift before the CSS file is downloaded.
              */}
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
              />
              <link href={fontsUrl} rel="stylesheet" />
            </>
          )}
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
