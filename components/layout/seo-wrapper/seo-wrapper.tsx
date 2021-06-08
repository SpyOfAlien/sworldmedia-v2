import Head from 'next/head';
import { withRouter } from 'next/router';
import React from 'react';
import { ArticleJsonLd } from 'next-seo';

import { dateTime } from '../../../lib/utils/date-format';
import titleStyle from '../../../lib/utils/title-style';

const SEOWrapper = ({
  children,
  date,
  description,
  image,
  title = 'sworldmedia',
  keywords,
  router,
}) => {
  const domain = 'https://s-worldmedia.com';
  const formattedTitle = titleStyle(title);
  const url = router && router.asPath ? router.asPath : undefined;
  const canonical = url && url === '/' ? domain : domain + url;
  const featuredImage = domain + image;

  return (
    <>
      <Head>
        <title>{formattedTitle}</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        {description && <meta content={description} name="description" />}
        {keywords && <meta content={keywords} name="keywords" />}
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
        {url && <link href={canonical} rel="canonical" />}
        <meta content="en_US" property="og:locale" />
        <meta content="vi_VN" property="og:locale" />
        <meta content={formattedTitle} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={canonical} property="og:url" />
        {/* <meta content="5e41b2275db646a5" name="yandex-verification" /> */}
        <meta
          content="VedQ7X2rCk96g_FaXM-HEeZM2_fpvSuKj38NgEapuxw"
          name="google-site-verification"
        />
        {featuredImage && (
          <>
            <meta content={featuredImage} property="og:image" />
            <meta content={description} property="og:image:alt" />
          </>
        )}
        {date && (
          <>
            <meta content="article" property="og:type" />
            <meta content={dateTime(date)} property="article:published_time" />
          </>
        )}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@sworlmedia" name="twitter:site" />
        <meta content="@sworlmedia" name="twitter:creator" />
      </Head>
      {children}
      {date && (
        <ArticleJsonLd
          authorName="Sworld Media"
          dateModified={dateTime(date)}
          datePublished={dateTime(date)}
          description={description}
          images={[featuredImage]}
          publisherLogo="https://s-worldmedia.com/favicons/android-chrome-192x192.png"
          publisherName="Công ty truyền thông đa phương tiện Sworld media"
          title={formattedTitle}
          url={canonical}
        />
      )}
    </>
  );
};

export default withRouter(SEOWrapper);
