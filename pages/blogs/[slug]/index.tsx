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

  return (
    <MediaContextProvider>
      <NextSeo
        title={formattedTitle}
        description={isVN ? vnSummary : enSummary}
        canonical={`${baseUrl}${isVN && '/vn'}${router.asPath}`}
        openGraph={{
          type: 'article',
          images: [
            {
              url: coverImage.url,
              alt: formattedTitle,
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
      <Container cl="sw-my-header">
        <div className="sw-py-4">
          <Link href="/blogs">
            <a>
              <div className="sw-cursor-pointer sw-flex sw-items-center sw-text-paragraph sw-w-28">
                <span
                  style={{ width: '14px', height: '14px', marginBottom: '4px' }}
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
              width={1500}
              height={783}
              className="sw-rounded-xl"
            />
            <div className="sw-absolute sw-inset-0 sw-bg-hero"></div>
          </div>
          <div className="xl:sw-absolute xl:sw-inset-0 sw-flex sw-justify-end sw-mt-12 xl:sw-mt-0  sw-flex-col xl:sw-px-12 xl:sw-py-8 sw-z-10">
            <Media greaterThanOrEqual="lg">
              <Heading h="h3">{isVN ? vnTitle : enTitle}</Heading>
            </Media>
            <Media between={['sm', 'lg']}>
              <Heading h="h4">{isVN ? vnTitle : enTitle}</Heading>
            </Media>
            <Media lessThan="sm">
              <Heading h="h5">{isVN ? vnTitle : enTitle}</Heading>
            </Media>
            <div className="sw-flex sw-justify-between sw-w-full">
              <div>
                {isVN && vnTags
                  ? vnTags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="sw-mr-2 sw-text-paragraph sw-capitalize sw-cursor-pointer"
                      >
                        {tag} {vnTags.length - 1 === idx ? '' : '|'}
                      </span>
                    ))
                  : enTags
                  ? enTags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="sw-mr-2 sw-text-paragraph sw-capitalize sw-cursor-pointer"
                      >
                        {tag} {enTags.length - 1 === idx ? '' : '|'}
                      </span>
                    ))
                  : null}
              </div>
              <div className="sw-text-paragraph">{formatedDate}</div>
            </div>
          </div>
        </div>
        <div className="sw-mt-12 xl:sw-mt-24 xl:sw-w-1/2 xl:sw-mx-auto">
          <PostContent
            data={isVN ? vnContent : enContent}
            assets={isVN ? vnContent.links : enContent.links}
          />
        </div>
      </Container>
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
