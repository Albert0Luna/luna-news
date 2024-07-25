import RenderSection from '@/src/sections/components/RenderSection';
import '@/src/sections/styles/Section.css';
import { useTranslations } from 'next-intl';
import React from 'react';
import '@/src/sections/styles/Section.css';

function Page ({params}: {params: {id: string}}) {

  const t = useTranslations('Coverpage');

  const sections = [
    {path: 'latest', title: t('sections.Latest')},
    {path: 'toturials', title: t('sections.Toturials')},
    {path: 'pcs-and-laptops', title: t('sections.Pc\'s-&-Laptops')},
    {path: 'mobiles-and-tablets', title: t('sections.Mobiles-&-Tablets')},
    {path: 'gaming', title: t('sections.Gaming')},
    {path: 'reviews', title: t('sections.Reviews')},
    {path: 'programming', title: t('sections.Programming')},
    {path: 'ai', title: t('sections.AI')},
  ];

  const section = sections.find((section) => section.path === params.id);

  return (
    <main>
      <h1 className='title_section'>
        {section?.title}
      </h1>
      <hr className='section_divisor'/>
      <RenderSection />
    </main>
  );
}

export default Page;