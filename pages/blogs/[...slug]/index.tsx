import { useRouter } from 'next/router';
import Head from 'next/head';
import ErrorPage from 'next/error';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../../lib/api';
import { CMS_NAME } from '../../../lib/constants';
import { Container } from '../../../components/layout';
import Image from 'next/image';
import Tags from '../../../components/common/blog/tags/tags/tags';
import Heading from '../../../components/ui/typo/heading';
import PostContent from '../../../components/common/blog/post-content/post-content';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Post({ post, morePosts, preview, locale }) {
  const { coverImage, title, tags, slug, date, content } = post;
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Container>
      <div>Trở về tin tức</div>
      <div className="sw-relative">
        <div>
          <Image
            src={coverImage.url}
            layout="responsive"
            width={1500}
            height={783}
          />
        </div>
        <div className="sw-absolute sw-inset-0 sw-flex sw-justify-end sw-flex-col sw-px-12 sw-py-8">
          <Heading h="h3">{title}</Heading>
          <div className="sw-flex sw-justify-between sw-w-full">
            <div>
              {' '}
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="sw-mr-2 sw-text-paragraph sw-capitalize"
                >
                  {tag} {tags.length - 1 === idx ? '' : '|'}
                </span>
              ))}{' '}
            </div>
            <div className="sw-text-paragraph">{date}</div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <PostContent data={content} />
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps({ locales, params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
      ...(await serverSideTranslations(locales, ['common'])),
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  const vnPaths = allPosts.map(({ slug }) => `/en/blogs/${slug}`);
  const enPaths = allPosts.map(({ slug }) => `/vn/blogs/${slug}`);

  console.log('bao', [...vnPaths, ...enPaths]);

  return {
    paths: [...enPaths, ...vnPaths],
    fallback: true,
  };
}
