import Layout from '@/components/Layout';
import { NextPageWithLayout } from './page';

const profile: NextPageWithLayout = () => {
  return <div>hola soy el Profile</div>;
};

export default profile;

profile.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
