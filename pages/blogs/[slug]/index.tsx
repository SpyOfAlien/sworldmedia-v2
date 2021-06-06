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
import Link from 'next/link';
import { Media, MediaContextProvider } from '../../../lib/media';
import { format } from 'date-fns';

export default function Post({ post, morePosts, preview, locale }) {
  const { coverImage, title, tags, slug, date, content } = post;
  const router = useRouter();
  const formatedDate = format(new Date(date), 'LLLL d, yyyy');

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <MediaContextProvider>
      <Container cl="sw-my-header">
        <div className="sw-py-8">
          <Link href="/blogs">
            <a>
              <div className="sw-cursor-pointer sw-flex sw-text-paragraph sw-w-32">
                <p>
                  <Image
                    src="/assets/svg/smallback.svg"
                    width={12}
                    height={12}
                  />
                </p>
                <p className="sw-ml-2">Trở về tin tức</p>
              </div>
            </a>
          </Link>
        </div>
        <div className="sw-relative">
          <div className="sw-relative">
            <Image
              src={coverImage.url}
              layout="responsive"
              width={1500}
              height={783}
            />
            <div className="sw-absolute sw-inset-0 sw-bg-hero"></div>
          </div>
          <div className="xl:sw-absolute xl:sw-inset-0 sw-flex sw-justify-end sw-mt-12 xl:sw-mt-0  sw-flex-col xl:sw-px-12 xl:sw-py-8 sw-z-10">
            <Heading h="h3">{title}</Heading>
            <div className="sw-flex sw-justify-between sw-w-full">
              <div>
                {tags
                  ? tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="sw-mr-2 sw-text-paragraph sw-capitalize sw-cursor-pointer"
                      >
                        {tag} {tags.length - 1 === idx ? '' : '|'}
                      </span>
                    ))
                  : null}
              </div>
              <div className="sw-text-paragraph">{formatedDate}</div>
            </div>
          </div>
        </div>
        <div className="sw-mt-12 xl:sw-mt-24 xl:sw-w-1/2 xl:sw-mx-auto">
          <PostContent data={content} />
        </div>
      </Container>
    </MediaContextProvider>
  );
}

export async function getStaticProps({ locale, params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
      ...(await serverSideTranslations(locale, ['common', 'blog'])),
    },
  };
}

export async function getStaticPaths({ locales }) {
  const allPosts = await getAllPostsWithSlug();
  const paths = [];
  allPosts.map(({ slug }) => {
    for (const item of locales) {
      paths.push({ params: { slug: slug }, locale: item });
    }
  });

  return {
    paths: paths,
    fallback: false,
  };
}
