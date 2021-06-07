import { BlockList } from 'net';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
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

  const tags = [
    'Truyền thông thương hiệu',
    'Xây dựng thương hiệu',
    'Sản xuất',
    'Tổ chức sự kiện',
    'Kết nối quốc tế',
  ];

  return (
    <MediaContextProvider>
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
