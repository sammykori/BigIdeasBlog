import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-PTZMFQ50Y5"/>
      <Script
          id='google-analytics'
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PTZMFQ50Y5', {
          page_path: window.location.pathname,
          });
          `,
          }}
      />
      <Component {...pageProps} />
    </>
  )
}
