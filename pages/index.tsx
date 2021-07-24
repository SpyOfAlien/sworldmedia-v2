import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ParticlesLayout, Container } from '../components/layout';
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
import { useTranslation } from 'react-i18next';
import { Media, MediaContextProvider } from '../lib/media';
import VideoBackground from '../components/common/video/video-background';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

export const getStaticProps = async ({ locale, preview }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

const HomePage = ({ locales, allPosts = [] }) => {
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
            ? 'S-worldmedia | Công ty truyền thông đa phương tiện thế hệ mới'
            : 'S-worldmedia | A new generation multimedia company'
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
              ? 'S-worldmedia | Công ty truyền thông đa phương tiện thế hệ mới'
              : 'S-worldmedia | A new generation multimedia company',
          description:
            router.locale === 'vn'
              ? 'Chân thành – Thấu hiểu – Bền bỉ – Sáng tạo – Khác biệt'
              : 'Sincerity - Understanding - Perseverance - Creativity - Distinctiveness',
        }}
      />
      {/* <Media at="xs"> */}
      <VideoBackground />
      <section className="sw-my-32">
        <Container>
          <AboutUs data={aboutUsList} />
        </Container>
      </section>

      <section className="sw-my-32">
        <Container>
          <ServicePage />
        </Container>
      </section>

      <section className="sw-my-32">
        <Container>
          <Clients
            title={t('home__partner__title')}
            imgSrc="/assets/svg/media-partner.svg"
          />
        </Container>
      </section>

      <section className="sw-my-32">
        <Container>
          <Clients
            title={t('home__client__title')}
            imgSrc="/assets/svg/clients.svg"
          />
        </Container>
      </section>

      <ProductSlider products={Products} />
      <section className="sw-my-32">
        <Container>
          <WhyUs data={whyUsList} />
        </Container>
      </section>
      <Media greaterThanOrEqual="sm">
        <div className="sw-fixed sw-top-0" style={{ zIndex: -10 }}>
          <ParticlesLayout />
        </div>
      </Media>
      {/* </Media>
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

          <HomeContainer smallPadding={true} isVisible={currentSection === 2}>
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
          <HomeContainer hasPadding={false} isVisible={currentSection === 7}>
            <WhyUs data={whyUsList} />
          </HomeContainer>
        </ReactScrollWheelHandler>
      </Media> */}
    </MediaContextProvider>
  );
};

export default HomePage;
