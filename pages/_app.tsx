import '../styles/index.css';
import { SectionManager } from '../lib/context/section-context';
import { appWithTranslation } from 'next-i18next';
import { UIManager } from '../lib/context/ui-context';
import Page from '../components/layout/page/page';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <UIManager>
      <SectionManager>
        <Page pageProps={pageProps}>
          <Component {...pageProps} />
        </Page>
      </SectionManager>
    </UIManager>
  );
};

export default appWithTranslation(MyApp);
