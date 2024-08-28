'use client';

import React from 'react';
import '@/src/sections/styles/Pagination.css';

import { FC } from 'react';
import { useRouter } from '@/src/navigation';
import clsx from 'clsx';
import BackArrow from '@/src/icons/ui-icons/BackArrow';
import NextArrow from '@/src/icons/ui-icons/NextArrow';

interface PaginationControlsProps {
  section: string | undefined
  page: string | undefined
  allNews: number
}

export const Pagination: FC<PaginationControlsProps> = (
  {
    section,
    page,
    allNews
  }
) => {
  const router = useRouter();

  let totalPages;
  
  if (allNews % 6 === 0) {
    totalPages = Math.floor(allNews / 6);
  } else {
    totalPages = Math.floor(allNews / 6) + 1;
  }

  return (
    <div className='pagination_container'>
      <button
        className='pagination_move_button'
        disabled={Number(page) <= 1}
        onClick={() => {
          router.push(`/sections/${section}/${Number(page) - 1}`);
        }}>
        <BackArrow />
      </button>

      <div className='pagination_pages_container'>
        {
          Array.from({ length: totalPages }, (_, i) => i + 1).map((i) => (
            <button className={
              clsx(
                Number(page) === i 
                  ? 'pagination_page_button_active' 
                  : 'pagination_page_button_inactive'
              )
            }
            key={i}
            onClick={() => {
              router.push(`/sections/${section}/${i}`);
            }}
            >
              <p>{i}</p>
            </button>
          ))
        }
      </div>

      <button
        className='pagination_move_button'
        disabled={Number(page) >= totalPages}
        onClick={() => {
          router.push(`/sections/${section}/${Number(page) + 1}`);
        }}>
        <NextArrow />
      </button>
    </div>
  );
};