import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Container } from '../components/layout';
import Team from '../components/team/team';
import Heading from '../components/ui/typo/heading';
import Paragraph from '../components/ui/typo/paragraph';
import { Media, MediaContextProvider } from '../lib/media';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Advisor from '../components/team/advisor';
import { NextSeo } from 'next-seo';
import AboutCareer from '../components/partials/about/about-career';

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
      <Container cl="sw-my-header">
        <section className="sw-text-center sw-py-4">
          <Media greaterThanOrEqual="lg">
            <Heading h="h3">{t('aboutus__title')}</Heading>
          </Media>
          <Media lessThan="lg">
            <Heading h="h4">{t('aboutus__title')}</Heading>
          </Media>
        </section>
        <section className="sw-flex sw-flex-col-reverse sw-justify-between xl:sw-flex-row sw-my-8 xl:sw-mb-40 2xl:sw-my-40">
          <div className="sw-w-full xl:sw-w-48 sw-flex sw-flex-col sw-justify-center">
            <div className="sw-mb-6">
              <Paragraph>{t('aboutus__story__content1')}</Paragraph>
            </div>
            <div className="sw-mb-6">
              <Paragraph>{t('aboutus__story__content2')}</Paragraph>
            </div>
            <div className="sw-mb-6">
              <Paragraph>{t('aboutus__story__content3')}</Paragraph>
            </div>
          </div>
          <div className="sw-w-full xl:sw-w-48 sw-mb-12 xl:sw-mb-0 sw-flex sw-items-center">
            <div className="sw-w-full">
              <Image
                src="/assets/images/others/team.png"
                width={739}
                height={587}
                layout="responsive"
                quality={100}
              />
            </div>
          </div>
        </section>
        <section className="sw-flex sw-flex-col-reverse sw-justify-between xl:sw-flex-row sw-my-8 xl:sw-my-32 2xl:sw-my-40">
          <Advisor />
        </section>
        <section className="sw-flex sw-flex-col xl:sw-flex-row sw-justify-between sw-my-8 xl:sw-my-32 2xl:sw-my-40">
          <div className="sw-w-full xl:sw-w-48">
            <Image
              src="/assets/images/others/CEO.png"
              width={692}
              height={742}
              layout="responsive"
              quality={100}
            />
          </div>
          <div className="sw-w-full xl:sw-w-48">
            <div className="sw-my-6">
              <Media greaterThanOrEqual="lg">
                <Heading h="h3">{t('aboutus__ceo')}</Heading>
              </Media>
              <Media lessThan="lg">
                <Heading h="h4">{t('aboutus__ceo')}</Heading>
              </Media>
            </div>
            <Paragraph cl="sw-mb-4">{t('aboutus__ceo__content1')}</Paragraph>
            <Paragraph cl="sw-mb-4">{t('aboutus__ceo__content2')}</Paragraph>
            <Paragraph cl="sw-mb-4">{t('aboutus__ceo__content3')}</Paragraph>
            <Paragraph cl="sw-mb-4">{t('aboutus__ceo__content4')}</Paragraph>
          </div>
        </section>
        <section className="sw-my-24 xl:sw-my-56 2xl:sw-my-44">
          <Media greaterThanOrEqual="lg">
            <Heading cl="sw-text-center sw-mb-md" h="h3">
              {t('aboutus__team__title')}
            </Heading>
          </Media>
          <Media lessThan="lg">
            <Heading cl="sw-text-center sw-mb-md" h="h4">
              {t('aboutus__team__title')}
            </Heading>
          </Media>
          <Team />
        </section>
      </Container>

      <AboutCareer />
    </MediaContextProvider>
  );
};

export default AboutUs;
