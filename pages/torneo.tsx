import Layout from '@/components/Layout';
import { NextPageWithLayout } from './page';

const torneo: NextPageWithLayout = () => {
  return <div>hola soy el about</div>;
};

export default torneo;

torneo.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
