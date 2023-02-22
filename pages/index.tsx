import Container from '@/components/containerCards';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Home_page from '@/components/Home';
import { getLayout } from '@/components/Layout';

export default function Home() {
  return (
    <>
      <Header />
      <Home_page></Home_page>
      <Container />
      <Footer />
    </>
  );
}

// Asigna la función getLayout a la página de inicio
Home.getLayout = getLayout;
