import Layout from '@/components/Layout';
import { NextPageWithLayout } from './page';

const about: NextPageWithLayout = () => {
  return <div>hola soy el about</div>;
};

export default about;

about.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
