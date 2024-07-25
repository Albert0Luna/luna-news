'use client';

import { outfit } from '@/src/fonts/fonts';
import CancelIcon from '@/src/icons/ui-icons/CancelIcon';
import { useLocale } from 'next-intl';
import React, { useState } from 'react';

export function AuthorProfile ({ closeDialogFn, author }: { closeDialogFn: () => void; author?: string }) {

  const locale = useLocale();

  const allAuthors = [
    {
      id: 'alberto-luna',
      name: 'Alberto Luna',
      picture: '/alberto-luna.jpeg',
      descES: {
        p1: 'Hola soy Alberto Luna,',
        p2: 'Creador de Luna News, Ingeniero de Software, pero sobre todo soy un apacionado de la tecnologia',
        p3: 'Espero el contenido que conpartimos de este sitio web de noticas tecnologicas sea de tu agrado.',
        p4: 'Abrochate tus cinturones y preparate para este viaje de conocimeinto al estilo de Luna News.'
      },
      descEN: {
        p1: 'Hi, I am Alberto Luna,',
        p2: 'Creator of Luna News, Software Engineer, but above all I am passionate about technology',
        p3: 'I hope the content we share from this technology news website is to your liking.',
        p4: 'Buckle up and get ready for this knowledge journey Luna News style.'
      }
    },
    {
      id: 'dinorah-robles',
      name: 'Dinorah Robles',
      picture: '/alberto-luna.jpeg',
      descES: {
        p1: 'Hola soy Dinorah Robles',
        p2: 'Creadora de Luna News, Estudiante de ciberseguridad, pero sobre todo soy una apacionada de la tecnologia',
        p3: 'Espero el contenido que conpartimos de este sitio web de noticas tecnologicas sea de tu agrado.',
        p4: 'Abrochate tus cinturones y preparate para este viaje de conocimeinto al estilo de Luna News.'
      },
      descEN: {
        p1: 'Hi, I am Dinorah Robles',
        p2: 'Creator of Luna News, Cybersecurity student, but above all I am passionate about technology',
        p3: 'I hope the content we share from this technology news website is to your liking.',
        p4: 'Buckle up and get ready for this knowledge journey Luna News style.'
      }
    }
  ];

  const authorData = allAuthors.find((authorData) => authorData.id === author);

  return (
    <div className='profile'>
      <button 
        className='profile_close_btn'
        onClick={closeDialogFn}
      >
        <CancelIcon alt='Close author profile'  width={25} height={25}/>
      </button>
      <p className='profile-name'>
        {authorData?.name}
      </p>
      <picture className='profile_picture_container'>
        <img 
          className='profile_picture'
          src={authorData?.picture} alt={author} 
        />
      </picture>
      <div className='profile-text-content'>
        <div className='profile-content'>
          {locale === 'en'
            ? Object.values(authorData?.descEN).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
            : Object.values(authorData?.descES).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default function Profile ({ authorId } : { authorId?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <div className='new_info_author'>
      <button onClick={toggleDialog} className='new_info_author_container'>
        <picture className='new_info_author_picture_container'>
          <img src='/alberto-luna.jpeg' alt={authorId} />
        </picture>
        <p className={`${outfit.className} antialiased`}>Alberto Luna</p>
      </button>
      <dialog 
        open={isOpen} 
        className='author_profile'
      >
        <AuthorProfile closeDialogFn={closeDialog} author={authorId}/>
      </dialog>
    </div>
  );
}
