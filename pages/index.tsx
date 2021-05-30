import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getAllPostsForHome } from '../lib/api';
import { ParticlesLayout } from '../components/layout';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import { useSection } from '../lib/context/section-context';
import { useEffect } from 'react';
import { useViewportScroll } from 'framer-motion';
import SmallCard from '../components/ui/cards/small/small';
import ServiceGlow from '../components/glows/service-glow';
import { ServiceDetail } from '../components/common';
import Menu from '../components/common/menu/menu';
import { useUI } from '../lib/context/ui-context';
import Medium from '../components/ui/cards/medium/medium';
import Image from 'next/image';
import ProductSlider from '../components/ui/products/slider';
import Products from '../lib/data/products';

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
  const { openModal, closeModal } = useUI();

  const { scrollYProgress } = useViewportScroll();

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
    >
      {/* <ParticlesLayout /> */}
      {/* <section className="sw-absolute sw-top-0 sw-left-0 sw-flex sw-flex-col md:sw-flex-row sw-items-center sw-justify-center sw-w-full sw-h-screen">
        <div className="sw-w-full md:sw-w-1/2"></div>
        <div className="sw-w-full md:sw-w-1/2">
          <SmallCard cl="md:sw-w-4/5 sw-mx-auto sw-mb-4" content="Truyền thông thương hiệu" icon="/assets/svg/brand-communication.svg"/>
          <SmallCard cl="md:sw-w-4/5 sw-mx-auto sw-mb-4" content="Xây dựng thương hiệu" icon="/assets/svg/branding.svg"/>
          <SmallCard cl="md:sw-w-4/5 sw-mx-auto sw-mb-4" content="Sản xuất" icon="/assets/svg/production.svg"/>
          <SmallCard cl="md:sw-w-4/5 sw-mx-auto sw-mb-4" content="Kết nối quốc tế" icon="/assets/svg/international-relations.svg"/>
          <SmallCard cl="md:sw-w-4/5 sw-mx-auto sw-mb-4" content="Tổ chức sự kiện" icon="/assets/svg/event.svg"/>
          </div>
          <ServiceGlow className="sw-absolute sw-h-screen sw-w-full xl:sw-w-auto sw-left-0"/>
      </section> */}

      {/* <section className="sw-absolute sw-top-0 sw-left-0 sw-w-full sw-h-screen"> */}
      {/* <div onClick={openModal}>Open menu</div>
        <div onClick={closeModal}>Close</div> */}

      {/* <Medium icon="/assets/svg/vision.svg" title="Hehe hehe" content="Là cầu nối truyền thông đặc biệt đưa Việt Nam đến gần thế giới"/>
        <Medium icon="/assets/svg/target.svg" title="Hehe hehe" content="Là cầu nối truyền thông đặc biệt đưa Việt Nam đến gần thế giới"/>
        <Medium icon="/assets/svg/business.svg" title="Hehe hehe" content="Là cầu nối truyền thông đặc biệt đưa Việt Nam đến gần thế giới"/> */}

      {/* <Image src="/assets/svg/partner.svg" width={800} height={800}/> */}

      {/* </section> */}
      <ProductSlider products={Products} />
      {/* <Menu /> */}
    </ReactScrollWheelHandler>
  );
};

export default HomePage;
