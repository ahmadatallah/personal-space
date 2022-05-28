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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Reem+Kufi&display=swap"
        rel="stylesheet"
      />

      <Layout {...props}>{props.children}</Layout>
    </>
  );
};

export const wrapPageElement = ({ element, props }) => (
  <Page {...props}>{element}</Page>
);
