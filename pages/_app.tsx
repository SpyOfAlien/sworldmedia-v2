import '../styles/index.css';
import { SectionManager } from '../lib/context/section-context';
import { appWithTranslation } from 'next-i18next';
import { UIManager } from '../lib/context/ui-context';
import Page from '../components/layout/page/page';

const MyApp = ({ Component, pageProps }) => {
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
