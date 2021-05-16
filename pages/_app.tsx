import '../styles/index.css';
import { SectionManager } from '../lib/context/section-context';
import { appWithTranslation } from 'next-i18next';

const MyApp = ({ Component, pageProps }) => {
  return (
    <SectionManager>
      <Component {...pageProps} />
    </SectionManager>
  );
};

export default appWithTranslation(MyApp);
