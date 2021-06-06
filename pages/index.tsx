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
import { useMediaQuery } from 'react-responsive';
import cn from 'classnames';
import Glow from '../components/glows/glow';
import { useTranslation } from 'react-i18next';
import nextI18NextConfig from '../next-i18next.config.js';
import { Media, MediaContextProvider } from '../lib/media';

export const getStaticProps = async ({ locale, preview }) => {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  return {
    props: {
      allPosts,
      ...(await serverSideTranslations(locale, ['common', 'home', 'contact'])),
    },
  };
};

const HomePage = ({ locales, allPosts }) => {
  // Context
  const { currentSection, onScrollUp, onScrollDown } = useSection();
  const [desktopView, setDesktopView] = useState(undefined);

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
      <Media at="xs">
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
          <ParticlesLayout />
          {currentSection === 1 && <Glow path="about-glow" />}
          {currentSection === 2 && <Glow path="service-glow" />}
          {currentSection === 3 && <Glow path="partner-glow" />}
          {currentSection === 4 && <Glow path="client-glow" />}
          {currentSection === 6 && <Glow path="whyus-glow" />}

          <HomeContainer isVisible={currentSection === 1}>
            <AboutUs data={aboutUsList} />
          </HomeContainer>

          <HomeContainer isVisible={currentSection === 2}>
            <ServicePage />
          </HomeContainer>

          <HomeContainer isVisible={currentSection === 3}>
            <Clients
              title={t('home__partner__title')}
              imgSrc="/assets/svg/media-partner.svg"
            />
          </HomeContainer>
          <HomeContainer isVisible={currentSection === 4}>
            <Clients
              title={t('home__client__title')}
              imgSrc="/assets/svg/clients.svg"
            />
          </HomeContainer>
          <HomeContainer
            hasPadding={false}
            isFullpage={true}
            isVisible={currentSection === 5}
          >
            <ProductSlider products={Products} />
          </HomeContainer>
          <HomeContainer isVisible={currentSection === 6}>
            <WhyUs data={whyUsList} />
          </HomeContainer>
        </ReactScrollWheelHandler>
      </Media>
    </MediaContextProvider>
  );
};

export default HomePage;
