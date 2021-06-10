import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getAllPostsForHome } from '../lib/api';
import { HomeContainer, ParticlesLayout } from '../components/layout';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import { useSection } from '../lib/context/section-context';
import { useEffect, useState } from 'react';
import ProductSlider from '../components/common/products/slider';
import Products from '../lib/data/products';
import WhyUs from '../components/common/whyus/whyus';
import whyUsList from '../lib/data/whyus';
import aboutUsList from '../lib/data/about-us';
import AboutUs from '../components/common/about-us/about-us';
import ServicePage from '../components/common/services/service-page/service-page';
import Clients from '../components/common/clients/clients';
import Glow from '../components/glows/glow';
import { useTranslation } from 'react-i18next';
import { Media, MediaContextProvider } from '../lib/media';
import VideoBackground from '../components/common/video/video-background';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

export const getStaticProps = async ({ locale, preview }) => {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  return {
    props: {
      allPosts,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

const HomePage = ({ locales, allPosts }) => {
  // Context
  const { currentSection, onScrollUp, onScrollDown } = useSection();
  const [desktopView, setDesktopView] = useState(undefined);
  const router = useRouter();
  const isVn = router.locale === 'vn';

  const { t } = useTranslation('common');

  useEffect(() => {
    switch (currentSection) {
      case 1:
        setDesktopView(<AboutUs data={aboutUsList} />);
        break;

      default:
        break;
    }
  }, [currentSection]);

  const onPageScrollUp = () => {
    onScrollUp();
  };

  const onPageScrollDown = () => {
    onScrollDown();
  };

  return (
    <MediaContextProvider>
      <NextSeo
        title={
          router.locale === 'vn'
            ? 'S-worldmedia | Truyền thông đa phương tiện thế hệ mới'
            : 'S-worldmedia | S-world multimedia a new generation multimedia company'
        }
        description={
          router.locale === 'vn'
            ? 'Chân thành – Thấu hiểu – Bền bỉ – Sáng tạo – Khác biệt'
            : 'Sincerity - Understanding - Perseverance - Creativity - Distinctiveness'
        }
        canonical="https://www.s-worldmedia.com"
        openGraph={{
          type: 'website',
          url: 'https://www.s-worldmedia.com',
          title:
            router.locale === 'vn'
              ? 'S-worldmedia | Truyền thông đa phương tiện thế hệ mới'
              : 'S-worldmedia | S-world multimedia a new generation multimedia company',
          description:
            router.locale === 'vn'
              ? 'Chân thành – Thấu hiểu – Bền bỉ – Sáng tạo – Khác biệt'
              : 'Sincerity - Understanding - Perseverance - Creativity - Distinctiveness',
        }}
      />
      <Media at="xs">
        <VideoBackground />
        <AboutUs data={aboutUsList} />
        <ServicePage />
        <Clients
          title={t('home__partner__title')}
          imgSrc="/assets/svg/media-partner.svg"
        />
        <Clients
          title={t('home__client__title')}
          imgSrc="/assets/svg/clients.svg"
        />
        <ProductSlider products={Products} />
        <WhyUs data={whyUsList} />
      </Media>
      <Media greaterThanOrEqual="sm">
        <ReactScrollWheelHandler
          upHandler={onPageScrollUp}
          downHandler={onPageScrollDown}
          timeout={1000}
        >
          {currentSection !== 1 && currentSection !== 6 && <ParticlesLayout />}
          {currentSection === 2 && <Glow path="about-glow" />}
          {currentSection === 3 && <Glow path="service-glow" />}
          {currentSection === 4 && <Glow path="partner-glow" />}
          {currentSection === 6 && <Glow path="client-glow" />}
          {currentSection === 7 && <Glow path="whyus-glow" />}

          <HomeContainer
            isFullpage={true}
            hasPadding={false}
            isVisible={currentSection === 1}
          >
            <VideoBackground />
          </HomeContainer>

          <HomeContainer isVisible={currentSection === 2}>
            <AboutUs data={aboutUsList} />
          </HomeContainer>

          <HomeContainer isVisible={currentSection === 3}>
            <ServicePage />
          </HomeContainer>

          <HomeContainer isVisible={currentSection === 4}>
            <Clients
              title={t('home__partner__title')}
              imgSrc="/assets/svg/media-partner.svg"
            />
          </HomeContainer>
          <HomeContainer isVisible={currentSection === 5}>
            <Clients
              title={t('home__client__title')}
              imgSrc="/assets/svg/clients.svg"
            />
          </HomeContainer>
          <HomeContainer
            hasPadding={false}
            isFullpage={true}
            isVisible={currentSection === 6}
          >
            <ProductSlider products={Products} />
          </HomeContainer>
          <HomeContainer isVisible={currentSection === 7}>
            <WhyUs data={whyUsList} />
          </HomeContainer>
        </ReactScrollWheelHandler>
      </Media>
    </MediaContextProvider>
  );
};

export default HomePage;
