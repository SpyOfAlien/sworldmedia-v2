import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { MediaContextProvider } from '../lib/media';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import AboutCareer from '../components/partials/about/about-career';
import AboutTeam from '../components/partials/about/about-team';
import AboutCEO from '../components/partials/about/about-ceo';
import AboutAdvisor from '../components/partials/about/about-advisor';
import AboutSworld from '../components/partials/about/about-sworld';
import AboutWhyUs from '../components/partials/about/about-whyus';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

const AboutUs = ({ locale }) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isVn = router.locale === 'vn';

  return (
    <MediaContextProvider>
      <NextSeo
        title={router.locale === 'vn' ? 'Đội ngũ' : 'Team'}
        description={
          router.locale === 'vn'
            ? 'Chân thành – Thấu hiểu – Bền bỉ – Sáng tạo – Khác biệt'
            : 'Sincerity - Understanding - Perseverance - Creativity - Distinctiveness'
        }
        canonical="https://www.s-worldmedia.com/about"
        openGraph={{
          type: 'website',
          url: 'https://www.s-worldmedia.com/about',
          title: router.locale === 'vn' ? 'Đội ngũ' : 'Team',
          description:
            router.locale === 'vn'
              ? 'Chân thành – Thấu hiểu – Bền bỉ – Sáng tạo – Khác biệt'
              : 'Sincerity - Understanding - Perseverance - Creativity - Distinctiveness',
        }}
      />
      <Head>
        <meta name="homepage" content="false" />
        <meta name="referrer" content="unsafe-url" />
        <meta name="referrer" content="always" />
        <meta
          property="og:description"
          content={
            isVn
              ? 'S-World mong muốn nhân những giá trị kết nối và kiến tạo những giá trị mới khác biệt từ multimedia (đa phương tiện)'
              : 'S-World hopes to connect and create new values from multimedia'
          }
        />
        <meta
          property="og:title"
          content={isVn ? 'Đội ngũ Sworldmedia' : 'Sworldmedia teams'}
        />
        <meta property="og:url" content="https://www.s-worldmedia.com/about" />
        <meta
          name="twitter:description"
          content={
            isVn
              ? 'S-World mong muốn nhân những giá trị kết nối và kiến tạo những giá trị mới khác biệt từ multimedia (đa phương tiện)'
              : 'S-World hopes to connect and create new values from multimedia'
          }
        />
        <meta
          name="twitter:title"
          content={isVn ? 'Đội ngũ Sworldmedia' : 'Sworldmedia team'}
        />
      </Head>
      <AboutSworld />
      <AboutAdvisor />
      <AboutWhyUs />
      <AboutCEO />
      <AboutTeam />
      <AboutCareer />
    </MediaContextProvider>
  );
};

export default AboutUs;
