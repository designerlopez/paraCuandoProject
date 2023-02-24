import Container from '@/components/Container';
import Home_page from '@/components/Home_page';
import { getLayout } from '@/components/Layout';

export default function Home() {
  return (
    <>
      <Home_page></Home_page>
      <Container />
    </>
  );
}

// Asigna la función getLayout a la página de inicio
Home.getLayout = getLayout;
