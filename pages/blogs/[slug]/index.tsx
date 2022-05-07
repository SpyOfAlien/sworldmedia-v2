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
import { useTranslation } from 'react-i18next';
import { ArticleJsonLd, BlogJsonLd, NextSeo } from 'next-seo';
import titleStyle from '../../../lib/utils/title-style';
import { dateTime } from '../../../lib/utils/date-format';
import PostList from '../../../components/common/blog/post-list/post-list';
import { useWindowSize } from '../../../lib/hook';

const Post = ({ post, morePosts, preview, locale }) => {
  const {
    vnTitle,
    enTitle,
    coverImage,
    vnContent,
    enContent,
    date,
    enTags,
    vnTags,
    vnSummary,
    enSummary,
  } = post;
  const router = useRouter();
  const isVN = router.locale === 'vn';
  const baseUrl = 'https://www.s-worldmedia.com';

  const formatedDate = format(new Date(date), 'LLLL d, yyyy');
  const formattedTitle = titleStyle(isVN ? vnTitle : enTitle);
  const imgUrls = isVN
    ? vnContent?.links?.assets?.block?.map((img) => img.url)
    : enContent?.links?.assets?.block?.map((img) => img.url);
  const { t } = useTranslation('common');

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  const { width } = useWindowSize();

  return (
    <MediaContextProvider>
      <NextSeo
        title={isVN ? vnTitle : enTitle}
        description={isVN ? vnSummary : enSummary}
        canonical={`${baseUrl}${isVN && '/vn'}${router.asPath}`}
        openGraph={{
          type: 'article',
          images: [
            {
              url: coverImage.url,
              alt: isVN ? vnTitle : enTitle,
              width: coverImage.width,
              height: coverImage.height,
            },
          ],
          locale: router.locale,
          url: `${baseUrl}${isVN && '/vn'}${router.asPath}`,
          article: {
            publishedTime: date,
            modifiedTime: date,
            authors: ['Sworlmedia'],
            tags: router.locale === 'vn' ? vnTags : enTags,
          },
        }}
        additionalMetaTags={[
          {
            property: 'keywords',
            content: router.locale === 'vn' ? vnTags : enTags,
          },
        ]}
      />

      <ArticleJsonLd
        url={`${baseUrl}${isVN && '/vn'}${router.asPath}`}
        title={isVN ? vnTitle : enTitle}
        images={imgUrls}
        datePublished={date}
        dateModified={date}
        authorName="S-worldmedia"
        publisherName="S-worldmedia"
        publisherLogo="https://www.s-worldmedia.com/assets/images/others/logo.png"
        description={isVN ? vnSummary : enSummary}
      />
      <div className="sw-relative">
        <Media greaterThanOrEqual="md">
          <div
            className="sw-absolute sw-w-full"
            style={{
              left: 0,
              top: width > 1024 ? '-10%' : '10%',
              opacity: 0.8,
              transform: 'rotate(180deg)',
              zIndex: -100,
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
            style={{
              bottom: width > 1024 ? '-20%' : '10%',
              opacity: 0.8,
              zIndex: -100,
            }}
          >
            <Image
              src="/assets/images/defs/comdefglow.png"
              layout="responsive"
              width={1263}
              height={1213}
            />
          </div>
        </Media>

        <Container cl="sw-my-header">
          <div className="sw-py-4">
            <Link href="/blogs">
              <a>
                <div className="sw-cursor-pointer sw-flex sw-items-center sw-text-paragraph sw-w-28">
                  <span
                    style={{
                      width: '14px',
                      height: '14px',
                      marginBottom: '4px',
                    }}
                  >
                    <Image
                      src="/assets/svg/smallback.svg"
                      width={12}
                      height={12}
                      layout="responsive"
                    />
                  </span>
                  <span className="sw-ml-2">{t('blog__goback')}</span>
                </div>
              </a>
            </Link>
          </div>
          <div className="sw-relative">
            <div className="sw-relative">
              <Image
                src={coverImage.url}
                layout="responsive"
                width={coverImage.width}
                height={coverImage.height}
                className="sw-rounded-xl"
              />
              <div className="sw-absolute sw-inset-0 sw-bg-hero"></div>
            </div>
            <div className="sw-flex sw-justify-end sw-mt-12 xl:sw-mt-0  sw-flex-col xl:sw-px-12 xl:sw-py-8 sw-z-10">
              <Media greaterThanOrEqual="lg">
                <h1 className="sw-text-center sw-text-white sw-text-h4 sw-font-bold sw-gilroy">
                  {isVN ? vnTitle : enTitle}
                </h1>
              </Media>
              <Media between={['sm', 'lg']}>
                <h1 className="sw-text-center sw-text-white sw-text-h5 sw-font-bold sw-gilroy">
                  {isVN ? vnTitle : enTitle}
                </h1>
              </Media>
              <Media lessThan="sm">
                <h1 className="sw-text-center sw-text-white sw-text-h6 sw-font-bold sw-gilroy">
                  {isVN ? vnTitle : enTitle}
                </h1>
              </Media>
            </div>
          </div>
          <div className="sw-mt-12 xl:sw-w-1/2 xl:sw-mx-auto">
            <PostContent
              data={isVN ? vnContent : enContent}
              assets={isVN ? vnContent.links : enContent.links}
            />
          </div>
          <div className="sw-mt-24">
            <Heading cl="sw-text-center sw-mb-12" h="h3" gradient={true}>
              {t('blog__related-posts')}
            </Heading>
            <PostList posts={morePosts} />
          </div>
        </Container>
      </div>
    </MediaContextProvider>
  );
};

export default Post;

export async function getStaticProps({ locale, params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview, locale);

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
      ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: 10,
  };
}

export async function getStaticPaths({ locale }) {
  const allPosts = await getAllPostsWithSlug();
  const paths = [];

  allPosts.map(({ vnSlug, enSlug }) => {
    paths.push({ params: { slug: vnSlug }, locale: 'vn' });
    paths.push({ params: { slug: enSlug }, locale: 'en' });
  });

  return {
    paths: paths,
    fallback: false,
  };
}
