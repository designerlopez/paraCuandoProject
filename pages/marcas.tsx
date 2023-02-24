import Layout from '@/components/Layout';
import { NextPageWithLayout } from './page';

const marcas: NextPageWithLayout = () => {
  return <div>hola soy la pagina de marcas</div>;
};

export default marcas;

marcas.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
