import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getAllPostsForHome } from '../lib/api';
import { ParticlesLayout } from '../components/layout';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import { useSection } from '../lib/context/section-context';
import { useEffect } from 'react';
import { useViewportScroll } from 'framer-motion';
import { useUI } from '../lib/context/ui-context';
import ProductSlider from '../components/common/products/slider';
import Products from '../lib/data/products';
import WhyUs from '../components/common/whyus/whyus';
import whyUsList from '../lib/data/whyus';
import aboutUsList from '../lib/data/about-us';
import AboutUs from '../components/common/about-us/about-us';
import ServicePage from '../components/common/services/service-page/service-page';
import Clients from '../components/common/clients/clients';

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

  useEffect(() => {}, [currentSection]);

  const onPageScrollUp = () => {
    // Check animation done
    onScrollUp();
  };

  const onPageScrollDown = () => {
    // check animation done
    onScrollDown();
  };

  return (
    <ReactScrollWheelHandler
      upHandler={onPageScrollUp}
      downHandler={onPageScrollDown}
      timeout={1000}
    >
      <ParticlesLayout />

      {/* About us */}
      {currentSection === 1 ? (
        <section className="sw-absolute sw-inset-0">
          <AboutUs data={aboutUsList} />
        </section>
      ) : null}

      {/* Services */}

      {currentSection === 2 ? (
        <section className="sw-absolute sw-inset-0">
          <ServicePage />
        </section>
      ) : null}

      {/* Partners */}

      {currentSection === 3 ? (
        <section className="sw-absolute sw-inset-0">
          <Clients
            title="Đối tác media"
            imgSrc="/assets/svg/media-partner.svg"
          />
        </section>
      ) : null}

      {/* Clients */}

      {currentSection === 4 ? (
        <section className="sw-absolute sw-inset-0">
          <Clients
            title="Khách hàng của chúng tôi"
            imgSrc="/assets/svg/clients.svg"
          />
        </section>
      ) : null}

      {/* Products */}
      {currentSection === 5 ? (
        <section className="sw-absolute sw-inset-0">
          <ProductSlider products={Products} />
        </section>
      ) : null}

      {/* Why us */}
      {currentSection === 6 ? (
        <section className="sw-absolute sw-inset-0">
          <WhyUs data={whyUsList} />
        </section>
      ) : null}
    </ReactScrollWheelHandler>
  );
};

export default HomePage;
