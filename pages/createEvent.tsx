import Layout from '@/components/Layout';
import { NextPageWithLayout } from './page';

const createEvent: NextPageWithLayout = () => {
  return <div>hola soy el about</div>;
};

export default createEvent;

createEvent.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
