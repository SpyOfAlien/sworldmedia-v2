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
    <>
      {' '}
      {mediumScreen ? (
        <ReactScrollWheelHandler
          upHandler={onPageScrollUp}
          downHandler={onPageScrollDown}
          timeout={1000}
        >
          {currentSection === 1 && <Glow path="about-glow" />}
          {currentSection === 2 && <Glow path="service-glow" />}
          {currentSection === 3 && <Glow path="partner-glow" />}
          {currentSection === 4 && <Glow path="client-glow" />}
          {currentSection === 6 && <Glow path="whyus-glow" />}

          <Container isVisible={currentSection === 1}>
            <AboutUs data={aboutUsList} />
          </Container>

          <Container isVisible={currentSection === 2}>
            <ServicePage />
          </Container>

          <Container isVisible={currentSection === 3}>
            <Clients
              title="Đối tác media"
              imgSrc="/assets/svg/media-partner.svg"
            />
          </Container>
          <Container isVisible={currentSection === 4}>
            <Clients
              title="Khách hàng của chúng tôi"
              imgSrc="/assets/svg/clients.svg"
            />
          </Container>
          <Container isFullpage={true} isVisible={currentSection === 5}>
            <ProductSlider products={Products} />
          </Container>
          <Container isVisible={currentSection === 6}>
            <WhyUs data={whyUsList} />
          </Container>
        </ReactScrollWheelHandler>
      ) : (
        <div className="sw-mx-8 sw-mx-auto">
          <AboutUs data={aboutUsList} />
          <ServicePage />
          <Clients
            title="Đối tác media"
            imgSrc="/assets/svg/media-partner.svg"
          />
          <Clients
            title="Khách hàng của chúng tôi"
            imgSrc="/assets/svg/clients.svg"
          />
          <ProductSlider products={Products} />
          <WhyUs data={whyUsList} />
        </div>
      )}
    </>
  );
};

export default HomePage;
