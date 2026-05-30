/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
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
      <SEO title={title} description={description} />
      <Layout {...props}>{props.children}</Layout>
    </>
  );
};

export const wrapPageElement = ({ element, props }) => (
  <Page {...props}>{element}</Page>
);
