import Layout from '@/components/Layout';
import { NextPageWithLayout } from './page';

const artistas: NextPageWithLayout = () => {
  return <div>hola soy el about</div>;
};

export default artistas;

artistas.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
