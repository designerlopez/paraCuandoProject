import Layout from '@/components/Layout';
import { NextPageWithLayout } from './page';

const profile: NextPageWithLayout = () => {
  return <div>hola soy el about</div>;
};

export default profile;

profile.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
