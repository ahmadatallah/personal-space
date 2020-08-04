/** @jsx jsx */
import jsx from '../../jsx';
import { lazy } from 'react';
import Layout from './Layout';

const Content = lazy(() =>
  import('!babel-loader!mdx-loader!./DesertOctopus.mdx')
);

function DesertOctopus({ ...props }) {
  return (
    <Layout>
      <Content />
    </Layout>
  );
}

export default DesertOctopus;
