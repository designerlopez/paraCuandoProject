import Home from '@/pages';
import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Home />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

// Define la función getLayout para envolver el contenido de cada página en el componente Layout
export function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
}
