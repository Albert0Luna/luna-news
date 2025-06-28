/* eslint-disable @next/next/no-img-element */

import { MDXRemote } from 'next-mdx-remote/rsc';
import React from 'react';
import { highlight } from 'sugar-high';
import remarkGfm from 'remark-gfm';

const components = {
  h1: (props: any) => <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100" {...props} />,
  h2: (props: any) => <h2 className="text-[28px] font-manrope mb-6 md:mb-8 my-10 text-gray-900 dark:text-gray-100" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-manrope mb-6 text-gray-900 dark:text-gray-100" {...props} />,
  h4: (props: any) => <h4 className="text-xl font-manrope mb-4 text-gray-900 dark:text-gray-100" {...props} />,
  h5: (props: any) => <h5 className="text-lg font-manrope mb-4 text-gray-900 dark:text-gray-100" {...props} />,
  h6: (props: any) => <h6 className="text-base font-manrope mb-4 text-gray-900 dark:text-gray-100" {...props} />,
  a: (props: any) => <a className='text-orange-400 dark:text-orange-300 hover:underline' {...props} referrerPolicy='no-referrer' target='_blank' />,
  img: (props: any) => <img className='w-full rounded-lg shadow-lg mb-4 md:mb-8' {...props} alt={props.alt || 'Image'} />,
  ul: (props: any) => <ul className='list-disc list-inside mb-6 text-gray-800 dark:text-gray-300' {...props} />,
  ol: (props: any) => <ol className='list-decimal list-inside mb-4 text-gray-800 dark:text-gray-300' {...props} />,
  li: (props: any) => <li className='mb-2' {...props} />,
  blockquote: (props: any) => <blockquote className='border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic text-gray-600 dark:text-gray-400 mb-4' {...props} />,
  p: (props: any) => <p className='text-base mb-6 text-gray-750 dark:text-gray-300 leading-7 md:leading-8 lg:text-lg' {...props} />,
  pre: (props: any) => <pre className='w-full p-2 bg-gray-100 border border-gray-300 my-6 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-x-auto' {...props} />,
  code: (props: any) => {
    const codeHTML = highlight(props.children);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} className='w-full overflow-x-auto' />;
  },
  div: (props: any) => <div className='w-full' {...props} />,
  table: (props: any) => <table className="w-full overflow-x-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-700 mb-6" {...props} />,
  thead: (props: any) => <thead className="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-300" {...props} />,
  tbody: (props: any) => <tbody className="bg-white text-gray-600 dark:bg-gray-800 dark:text-gray-400" {...props} />,
  th: (props: any) => <th className="px-6 py-3" {...props} />,
  td: (props: any) => <td className="px-6 py-4 border-b border-gray-300 dark:border-gray-700" {...props} />,
};


export default function Article ({article, locale}: {article: any, locale: string}) {
  return (
    <article className='text-gray-800 dark:text-gray-300 font-poppins-400 text-base tracking-normal max-w-4xl mx-auto'>
      <MDXRemote
        source={article.translations[locale].content}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          }
        }}
      />
    </article>
    
  );
}
