const POST_GRAPHQL_FIELDS = `
  priority
  vnSlug: slug(locale: "vi-VN")
  enSlug: slug(locale: "en-US")
  vnTitle: title(locale: "vi-VN")
  enTitle: title(locale: "en-US")
  vnSummary: summary(locale: "vi-VN")
  enSummary: summary(locale: "en-US")
  coverImage {
    url
  }
  vnContent: content(locale: "vi-VN") {
    json
  }
  enContent: content(locale: "en-US") {
    json
  }
  assets: content(locale: "en-US") {
    links {
      assets {
        block {
          url
          width
          height
          title
          description
          sys {
            id
          }
        }
      }
    }
  }
  date
  author {
    ... on Author {
      name
      avatar {
        url
      }
    }
  }
  enTags: tags(locale: "en-US")
  vnTags: tags(locale: "vi-VN")
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

function extractPost(fetchResponse) {
  return fetchResponse?.data?.postCollection?.items?.[0];
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.postCollection?.items;
}

export async function getPreviewPostBySlug(slug) {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  );

  return extractPost(entry);
}

export async function getAllPostsWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_exists: true }, order: date_DESC, limit: 10) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractPostEntries(entries);
}

export async function getAllPostsForHome(preview) {
  const entries = await fetchGraphQL(
    `query {
      postCollection(order: date_DESC, preview: ${
        preview ? 'true' : 'false'
      }, limit: 10) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );

  return extractPostEntries(entries);
}

export async function getPostAndMorePosts(slug, preview, locale) {
  const currentLocale = locale === 'vn' ? 'vi-VN' : 'en-US';

  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: ${
      preview ? 'true' : 'false'
    }, limit: 1, locale: "${currentLocale}") {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );

  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
      preview ? 'true' : 'false'
    }, limit: 2) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );

  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries),
  };
}
