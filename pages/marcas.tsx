import Home_marcas from '@/components/Home_marcas';
import { getLayout } from '@/components/Layout';

export default function Marcas() {
  return (
    <>
      <Home_marcas />
    </>
  );
}

// Asigna la función getLayout a la página de inicio
Marcas.getLayout = getLayout;
