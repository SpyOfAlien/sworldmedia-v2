import '../styles/index.scss';
import { SectionManager } from '../lib/context/section-context';
import { appWithTranslation } from 'next-i18next';
import { UIManager } from '../lib/context/ui-context';
import Page from '../components/layout/page/page';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
// import * as gtag from '../lib/gtag';
import { DefaultSeo } from 'next-seo';
import seo from '../seo.config';
import TagManager from 'react-gtm-module';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      // gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-TL7JMRW' });
  }, []);

  return (
    <UIManager>
      <SectionManager>
        <Page pageProps={pageProps}>
          <DefaultSeo {...seo} />
          <Component {...pageProps} />
        </Page>
      </SectionManager>
    </UIManager>
  );
};

export default appWithTranslation(MyApp);
