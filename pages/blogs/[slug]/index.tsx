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
import { ArticleJsonLd, BlogJsonLd } from 'next-seo';
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
    assets,
    vnSummary,
    enSummary,
  } = post;
  const router = useRouter();
  const isVN = router.locale === 'vn';
  const baseUrl = 'https://www.s-worldmedia.com';

  const formatedDate = format(new Date(date), 'LLLL d, yyyy');
  const formattedTitle = titleStyle(isVN ? vnTitle : enTitle);
  const imgUrls = assets?.links?.assets?.block?.map((img) => img.url);
  const { t } = useTranslation('common');

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  console.log('cover', `${baseUrl}${router.asPath}`);

  return (
    <MediaContextProvider>
      <Head>
        <title>{formattedTitle}</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        {enSummary && (
          <meta content={isVN ? vnSummary : enSummary} name="description" />
        )}
        {/* {keywords && <meta content={keywords} name="keywords" />} */}
        <meta content="follow, index" name="robots" />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta
          content="/favicons/browserconfig.xml"
          name="msapplication-config"
        />
        <link
          href="/favicons/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/favicons/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicons/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link href="/favicons/site.webmanifest" rel="manifest" />
        <link
          color="#5bbad5"
          href="/favicons/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        <link href="/favicons/favicon.ico" rel="shortcut icon" />

        {/* <script defer src="https://gumroad.com/js/gumroad.js" /> */}
        {baseUrl && (
          <link href={`${baseUrl}${router.asPath}`} rel="canonical" />
        )}
        {isVN ? (
          <meta content="vi_VN" property="og:locale" />
        ) : (
          <meta content="en_US" property="og:locale" />
        )}
        <meta content={formattedTitle} property="og:title" />
        <meta
          content={isVN ? vnSummary : enSummary}
          property="og:description"
        />
        <meta content={baseUrl} property="og:url" />
        {/* <meta content="5e41b2275db646a5" name="yandex-verification" /> */}
        <meta
          content="VedQ7X2rCk96g_FaXM-HEeZM2_fpvSuKj38NgEapuxw"
          name="google-site-verification"
        />
        {coverImage && (
          <>
            <meta content={coverImage.url} property="og:image" />
            <meta content={formattedTitle} property="og:image:alt" />
          </>
        )}
        {date && (
          <>
            <meta content="article" property="og:type" />
            <meta content={dateTime(date)} property="article:published_time" />
          </>
        )}
        <meta name="fb:status" content={isVN ? vnTitle : enTitle}></meta>
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@sworlmedia" name="twitter:site" />
        <meta content="@sworlmedia" name="twitter:creator" />
      </Head>
      <ArticleJsonLd
        url={`${baseUrl}${router.asPath}`}
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
                <p
                  style={{ width: '14px', height: '14px', marginBottom: '4px' }}
                >
                  <Image
                    src="/assets/svg/smallback.svg"
                    width={12}
                    height={12}
                    layout="responsive"
                  />
                </p>
                <p className="sw-ml-2">{t('blog__goback')}</p>
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
                {isVN
                  ? vnTags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="sw-mr-2 sw-text-paragraph sw-capitalize sw-cursor-pointer"
                      >
                        {tag} {vnTags.length - 1 === idx ? '' : '|'}
                      </span>
                    ))
                  : enTags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="sw-mr-2 sw-text-paragraph sw-capitalize sw-cursor-pointer"
                      >
                        {tag} {enTags.length - 1 === idx ? '' : '|'}
                      </span>
                    ))}
              </div>
              <div className="sw-text-paragraph">{formatedDate}</div>
            </div>
          </div>
        </div>
        <div className="sw-mt-12 xl:sw-mt-24 xl:sw-w-1/2 xl:sw-mx-auto">
          <PostContent data={isVN ? vnContent : enContent} assets={assets} />
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
