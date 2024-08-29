import CoverPage from '@/src/home/components/CoverPage';
import Highlights from '@/src/home/components/Highlights';
import '@/src/home/styles/main.css';
import '@/src/layout/styles/Footer.css';

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: 'en' | 'es'
  }
}

export default function Page ({params: { locale }}: Readonly<RootLayoutProps>) {

  return (
    <main>
      <CoverPage />
      <Highlights lang={locale}/>
    </main>
  );
}