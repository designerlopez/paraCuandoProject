import Container from '@/components/containerCards';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Home_page from '@/components/Home';

export default function Home() {
  return (
    <>
      <Header></Header>
      <Home_page></Home_page>
      <Container />
      <Footer></Footer>
    </>
  );
}
