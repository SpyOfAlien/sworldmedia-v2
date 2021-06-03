import { BlockList } from 'net';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC } from 'react';
import PostCard from '../../components/common/blog/card/post-card';
import HeroBanner from '../../components/common/blog/hero-banner/hero-banner';
import PostList from '../../components/common/blog/post-list/post-list';
import Tags from '../../components/common/blog/tags/tags/tags';
import { Container } from '../../components/layout';
import { getAllPostsForHome } from '../../lib/api';
import { useMediaQuery } from 'react-responsive';

export const getStaticProps = async ({ locale, preview }) => {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  return {
    props: {
      allPosts,
      ...(await serverSideTranslations(locale, ['common', 'blog'])),
    },
  };
};

const BlogsPage = ({ allPosts }) => {
  const mediumScreen = useMediaQuery({
    query: '(min-device-width: 768px)',
  });
  const tags = [
    'Truyền thông thương hiệu',
    'Xây dựng thương hiệu',
    'Sản xuất',
    'Tổ chức sự kiện',
    'Kết nối quốc tế',
  ];

  const listPost = allPosts.slice(1);

  return (
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
          {mediumScreen ? (
            <PostCard cl="sw-mb-16" type="big" post={allPosts[0]} />
          ) : (
            <PostCard cl="sw-mb-16" type="small" post={allPosts[0]} />
          )}
          <PostList posts={listPost} />
        </Container>
      </div>
    </Container>
  );
};

export default BlogsPage;
