/** @jsx jsx */
import jsx from '../../jsx';
import { lazy } from 'react';
import Layout from './Layout';

const Content = lazy(() =>
  import('!babel-loader!mdx-loader!./CreateReactAppEnvVars.mdx')
);

function CreateReactAppEnvVars({ ...props }) {
  return (
    <Layout>
      <Content />
    </Layout>
  );
}

export default CreateReactAppEnvVars;
