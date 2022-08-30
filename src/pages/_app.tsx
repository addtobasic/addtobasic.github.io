import { DefaultSeo } from 'next-seo';
import '../../styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="Genshi's CUI Portfolio"
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          }
        ]}
        openGraph={{
          type: 'website',
          url: 'http://addtobasic.github.io/',
          title: 'Ubuntu CUI Portfolio',
          description: 'CUI Portfolio like ubuntu terminal.',
          images: [
            {
              url: 'https://addtobasic.github.io/images/ogp.png',
              width: 800,
              height: 600,
              alt: 'Ubuntu CUI Portfolio',
            },
          ],
        }}
        twitter={{
          handle: '@addtobasic',
          site: '@addtobasic',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
