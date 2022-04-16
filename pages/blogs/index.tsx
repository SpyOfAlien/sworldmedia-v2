import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import PostCard from '../../components/common/blog/card/post-card';
import HeroBanner from '../../components/common/blog/hero-banner/hero-banner';
import PostList from '../../components/common/blog/post-list/post-list';
import Tags from '../../components/common/blog/tags/tags/tags';
import { Container } from '../../components/layout';
import { getAllPostsForHome } from '../../lib/api';
import { Media, MediaContextProvider } from '../../lib/media';
import { useTranslation } from 'next-i18next';
import Pagination from '../../components/layout/pagination';
import { useWindowSize } from '../../lib/hook';
import Image from 'next/image';

export const getStaticProps = async ({ locale, preview }) => {
  const allPosts = (await getAllPostsForHome(preview)) || [];

  return {
    props: {
      posts: allPosts,
      ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: 10,
  };
};

const BlogsPage = ({ locales, posts }) => {
  const [showPosts, setShowPosts] = useState([]);
  const { t } = useTranslation('common');

  const [activePage, setActivePage] = useState(1);

  const router = useRouter();
  const isVn = router.locale === 'vn';

  const tags = [
    'Truyền thông thương hiệu',
    'Xây dựng thương hiệu',
    'Sản xuất',
    'Tổ chức sự kiện',
    'Kết nối quốc tế',
  ];

  useEffect(() => {
    setShowPosts(posts.slice((activePage - 1) * 9, (activePage - 1) * 9 + 9));
  }, [activePage]);

  useEffect(() => {
    setShowPosts(posts.slice(0, 9));
  }, []);

  // const getAll = async () => {
  //   const allPosts = (await getAllPostsForHome(false)) || [];

  //   console.log('alll', allPosts);
  // };

  const setPage = (page) => {
    page !== activePage && setActivePage(page);
  };

  const { width } = useWindowSize();
  return (
    <MediaContextProvider>
      <NextSeo
        title={isVn ? 'Tin tức' : 'Blogs'}
        description={
          isVn
            ? 'Sworld mang những thông tin kinh doanh và truyền thông đến thế giới'
            : 'Sworld delivers business and media news to the world'
        }
        canonical="https://www.s-worldmedia.com/blogs"
        openGraph={{
          type: 'website',
          url: 'https://www.s-worldmedia.com/blogs',
          title: isVn ? 'Tin tức' : 'Blogs',
          description: isVn
            ? 'Sworld mang những thông tin kinh doanh và truyền thông đến thế giới'
            : 'Sworld delivers business and media news to the world',
        }}
      />
      <div className="sw-w-full sw-mt-header">
        <HeroBanner />
      </div>

      <div className="sw-relative">
        <div
          className="sw-absolute sw-w-full"
          style={{
            left: 0,
            bottom: width > 1024 ? '-30%' : '10%',
            opacity: 0.8,
            transform: 'rotate(180deg)',
          }}
        >
          <Image
            src="/assets/images/defs/comdefglow.png"
            layout="responsive"
            width={1263}
            height={1213}
          />
        </div>
        <div
          className="sw-absolute sw-w-full"
          style={{ bottom: width > 1024 ? '20%' : '10%', opacity: 0.8 }}
        >
          <Image
            src="/assets/images/defs/comdefglow.png"
            layout="responsive"
            width={1263}
            height={1213}
          />
        </div>
        <Container cl="sw-h-full ">
          <div className="sw-flex sw-justify-center sw-my-16">
            <Tags tags={tags} />
          </div>
          <div></div>
          <div>
            <Container>
              {/* {priorityPost && (
              <Media lessThan="sm">
                <PostCard cl="sw-mb-16" type="small" post={priorityPost} />
              </Media>
            )}

            {priorityPost && (
              <Media greaterThanOrEqual="sm">
                <PostCard cl="sw-mb-16" type="big" post={priorityPost} />
              </Media>
            )} */}

              <PostList posts={showPosts} />

              <Pagination
                pageCount={Math.round(posts.length / 9)}
                setPage={(page) => setPage(page)}
                activePage={activePage}
              />
            </Container>
          </div>
        </Container>
      </div>
    </MediaContextProvider>
  );
};

export default BlogsPage;
