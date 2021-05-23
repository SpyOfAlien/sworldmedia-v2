import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getAllPostsForHome } from '../lib/api';
import { ParticlesLayout } from '../components/layout';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import { useSection } from '../lib/context/section-context';
import { useEffect } from 'react';
import { useViewportScroll } from 'framer-motion';
import SmallCard from '../components/ui/cards/small/small';
import ServiceGlow from '../components/glows/service-glow'
import { ServiceDetail } from '../components/common';
import Menu from '../components/common/menu/menu';

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

  const { scrollYProgress } = useViewportScroll();

  useEffect(() => {
    console.log('curr', currentSection);
    console.log('hehe', scrollYProgress);
  }, [currentSection]);

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
      <ParticlesLayout />
      {/* <section className="sw-absolute sw-top-0 sw-left-0 sw-flex sw-flex-col md:sw-flex-row sw-items-center sw-justify-center sw-w-full sw-h-screen">
        <div className="sw-w-full md:sw-w-1/2"></div>
        <div className="sw-w-full md:sw-w-1/2">
          <SmallCard cl="md:sw-w-4/5 sw-mx-auto" content="Truyền thông thương hiệu" icon="/assets/svg/brand-communication.svg"/>
          <SmallCard cl="md:sw-w-4/5 sw-mx-auto" content="Xây dựng thương hiệu" icon="/assets/svg/branding.svg"/>
          <SmallCard cl="md:sw-w-4/5 sw-mx-auto" content="Sản xuất" icon="/assets/svg/production.svg"/>
          <SmallCard cl="md:sw-w-4/5 sw-mx-auto" content="Kết nối quốc tế" icon="/assets/svg/international-relations.svg"/>
          <SmallCard cl="md:sw-w-4/5 sw-mx-auto" content="Tổ chức sự kiện" icon="/assets/svg/event.svg"/>
          </div>
          <ServiceGlow className="sw-absolute sw-h-screen sw-w-full xl:sw-w-auto sw-left-0"/>
      </section> */}

      <section className="sw-absolute sw-top-0 sw-left-0 sw-pt-xl sw-w-full sw-h-screen">
        {/* <ServiceDetail
          data={{
            icon: '/assets/svg/brand-communication.svg',
            name: 'Xây dựng thương hiệu',
            label: 'Xây dựng thương hiệu',
            content: 'S-World cung cấp giải pháp toàn diện cho thương hiệu khi tư vấn và xây dựng những yếu tố: Câu chuyện thương hiệu, slogan, định vị khách hàng và chiến lược phát triển, để doanh nghiệp đến gần hơn với khách hàng.',
            subService: [
              'Phát triển concept',
              'Thiết kế bộ nhận diện thương hiệu',
              'Chiến lược thương hiệu',
              'Chiến lược thương hiệu',
            ]
          }}
        /> */}
        <Menu />
      </section>
    </ReactScrollWheelHandler>
  );
};

export default HomePage;
