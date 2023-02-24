import Layout from '@/components/Layout';
import { NextPageWithLayout } from './page';

const login: NextPageWithLayout = () => {
  return <div>hola soy el login pinche</div>;
};

export default login;

login.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
