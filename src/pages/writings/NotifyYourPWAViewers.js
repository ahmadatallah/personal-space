/** @jsx jsx */
import jsx from '../../jsx';
import { lazy } from 'react';
import Layout from './Layout';

const Content = lazy(() =>
  import('!babel-loader!mdx-loader!./NotifyYourPWAViewers.mdx')
);

function NotifyYourPWAViewers({ ...props }) {
  return (
    <Layout>
      <Content />
    </Layout>
  );
}

export default NotifyYourPWAViewers;
