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

export const getStaticProps = async ({ locale, preview }) => {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  return {
    props: {
      allPosts,
      ...(await serverSideTranslations(locale, ['common', 'home'])),
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

  const mediumScreen = useMediaQuery({
    query: '(min-device-width: 768px)',
  });

  return (
    <ReactScrollWheelHandler
      upHandler={onPageScrollUp}
      downHandler={onPageScrollDown}
      timeout={mediumScreen ? 1000 : 0}
    >
      {mediumScreen && <ParticlesLayout />}
      {currentSection === 1 && mediumScreen && <Glow path="about-glow" />}
      {currentSection === 2 && mediumScreen && <Glow path="service-glow" />}
      {currentSection === 3 && mediumScreen && <Glow path="partner-glow" />}
      {currentSection === 4 && mediumScreen && <Glow path="client-glow" />}
      {currentSection === 6 && mediumScreen && <Glow path="whyus-glow" />}

      <HomeContainer isVisible={currentSection === 1 || !mediumScreen}>
        <AboutUs data={aboutUsList} />
      </HomeContainer>

      <HomeContainer isVisible={currentSection === 2 || !mediumScreen}>
        <ServicePage />
      </HomeContainer>

      <HomeContainer isVisible={currentSection === 3 || !mediumScreen}>
        <Clients
          title={t('test__newline')}
          imgSrc="/assets/svg/media-partner.svg"
        />
      </HomeContainer>
      <HomeContainer isVisible={currentSection === 4 || !mediumScreen}>
        <Clients
          title={t('home__client__title')}
          imgSrc="/assets/svg/clients.svg"
        />
      </HomeContainer>
      <HomeContainer
        isFullpage={true}
        isVisible={currentSection === 5 || !mediumScreen}
      >
        <ProductSlider products={Products} />
      </HomeContainer>
      <HomeContainer isVisible={currentSection === 6 || !mediumScreen}>
        <WhyUs data={whyUsList} />
      </HomeContainer>
    </ReactScrollWheelHandler>
  );
};

export default HomePage;
