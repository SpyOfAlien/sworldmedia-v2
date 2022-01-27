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
    description
    title
    width
    height
  }
  vnContent: content(locale: "vi-VN") {
    json
  }
  enContent: content(locale: "en-US") {
    json
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

const POST_GRAPHQL_SINGLE_POST_FIELDS = `
  priority
  vnSlug: slug(locale: "vi-VN")
  enSlug: slug(locale: "en-US")
  vnTitle: title(locale: "vi-VN")
  enTitle: title(locale: "en-US")
  vnSummary: summary(locale: "vi-VN")
  enSummary: summary(locale: "en-US")
  coverImage {
    url
    description
    title
    width
    height
  }
  vnContent: content(locale: "vi-VN") {
    json
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
  enContent: content(locale: "en-US") {
    json
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

const PRODUCT_FIELD = `
  vnName: name(locale: "vi-VN")
  enName: name(locale: "en-US")
  vnSlug: slug(locale: "vi-VN")
  enSlug: slug(locale: "en-US")
  vnSummary: summary(locale: "vi-VN")
  enSummary: summary(locale: "en-US")
  thumbnail {
    url
    description
    title
    width
    height
  }
  link
  type
`;
const SERVICE_FIELD = `
  vnName: name(locale: "vi-VN")
  enName: name(locale: "en-US")
  vnSummary: summary(locale: "vi-VN")
  enSummary: summary(locale: "en-US")
  showcaseCollection {
    items {
      ...on Product {
        vnName: name(locale: "vi-VN")
        enName: name(locale: "en-US")
        vnSummary: summary(locale: "vi-VN")
        enSummary: summary(locale: "en-US")
        vnLink: link(locale: "vi-VN")
        enLink: link(locale: "en-US")
        thumbnail {
          url
          description
          title
          width
          height
        }
      }
    }
  }
  feedbackCollection {
    items {
      ...on Feedback {
        vnName: name(locale: "vi-VN")
        enName: name(locale: "en-US")
        vnMessage: message(locale: "vi-VN")
        enMessage: message(locale: "en-US")
        vnCompany: company(locale: "vi-VN")
        enCompany: company(locale: "en-US")
        avatar {
          url
          description
          title
          width
          height
        }
      }
    }
  }
  subServiceCollection {
    items {
      ...on SubService {
        vnName: name(locale: "vi-VN")
        enName: name(locale: "en-US")
        vnSummary: summary(locale: "vi-VN")
        enSummary: summary(locale: "en-US")
        icon {
          url
          description
          title
          width
          height
        }
      }
    }
  }
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
function extractServiceEntries(fetchResponse) {
  const service = fetchResponse?.data?.serviceCollection?.items[0];

  return {
    ...service,
    showcaseCollection: service?.showcaseCollection?.items,
    feedbackCollection: service?.feedbackCollection.items,
    subServiceCollection: service?.subServiceCollection.items,
  };
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
      postCollection(where: { slug_exists: true }, order: date_DESC, limit: 100) {
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
      }, limit: 100) {
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
          ${POST_GRAPHQL_SINGLE_POST_FIELDS}
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

// export async function getProductsByType(type) {
//   const entries = await fetchGraphQL(
//     `query {
//       productCollection(where: {type_contains_some: "${type}"}, preview: false
//       , limit: 100) {
//         items {
//           ${PRODUCT_FIELD}
//         }
//       }
//     }`,
//     false
//   );

//   return extractProductEntries(entries);
// }
export async function getServiceByName(name) {
  const entries = await fetchGraphQL(
    `query {
      serviceCollection(where: {name: "${name}"}, preview: false
      , limit: 1) {
        items {
          ${SERVICE_FIELD}
        }
      }
    }`,
    false
  );

  return extractServiceEntries(entries);
}
