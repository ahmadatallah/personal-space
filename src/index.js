import React from 'react';
import { Helmet } from 'react-helmet';
import get from 'lodash.get';
import SEO from './components/seo';

import Layout from './layout';

const Page = props => {
  let title = 'Atallahsan';
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
    title = `${postTitle} | ${title}`;
  }

  return (
    <>
      <SEO title="Atallahsan" />
      <Helmet
        htmlAttributes={{
          lang: 'en-us',
        }}
      >
        <link
          rel="icon"
          type="image/png"
          href="https://atallahsan.cc/favicon.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          href="https://atallahsan.cc/avatar.png"
        />
        <link rel="canonical" href={props.location.href} />
        <meta name="twitter:site" content="@atallahsan" />
        <meta name="og:image" content="https://atallahsan.cc/avatar.png" />
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
