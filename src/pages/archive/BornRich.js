/** @jsx jsx */
import jsx from '../../jsx';
import { lazy } from 'react';
import { useThemeUI } from 'theme-ui';
import Layout from './Layout';
import { Div } from '../../elements';

const Content = lazy(() => import('!babel-loader!mdx-loader!./BornRich.mdx'));

function BornRich({ ...props }) {
  const { theme } = useThemeUI();
  return (
    <Layout>
      <Div dir="rtl" fontFamily={theme.typefaces.helvetica}>
        <Content />
      </Div>
    </Layout>
  );
}

export default BornRich;
