import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getAllPostsForHome } from '../lib/api';
import { ParticlesLayout } from '../components/layout';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import { useSection } from '../lib/context/section-context';
import { useEffect } from 'react';
import { useViewportScroll } from 'framer-motion';

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
    </ReactScrollWheelHandler>
  );
};

export default HomePage;
