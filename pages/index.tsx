import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Container } from '../components/layout';
import { useSection } from '../lib/context/section-context';
import { useEffect, useState } from 'react';
import aboutUsList from '../lib/data/about-us';
import { useTranslation } from 'react-i18next';
import { MediaContextProvider } from '../lib/media';
import VideoBackground from '../components/common/video/video-background';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import HomeComDef from '../components/partials/home/home-comdef';
import HomeServices from '../components/partials/home/home-services';
import HomeClients from '../components/partials/home/home-client';
import HomeProject from '../components/partials/home/home-project';
import HomeAbout from '../components/partials/home/home-about';
import HomePartner from '../components/partials/home/home-partner';
import Image from 'next/image';
import { getAllPostsForHome } from '../lib/api';

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

  useEffect(() => {
    getPost();
  }, []);
  const getPost = async () => {
    const allPosts = (await getAllPostsForHome(false)) || [];
  };

  const { t } = useTranslation('common');

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
      <VideoBackground />
      <HomeComDef />
      <HomeServices />
      <HomePartner />
      <HomeClients />
      <section className="sw-relative">
        <HomeProject />
        <HomeAbout />
        <div className="sw-absolute sw-inset-0">
          <div></div>
          <div className="sw-w-full">
            <Image
              src="/assets/images/others/starmap.png"
              width={1918}
              height={3087}
              layout="responsive"
            />
          </div>
        </div>
      </section>
    </MediaContextProvider>
  );
};

export default HomePage;
