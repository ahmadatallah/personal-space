import React from 'react';
import { Helmet } from 'react-helmet';
import get from 'lodash.get';
import SEO from './components/seo';

import Layout from './layout';

const Page = (props) => {
  let title = 'Home';
  const postTitle = get(
    props.data,
    'post.title',
    get(props, 'pageContext.frontmatter.title')
  );
  const description =
    get(
      props.data,
      'post.excerpt',
      get(props, 'pageContext.frontmatter.excerpt')
    ) || 'Personal space | Ahmad Atallah';

  if (postTitle) {
    title = postTitle;
  }

  return (
    <>
      <SEO title="Home" />
      <Helmet
        htmlAttributes={{
          lang: 'en-us',
        }}
      >
        <link
          rel="apple-touch-icon-precomposed"
          href="https://atallahsan.cc/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://atallahsan.cc/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://atallahsan.cc/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://atallahsan.cc/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="https://atallahsan.cc/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="canonical" href={props.location.href} />
        <link rel="manifest" href="https://atallahsan.cc/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:image" content="https://atallahsan.cc/avatar.jpg" />
        <meta name="twitter:site" content="@atallahsan" />
        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content="Ahmad Atallah" />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <Layout {...props}>{props.children}</Layout>
    </>
  );
};

export const wrapPageElement = ({ element, props }) => (
  <Page {...props}>{element}</Page>
);
