import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getAllPostsForHome } from '../lib/api';
import { Container, ParticlesLayout } from '../components/layout';
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

export const getStaticProps = async ({ locale, preview }) => {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  const locales = await serverSideTranslations(locale, ['common']);
  return {
    props: {
      locales,
      allPosts,
    },
  };
};

const HomePage = ({ locales, allPosts }) => {
  // Context
  const { currentSection, onScrollUp, onScrollDown } = useSection();
  const [desktopView, setDesktopView] = useState(undefined);

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

      <Container isVisible={currentSection === 1 || !mediumScreen}>
        <AboutUs data={aboutUsList} />
      </Container>

      <Container isVisible={currentSection === 2 || !mediumScreen}>
        <ServicePage />
      </Container>

      <Container isVisible={currentSection === 3 || !mediumScreen}>
        <Clients title="Đối tác media" imgSrc="/assets/svg/media-partner.svg" />
      </Container>
      <Container isVisible={currentSection === 4 || !mediumScreen}>
        <Clients
          title="Khách hàng của chúng tôi"
          imgSrc="/assets/svg/clients.svg"
        />
      </Container>
      <Container
        isFullpage={true}
        isVisible={currentSection === 5 || !mediumScreen}
      >
        <ProductSlider products={Products} />
      </Container>
      <Container isVisible={currentSection === 6 || !mediumScreen}>
        <WhyUs data={whyUsList} />
      </Container>
    </ReactScrollWheelHandler>
  );
};

export default HomePage;
