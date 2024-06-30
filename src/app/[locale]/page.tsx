import '@/src/app/ui/styles/Home/main.css'
import '@/src/app/ui/styles/Home/Footer.css'
import CoverPage from '../ui/components/CoverPage'
import Highlights from '../ui/components/Highlights'




export default function Page() {
  return (
    <main>
      <CoverPage />
      <Highlights />
    </main>
  )
}