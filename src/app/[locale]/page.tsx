import CoverPage from '@/src/home/components/CoverPage';
import Highlights from '@/src/home/components/Highlights';
import '@/src/home/styles/main.css';
import '@/src/layout/styles/Footer.css';

export default function Page ({params}: {params: {locale: string}}) {
  return (
    <main>
      <CoverPage />
      <Highlights lang={params.locale}/>
    </main>
  );
}