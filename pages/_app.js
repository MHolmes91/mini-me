import '../styles/styles.css'
import { GoogleAnalytics } from 'nextjs-google-analytics'

export default function App({ Component, pageProps }) {
  return (
    <>
      {pageProps?.data?.googleAnalyticsID && (
        <GoogleAnalytics trackPageViews gaMeasurementId={pageProps.data.googleAnalyticsID} />
      )}
      <Component {...pageProps} />
    </>
  )
}
