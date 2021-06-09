import { BlockList } from 'net';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
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

export const getStaticProps = async ({ locale, preview }) => {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  const locales = await serverSideTranslations(locale, ['common']);

  return {
    props: {
      posts: allPosts,
      locale: locales,
    },
  };
};

const BlogsPage = ({ posts }) => {
  const priorityPost = posts.find((item) => item.priority === true);
  const otherPosts = posts.filter((item) => item.priority === false);

  const router = useRouter();
  const isVn = router.locale === 'vn';

  const tags = [
    'Truyền thông thương hiệu',
    'Xây dựng thương hiệu',
    'Sản xuất',
    'Tổ chức sự kiện',
    'Kết nối quốc tế',
  ];

  return (
    <MediaContextProvider>
      <Head>
        <title>{isVn ? 'Tin tức' : 'Blogs'}</title>
        <link rel="canonical" href="https://www.s-worldmedia.com/blogs" />
        <meta
          name="description"
          content={
            isVn
              ? 'Sworld mang những thông tin kinh doanh và truyền thông đến thế giới'
              : 'Sworld delivers business and media news to the world'
          }
        />
        <meta name="homepage" content="false" />
        <meta name="referrer" content="unsafe-url" />
        <meta name="referrer" content="always" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={
            isVn
              ? 'Sworld mang những thông tin kinh doanh và truyền thông đến thế giới'
              : 'Sworld delivers business and media news to the world'
          }
        />
        <meta property="og:title" content="Blogs - Sworldmedia" />
        <meta property="og:url" content="https://www.s-worldmedia.com/blogs" />
        <meta
          name="twitter:description"
          content={
            isVn
              ? 'Sworld mang những thông tin kinh doanh và truyền thông đến thế giới'
              : 'Sworld delivers business and media news to the world'
          }
        />
        <meta name="twitter:title" content="Blogs - Sworldmedia" />
      </Head>

      <Container cl="sw-h-full sw-mt-xl">
        <div className="sw-w-full">
          <HeroBanner />
        </div>
        <div className="sw-flex sw-justify-center sw-my-16">
          <Tags tags={tags} />
        </div>
        <div></div>
        <div>
          <Container>
            <Media lessThan="sm">
              <PostCard cl="sw-mb-16" type="small" post={priorityPost} />
            </Media>
            <Media greaterThanOrEqual="sm">
              <PostCard cl="sw-mb-16" type="big" post={priorityPost} />
            </Media>
            {otherPosts && <PostList posts={otherPosts} />}
          </Container>
        </div>
      </Container>
    </MediaContextProvider>
  );
};

export default BlogsPage;
