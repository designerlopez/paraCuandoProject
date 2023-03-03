import Container from '@/components/Container';
import Home_page from '@/components/Home_page';
import { getLayout } from '@/components/Layout';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Home_page></Home_page>
      <Container />
    </div>
  );
}

// Asigna la función getLayout a la página de inicio
Home.getLayout = getLayout;
