import Layout from '@/components/Layout';
import { NextPageWithLayout } from './page';

const details: NextPageWithLayout = () => {
  return <div>hola soy el about</div>;
};

export default details;

details.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
