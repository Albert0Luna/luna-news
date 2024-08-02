import { MetadataRoute } from 'next';

export default function sitemap (): MetadataRoute.Sitemap {

  const newsEs = [
    {
      id: 'las-nuevas-server-islands-de-astro-y-que-json_ES__1',
      newCode: '1',
      lang: 'es',
      readTime: '5 minutos',
      sections: ['Programación'],
      title: 'Las nuevas Server Islands de Astro y ¿Qué son?',
      mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722377650/astro_zksruo.jpg',
      thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722377705/astro_thumbnail_civqth.jpg',
      ImageAlt: 'Imagen de las nuevas Server Islands de Astro',
      authorId: 'alberto-luna',
      date: '07-31-2024',
      keywords: ['Astro', 'Server Islands', 'Backend', 'Astro 4.12', 'Next.js', 'PPR']
    },
    {
      id: 'los-nuevos-procesadores-chinos-que-amenazan-a-intel-y-amd_ES__2',
      newCode: '2',
      lang: 'es',
      readTime: '6 minutos',
      sections: ['Pc & Laptops'],
      title: 'Los nuevos procesadores chinos que amenazan a Intel y AMD',
      mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1721959602/imagen_keqvdf.jpg',
      thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1721959902/loongson_thumbnail_xfq7dk.jpg',
      ImageAlt: 'Imagen de los nuevos procesadores chinos',
      authorId: 'alberto-luna',
      date: '07-31-2024',
      keywords: ['Loongson', 'Procesadores', 'China', 'Intel', 'AMD', 'Semiconductores']
    },
    {
      id: 'lubuntu-el-sistema-operativo-ligero-para-ordenadores-antiguos_ES__3',
      newCode: '3',
      lang: 'es',
      readTime: '6 minutos',
      sections: ['Pc & Laptops'],
      title: 'Lubuntu: El Sistema Operativo Ligero para Ordenadores Antiguos',
      mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722379967/astro_thumbnail_w1hzc9.jpg',
      thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722380053/astro_thumbnail_1_asxc6z.jpg',
      ImageAlt: 'Imagen de Lubuntu',
      authorId: 'alberto-luna',
      date: '07-31-2024',
      keywords: ['Lubuntu', 'Ubuntu', 'LXQt', 'Sistema Operativo', 'Hardware Antiguo']
    },
    {
      id: 'mac-mini-con-m4-más-cerca-de-lo-que-crees_ES__4',
      newCode: '4',
      lang: 'es',
      readTime: '4 minutos',
      sections: ['Pc & Laptops'],
      title: 'Mac mini con M4: ¿Más cerca de lo que Crees?',
      mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722380582/mac-mini_ajccfc.jpg',
      thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722380579/mac_mini_thumbnail_baszqp.jpg',
      ImageAlt: 'Imagen de Mac mini',
      authorId: 'alberto-luna',
      date: '07-31-2024',
      keywords: ['Mac mini', 'M4', 'Apple', 'Chip M4', 'Mac mini con M4']
    },
    {
      id: 'meta-ai-en-whatsapp-un-asistente-digital_ES__5',
      newCode: '5',
      lang: 'es',
      readTime: '5 minutos',
      sections: ['IA', 'Smathphones & Tablets'],
      title: 'Meta AI en WhatsApp: Un Asistente Digital',
      mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722380931/watsapp_tcv7hn.jpg',
      thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722380928/wattsapp_thumbnail_sokz3d.jpg',
      ImageAlt: 'Imagen de WhatsApp con Meta AI',
      authorId: 'alberto-luna',
      date: '07-31-2024',
      keywords: ['Meta AI', 'WhatsApp', 'Asistente Digital', 'Chatbot', 'Inteligencia Artificial']
    },
    {
      id: 'mejor-pc-gamer-por-menos-de-500-usd_ES__6',
      newCode: '6',
      lang: 'es',
      readTime: '5 minutos',
      sections: ['Gaming', 'Pc & Laptops'],
      title: 'Mejor PC Gamer por menos de $500 USD',
      mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722400055/pc-corsair_um3x3c.jpg',
      thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722400052/pc-corsair-thumbnail_ywbovu.jpg',
      ImageAlt: 'Imagen de PC Gamer',
      authorId: 'alberto-luna',
      date: '07-31-2024',
      keywords: ['PC Gamer', 'Gaming', 'Corsair', 'AMD Ryzen 5 5600G', 'EVGA N1']
    },
    {
      id: 'google-pixel-9-pro-fold-detalles-y-expectativas_ES__7',
      newCode: '7',
      lang: 'es',
      readTime: '4 minutos',
      sections: ['Gaming', 'Pc & Laptops'],
      title: 'Google Pixel 9 Pro Fold: Detalles y Expectativas',
      mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722400968/pixel-fold_r9f5p5.jpg',
      thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722400964/pixel-fold-thumbnail_dtjctv.jpg',
      ImageAlt: 'Google Pixel 9 Pro Fold',
      authorId: 'alberto-luna',
      date: '07-31-2024',
      keywords: ['Google Pixel 9 Pro Fold', 'Google Pixel 9 Pro', 'Google Pixel Fold', 'Google Pixel 9', 'Google Pixel']
    },
    {
      id: 'como-mejorar-el-rendimiento-de-visual-studio-code_ES__8',
      newCode: '8',
      lang: 'es',
      readTime: '5 minutos',
      sections: ['Tutoriales', 'Programación'],
      title: 'Cómo mejorar el rendimiento de Visual Studio Code',
      mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722131896/fab76d7c-5235-41ef-a82a-90b365ba4fc6.png',
      thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722131896/fab76d7c-5235-41ef-a82a-90b365ba4fc6.png',
      ImageAlt: 'Visual Studio Code',
      authorId: 'alberto-luna',
      date: '07-31-2024',
      keywords: ['Visual Studio Code', 'Desarrollo de Software', 'Programación', 'Extensiones de Visual Studio Code', 'Rendimiento de Visual Studio Code']
    },
    {
      id: 'review-del-teclado-thunderbolt-k78_ES__9',
      newCode: '9',
      lang: 'es',
      readTime: '6 minutos',
      sections: ['IA'],
      title: 'Review del Teclado Thunderbolt K78',
      mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722401307/thunder-teclado_dqf34g.jpg',
      thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722401305/thunder_teclado_thumbnail_cgjcs0.jpg',
      ImageAlt: 'Teclado Thunderbolt K78',
      authorId: 'alberto-luna',
      date: '07-31-2024',
      keywords: ['Thunderbolt K78', 'Teclado Mecánico', 'Teclado Gamer', 'Outemu Red', 'Outemu Brown']
    },
    {
      id: 'que-es-searchgpt-y-por-que-pondra-a-temblar-a-google_ES__10',
      newCode: '10',
      lang: 'es',
      readTime: '6 minutos',
      sections: ['Reseñas'],
      title: '¿Qué es SearchGPT y por qué pondrá a temblar a Google?',
      mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722102886/9b47cb0a-09ad-4fbc-bf21-d30ec83436d4.png',
      thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722102886/9b47cb0a-09ad-4fbc-bf21-d30ec83436d4.png',
      ImageAlt: 'SearchGPT',
      authorId: 'alberto-luna',
      date: '07-31-2024',
      keywords: ['SearchGPT', 'OpenAI', 'Inteligencia Artificial', 'Google', 'ChatGPT']
    },
  ];

  const newsEn = [
    {
      id: 'the-new-server-islands-of-astro-and-what-they-are_EN__1',
      newCode: '1',
      lang: 'en',
      readTime: '5 minutes',
      sections: ['Programming'],
      title: 'The New Server Islands of Astro and What Are They?',
      mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722377650/astro_zksruo.jpg',
      thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722377705/astro_thumbnail_civqth.jpg',
      ImageAlt: 'Image of Astro\'s new Server Islands',
      authorId: 'alberto-luna',
      date: '07-31-2024',
      keywords: ['Astro', 'Server Islands', 'Backend', 'Astro 4.12', 'Next.js', 'PPR']
    },
    {
      id: 'the-new-chinese-processors-that-threaten-intel-and-amd_EN__2',
      newCode: '2',
      lang: 'en',
      readTime: '6 minutes',
      sections: ['Pc & Laptops'],
      title: 'The New Chinese Processors That Threaten Intel and AMD',
      mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1721959602/imagen_keqvdf.jpg',
      thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1721959902/loongson_thumbnail_xfq7dk.jpg',
      ImageAlt: 'Image of the new Chinese processors',
      authorId: 'alberto-luna',
      date: '07-31-2024',
      miniDesc: 'The new Loongson processors represent a threat to Intel and AMD. Discover their features and how they could change the semiconductor industry landscape.',
      keywords: ['Loongson', 'Processors', 'China', 'Intel', 'AMD', 'Semiconductors']
    },
    {
      id: 'lubuntu-the-lightweight-operating-system-for-old-computers_EN__3',
      newCode: '3',
      lang: 'en',
      readTime: '6 minutes',
      sections: ['Pc & Laptops'],
      title: 'Lubuntu: The Lightweight Operating System for Old Computers',
      mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722379967/astro_thumbnail_w1hzc9.jpg',
      thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722380053/astro_thumbnail_1_asxc6z.jpg',
      ImageAlt: 'Image of Lubuntu',
      authorId: 'alberto-luna',
      date: '07-31-2024',
      keywords: ['Lubuntu', 'Ubuntu', 'LXQt', 'Operating System', 'Old Hardware']
    },
    {
      id: 'mac-mini-with-m4-closer-than-you-think_EN__4',
      newCode: '4',
      lang: 'en',
      readTime: '4 minutes',
      sections: ['Pc & Laptops'],
      title: 'Mac mini with M4: Closer Than You Think?',
      mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722380582/mac-mini_ajccfc.jpg',
      thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722380579/mac_mini_thumbnail_baszqp.jpg',
      ImageAlt: 'Image of Mac mini',
      authorId: 'alberto-luna',
      date: '07-31-2024',
      keywords: ['Mac mini', 'M4', 'Apple', 'M4 Chip', 'Mac mini with M4']
    },
    {
      id: 'meta-ai-on-whatsapp-a-digital-assistant_EN__5',
      newCode: '5',
      lang: 'en',
      readTime: '5 minutes',
      sections: ['AI', 'Smathphones & Tablets'],
      title: 'Meta AI on WhatsApp: A Digital Assistant',
      mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722380931/watsapp_tcv7hn.jpg',
      thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722380928/wattsapp_thumbnail_sokz3d.jpg',
      ImageAlt: 'Image of WhatsApp with Meta AI',
      authorId: 'alberto-luna',
      date: '07-31-2024',
      keywords: ['Meta AI', 'WhatsApp', 'Digital Assistant', 'Chatbot', 'Artificial Intelligence']
    },
    {
      id: 'best-gaming-pc-under-500-usd_EN__6',
      newCode: '6',
      lang: 'en',
      readTime: '5 minutes',
      sections: ['Gaming', 'Pc & Laptops'],
      title: 'Best Gaming PC for Under $500 USD',
      mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722400055/pc-corsair_um3x3c.jpg',
      thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722400052/pc-corsair-thumbnail_ywbovu.jpg',
      ImageAlt: 'Gaming PC Image',
      authorId: 'alberto-luna',
      date: '07-31-2024',
      keywords: ['Gaming PC', 'Gaming', 'Corsair', 'AMD Ryzen 5 5600G', 'EVGA N1']
    },
    {
      id: 'google-pixel-9-pro-fold-details-and-expectations_EN__7',
      newCode: '7',
      lang: 'en',
      readTime: '4 minutes',
      sections: ['Gaming', 'Pc & Laptops'],
      title: 'Google Pixel 9 Pro Fold: Details and Expectations',
      mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722400968/pixel-fold_r9f5p5.jpg',
      thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722400964/pixel-fold-thumbnail_dtjctv.jpg',
      ImageAlt: 'Google Pixel 9 Pro Fold',
      authorId: 'alberto-luna',
      date: '07-31-2024',
      keywords: ['Google Pixel 9 Pro Fold', 'Google Pixel 9 Pro', 'Google Pixel Fold', 'Google Pixel 9', 'Google Pixel']
    },
    {
      id: 'how-to-improve-visual-studio-code-performance_EN__8',
      newCode: '8',
      lang: 'en',
      readTime: '5 minutes',
      sections: ['Tutorials', 'Programming'],
      title: 'How to Improve Visual Studio Code Performance',
      mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722131896/fab76d7c-5235-41ef-a82a-90b365ba4fc6.png',
      thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722131896/fab76d7c-5235-41ef-a82a-90b365ba4fc6.png',
      ImageAlt: 'Visual Studio Code',
      authorId: 'alberto-luna',
      date: '07-31-2024',
      keywords: ['Visual Studio Code', 'Software Development', 'Programming', 'Visual Studio Code Extensions', 'Visual Studio Code Performance']
    },
    {
      id: 'thunderbolt-k78-keyboard-review_EN__9',
      newCode: '9',
      lang: 'en',
      readTime: '6 minutes',
      sections: ['AI'],
      title: 'Thunderbolt K78 Keyboard Review',
      mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722401307/thunder-teclado_dqf34g.jpg',
      thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722401305/thunder_teclado_thumbnail_cgjcs0.jpg',
      ImageAlt: 'Thunderbolt K78 Keyboard',
      authorId: 'alberto-luna',
      date: '07-31-2024',
      keywords: ['Thunderbolt K78', 'Mechanical Keyboard', 'Gaming Keyboard', 'Outemu Red', 'Outemu Brown']
    },
    {
      id: 'what-is-searchgpt-and-why-it-will-shake-google_EN__10',
      newCode: '10',
      lang: 'en',
      readTime: '6 minutes',
      sections: ['Reviews'],
      title: 'What is SearchGPT and Why It Will Shake Google?',
      mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722102886/9b47cb0a-09ad-4fbc-bf21-d30ec83436d4.png',
      thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722102886/9b47cb0a-09ad-4fbc-bf21-d30ec83436d4.png',
      ImageAlt: 'SearchGPT',
      authorId: 'alberto-luna',
      date: '07-31-2024',
      miniDesc: 'Discover what SearchGPT is and why it might shake Google. Learn about its features, potential impact, and how you can get access to it.',
      keywords: ['SearchGPT', 'OpenAI', 'Artificial Intelligence', 'Google', 'ChatGPT']
    }
      
  ];

  const mappedNewsEs = newsEs.map((article) => ({
    url: `https://www.lunanews.tech/es/${article.id}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.7,
  }));
  
  const mappedNewsEn = newsEn.map((article) => ({
    url: `https://www.lunanews.tech/es/${article.id}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.7,
  }));
  

  return [
    {
      url: 'https://www.lunanews.tech',
      lastModified: new Date('2023-01-01'), // Fecha fija para la URL principal
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.lunanews.tech/es/about',
      lastModified: new Date('2023-01-01'), // Fecha fija para la sección "about" en español
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.lunanews.tech/en/about',
      lastModified: new Date('2023-01-01'), // Fecha fija para la sección "about" en inglés
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.lunanews.tech/es/sections',
      lastModified: new Date('2023-01-01'), // Fecha fija para la sección "sections" en español
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.lunanews.tech/en/sections',
      lastModified: new Date('2023-01-01'), // Fecha fija para la sección "sections" en inglés
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...mappedNewsEs,
    ...mappedNewsEn
  ];
}
