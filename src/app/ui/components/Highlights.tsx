
import '@/src/app/ui/styles/Home/Highlights.css'
import RenderNews from '@/src/app/ui/components/RenderNews'
import { Suspense } from 'react'
import { useTranslations } from 'next-intl'; 

const HighlightSkeleton = () => {
  return (
    <div className="skeleton">
      <div className="skeleton__title">Cargando... </div>
      <div className="skeleton__content"></div>
    </div>
  )

}

export default function Highlights() {
  const t = useTranslations('Coverpage')
  return (
    <article className='highlight'>
      <h4 className='highlight_name'>{t("highlight.p1")} <span>{t("highlight.p2")}</span> {t("highlight.p3")}</h4>
      <Suspense fallback={<HighlightSkeleton />}>
        <RenderNews />
      </Suspense>
    </article>
  )
}
