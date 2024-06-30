import CoverPage from '@/src/home/components/CoverPage';
import Highlights from '@/src/home/components/Highlights';
import '@/src/home/styles/main.css';
import '@/src/layout/styles/Footer.css';

export default function Page () {
  return (
    <main>
      <CoverPage />
      <Highlights />
    </main>
  );
}