import CoverPage from '@/src/home/components/CoverPage';
import Highlights from '@/src/home/components/Highlights';
import '@/src/home/styles/main.css';
import '@/src/layout/styles/Footer.css';
import Adsense from '@/src/rootComponents.tsx/components/Adsense';

export default function Page () {
  return (
    <main>
      <Adsense />
      <CoverPage />
      <Highlights />
    </main>
  );
}