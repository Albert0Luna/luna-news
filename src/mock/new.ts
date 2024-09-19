/* 
interface BaseNews {
  newCode: `${number}`;
  title: string;
  readTime: string;
  mainImage: `https://${string}`;
  thumbnail?: `https://${string}`;
  ImageAlt: string;
  authorId: 'alberto-luna' | 'andrea-robles';
  date: `${number}-${number}-${number}`;
  lastModified?: `${number}-${number}-${number}`;
  miniDesc: string;
  content: string[];
  final: string;
  keywords: string[];
}

type SectionsEn = 'Latest' | 'Tutorials' | 'PCs & Laptops' | 'Smartphones & Tablets' | 'Gaming' | 'Programming' | 'Reviews' | 'AI';
type SectionsEs = 'Lo último' | 'Tutoriales' | 'PCs & Laptops' | 'Smartphones & Tablets' | 'Gaming' | 'Programación' | 'Reseñas' | 'IA';

interface NewsEn extends BaseNews {
  id: `${string}_EN__${number}`;
  lang: 'en';
  readTime: `${number} minutes`;
  sections: SectionsEn[];
}

interface NewsEs extends BaseNews {
  id: `${string}_ES__${number}`;
  lang: 'es';
  readTime: `${number} minutos`;
  sections: SectionsEs[];
}
*/

const newsEs  = [
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
    miniDesc: 'Astro ha lanzado una nueva característica llamada Server Islands que promete revolucionar la forma en que se crean sitios web. Descubre qué son y cómo funcionan.',
    content: [
      `
          Si ya conoces <a href='https://astro.build/' target='_blank'>Astro</a>, sabrás que es un marco de trabajo moderno para la creación de sitios web, diseñado para ser rápido, sencillo y escalable. 
          
          Una de las características más destacadas de <a href='https://astro.build/' target='_blank'>Astro</a> son las <a href='https://docs.astro.build/es/concepts/islands/' target='_blank'>"islas"</a>, una tecnología que ha popularizado, permitiendo que las páginas sean sorprendentemente rápidas gracias a su interactividad limitada a ciertas áreas.
  
    Sin embargo, estas <a href='https://docs.astro.build/es/concepts/islands/' target='_blank'>"islas"</a> tradicionales tenían un inconveniente: se cargaban en el cliente. Esto funcionaba bien para sitios estáticos sin backend, como blogs o páginas de portafolio, pero se volvía complicado para sitios que requerían contenido de backend dinámico, como un e-commerce. 
    
    Aquí es donde las Server Islands se convierten en una solución ingeniosa, manteniendo el mismo concepto de las <a href='https://docs.astro.build/es/concepts/islands/' target='_blank'>"islas"</a> tradicionales pero con la capacidad de procesar código desde el backend.
  
    <div class='divisor'></div>
  
    ## ¿Cómo funcionan y cuándo puedo utilizarlas?
  
    ![Astro Server Islands Excalidraw](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722377769/190c148b-758c-4506-aefd-1c649a689a95.png)
  
    Las <a href='https://astro.build/blog/astro-4120/#experimental-server-islands' target='_blank'>Server Islands</a> pueden procesar código de backend en el lado del servidor. Lo genial es que puedes tener varias islas sin tener que esperar a que carguen para que el contenido se renderice. Astro se encarga de renderizarlas en el servidor y enviarlas al cliente.

Es importante tener en cuenta que las <a href='https://astro.build/blog/astro-4120/#experimental-server-islands' target='_blank'>Server Islands</a> son muy útiles para contenido dinámico que no cambia frecuentemente. Por ejemplo, pueden no ser la mejor opción para contenido que se actualiza constantemente, como una red social.

Actualmente, esta característica está en fase beta, pero puedes probarla de manera experimental en la versión <a href='https://astro.build/blog/astro-4120/' target='_blank'>Astro 4.12</a>, que aún no ha sido lanzada oficialmente.
  
      `,
      `
      <div class='divisor'></div>
      ## ¿Qué tanto se parecen las Server Islands de Astro a las PPR de Next.js?
  
  ![Astro = Next.js](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722378234/astromasonext_ip6kkm.png)
  
  Las Server Islands de <a href='https://astro.build/' target='_blank'>Astro</a> son similares a las <a href='https://nextjs.org/docs/app/api-reference/next-config-js/partial-prerendering' target='_blank'>PPR (Pre-rendering con Prefetch) de Next.js</a>, ya que ambas tecnologías permiten renderizar contenido en el servidor y enviarlo al cliente. Sin embargo, las Server Islands de <a href='https://astro.build/' target='_blank'>Astro</a> son más fáciles de implementar y, en algunos benchmarks, se ha demostrado que son más rápidas que las PPR de Next.js.
      `
    ],
    final: `
    <div class='divisor'></div>
    ## Conclusión
    Las Server Islands de <a href='https://astro.build/' target='_blank'>Astro</a> son una característica muy interesante que promete revolucionar la forma en que se crean sitios web. Permiten tener un backend en un sitio estático sin sacrificar la velocidad y simplicidad de <a href='https://astro.build/' target='_blank'>Astro</a>. 
    
    Aunque esta característica aún está en modo experimental, es algo a tener en cuenta para el futuro de Astro y la creación de sitios web modernos y rápidos.
    `,
    keywords: ['Astro', 'Server Islands', 'Backend', 'Astro 4.12', 'Next.js', 'PPR']
  },
  {
    id: 'los-nuevos-procesadores-chinos-que-amenazan-a-intel-y-amd_ES__2',
    newCode: '2',
    lang: 'es',
    readTime: '6 minutos',
    sections: ['PCs & Laptops'],
    title: 'Los nuevos procesadores chinos que amenazan a Intel y AMD',
    mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1721959602/imagen_keqvdf.jpg',
    thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1721959902/loongson_thumbnail_xfq7dk.jpg',
    ImageAlt: 'Imagen de los nuevos procesadores chinos',
    authorId: 'alberto-luna',
    date: '07-31-2024',
    miniDesc: 'Los nuevos procesadores Loongson representan una amenaza para Intel y AMD. Descubre sus características y cómo podrían cambiar el panorama de la industria de los semiconductores.',
    content: [
      `
    Los nuevos procesadores <a href='https://www.loongson.cn' target='_blank'>Loongson</a> representan la respuesta del gigante asiático a la creencia de que China no puede desarrollar sus propios procesadores. En julio de 2024, se presentó el nuevo procesador <a href='https://www.loongson.cn/EN/product/show?id=11' target='_blank'>Loongson LS3C6000</a>, diseñado principalmente para servidores, pero también apto para equipos de escritorio. Este lanzamiento es un presagio de lo que podría ocurrir en un futuro no muy lejano.
  
    <div class='divisor'></div>
  
    ## Características más destacadas
  
    Este procesador cuenta con características muy interesantes que no tienen nada que envidiar a los procesadores de Intel o AMD. Algunas de sus características más destacadas son:
  
    * **Frecuencia:** 2.0-2.5GHz
    * **Velocidad de cálculo máxima:** 240 GFLOPS
    * **Núcleos físicos:** 4
    * **Núcleos lógicos:** 8
    * **Caché de alta velocidad:** El procesador cuenta con una caché privada por cada núcleo y una caché compartida de 16MB.
    * **Empaquetado:** Viene en un paquete BGA de 35mm×35mm con 1,190 pines.
    * **Gestión de energía:** Compatible con la escala de voltaje dinámica en los dominios de voltaje principales.
    * **Consumo de energía típico:** 38W
  
    <div class='divisor'></div>
  
    ## ¿Qué se puede hacer con este procesador?
  
    ![loongson LS3C6000](https://res.cloudinary.com/dis6nw4o7/image/upload/v1721959602/imagen_1_ntatsf.jpg)
  
    Debido a sus destacadas características, este procesador puede ser utilizado en diversas áreas como:
  
    * **Servidores:** Ideal para servidores debido a su gran cantidad de núcleos y su velocidad de cálculo máxima de 240 GFLOPS.
    * **Estaciones de trabajo:** Con una frecuencia de 2.0-2.5GHz y 8 núcleos lógicos, es apto para estaciones de trabajo.
    * **Equipos de escritorio:** Suficiente para satisfacer las necesidades de un usuario común.
    * **Centros de datos:** Perfecto para centros de datos gracias a su velocidad de cálculo y numerosos núcleos.
    * **Gaming:** Aunque no es su principal enfoque, puede ser utilizado para gaming debido a sus 8 núcleos lógicos y su frecuencia.
  
      `,
      `
    <div class='divisor'></div>
    ## ¿Son estos nuevos procesadores una amenaza para Intel y AMD?
  
    Si bien este procesador no es tan potente como los procesadores tope de gama de Intel o AMD, representa una amenaza para estos dos gigantes. El Loongson 3A6000 presenta una mejora significativa del rendimiento en <a href='https://www.loongson.cn/EN/product/show?id=11' target='_blank'>comparación con el Loongson 3A5000, con un aumento del 60% y el 90%</a>. Si esta evolución continúa, podría convertirse en una gran competencia para Intel y AMD en un futuro no muy lejano.
  
    <div class='divisor'></div>
    ## ¿Cuál sería la posición de Estados Unidos y Occidente?
  
    Aunque actualmente este procesador no representa una gran amenaza para la industria, es un ejemplo de lo que China puede lograr en un futuro. Estados Unidos y Occidente deben estar preparados para lo que pueda suceder. La posibilidad de que este procesador se venda de manera masiva en Occidente es complicada debido a la guerra comercial entre China y Estados Unidos, y la situación de Taiwán. En 2024, China inyectó más de <a href='https://www.france24.com/es/minuto-a-minuto/20240528-china-invierte-m%C3%A1s-de-47-000-millones-de-d%C3%B3lares-para-reforzar-su-industria-de-chips' target='_blank'>47.000 millones de dólares</a> en un fondo de inversión para reforzar su industria de desarrollo e investigación de semiconductores, lo que indica su fuerte compromiso con este sector.
      `
    ],
    final: `
    <div class='divisor'></div>
    ## Conclusión
    Los nuevos procesadores Loongson representan un avance significativo en la industria de los semiconductores y una muestra del potencial de China en este campo. Aunque actualmente no representan una gran amenaza para Intel y AMD, es un presagio de lo que podría ocurrir en un futuro no muy lejano. Estados Unidos y Occidente deben estar preparados para lo que pueda suceder y no subestimar el potencial de China en este sector.
    <div class='divisor'></div>
    `,
    keywords: ['Loongson', 'Procesadores', 'China', 'Intel', 'AMD', 'Semiconductores']
  },
  {
    id: 'lubuntu-el-sistema-operativo-ligero-para-ordenadores-antiguos_ES__3',
    newCode: '3',
    lang: 'es',
    readTime: '6 minutos',
    sections: ['PCs & Laptops'],
    title: 'Lubuntu: El Sistema Operativo Ligero para Ordenadores Antiguos',
    mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722379967/astro_thumbnail_w1hzc9.jpg',
    thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722380053/astro_thumbnail_1_asxc6z.jpg',
    ImageAlt: 'Imagen de Lubuntu',
    authorId: 'alberto-luna',
    date: '07-31-2024',
    miniDesc: 'Qué es Lubuntu y cómo puede ayudarte a revivir tu ordenador antiguo. Descubre sus características, ventajas e inconvenientes, y si es recomendable para ti.',
    content: [
      `
  
  <a href='https://lubuntu.me/' target='_blank'>Lubuntu</a> es una variante de <a href='https://ubuntu.com/' target='_blank'>Ubuntu</a> diseñada para ofrecer un rendimiento eficiente en ordenadores con hardware más antiguo o menos potente. 
  
  Su nombre, una combinación de “lightweight” y <a href='https://ubuntu.com/' target='_blank'>Ubuntu</a>,” refleja su objetivo: proporcionar un sistema operativo ligero pero funcional. Utiliza el entorno de escritorio LXQt para minimizar los requisitos de hardware mientras mantiene una apariencia moderna y clara.
  
  <div class='divisor'></div>
  
  ## Historia y Evolución
  
  <a href='https://lubuntu.me/' target='_blank'>Lubuntu</a> comenzó en 2009 como un proyecto comunitario liderado por Mario Behling, que buscaba desarrollar una versión minimalista de <a href='https://ubuntu.com/' target='_blank'>Ubuntu</a>. 
  
  La primera versión se lanzó como live CD en septiembre de 2009, y la instalación completa se hizo disponible al año siguiente. Desde entonces, <a href='https://lubuntu.me/' target='_blank'>Lubuntu</a> se ha convertido en una opción oficial dentro de la familia Ubuntu, con versiones lanzadas cada seis meses y la versión LTS (Long-Term Support) comenzando en 2013.
  
  <div class='divisor'></div>
  ## Requisitos de Sistema
  
  Uno de los mayores atractivos de <a href='https://lubuntu.me/' target='_blank'>Lubuntu</a> es su bajo consumo de recursos. Los requisitos mínimos incluyen un procesador de 700 MHz, 512 MB de RAM y 5 GB de almacenamiento. 
  
  A partir de la versión 19.04, <a href='https://lubuntu.me/' target='_blank'>Lubuntu</a> ya no soporta sistemas de 32 bits, enfocándose en hardware más moderno para ofrecer una mejor experiencia.
  
    <div class='divisor'></div>
  ## Programas y Aplicaciones
  
  <a href='https://lubuntu.me/' target='_blank'>Lubuntu</a> viene con una selección de programas preinstalados adecuados para tareas diarias, incluyendo Featherpad para edición de texto, LibreOffice Writer y Calc para trabajos de oficina, y Mozilla Firefox como navegador web. También cuenta con el reproductor VLC y el gestor de red NetworkManager. Los usuarios pueden instalar una amplia gama de aplicaciones adicionales según sus necesidades.
  
      `,
      `
        <div class='divisor'></div>
    ## Características Distintivas
  
  <a href='https://lubuntu.me/' target='_blank'>Lubuntu</a> se diferencia de Ubuntu principalmente en su entorno de usuario y en sus requisitos de hardware. LXQt proporciona una interfaz clara y minimalista que ahorra recursos y asegura un rendimiento fluido incluso en equipos más antiguos. Este enfoque permite que los usuarios nuevos se adapten rápidamente, aunque el sistema omite algunos efectos gráficos avanzados.
  
    <div class='divisor'></div>
  ## Ventajas e Inconvenientes
  
  ### Ventajas
  
  - **Bajos Requisitos de Hardware**: Ideal para ordenadores antiguos o menos potentes, <a href='https://lubuntu.me/' target='_blank'>Lubuntu</a> ofrece un rendimiento eficiente con un mínimo consumo de recursos.
  - **Gratuito y Libre de Publicidad**: Sin costes asociados y sin anuncios intrusivos.
  - **Software Abundante**: Compatible con numerosas aplicaciones gratuitas y accesibles.
  - **Facilidad de Uso**: La interfaz LXQt es intuitiva y accesible, con soporte en español.
  - **Soporte y Comunidad**: Actualizaciones periódicas y una activa comunidad de usuarios.
  
    <div class='divisor'></div>
  ### Inconvenientes
  
  - **Limitaciones de Software:** Algunas aplicaciones más grandes pueden no funcionar adecuadamente, y las aplicaciones de Windows pueden requerir herramientas adicionales.
  - **Aspecto Visual:** El diseño minimalista puede carecer de algunos efectos gráficos y funcionalidades avanzadas.
  - **Configuración Inicial:** Puede requerir conocimientos adicionales para usuarios que vienen de otros sistemas operativos como Windows o macOS.
  
    <div class='divisor'></div>
  ## ¿Para Quién es Recomendable Lubuntu?
  
  ![App de ubuntu abiertas](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722380221/lubuntu_apps_nujn6f.jpg)
  
  <a href='https://lubuntu.me/' target='_blank'>Lubuntu</a> es especialmente adecuado para usuarios que necesitan revitalizar hardware antiguo o limitado. Con su enfoque en la eficiencia y su entorno de escritorio moderno, puede ser una opción viable incluso para ordenadores más nuevos. 
  
  Sin embargo, si se prioriza la ejecución de aplicaciones pesadas o se busca una experiencia gráfica avanzada, otras distribuciones de Linux pueden ser más apropiadas.
  <a href='https://lubuntu.me/' target='_blank'>Lubuntu</a> 20.04: Ligereza y Eficiencia en Acción
  
    <div class='divisor'></div>
  ## Descripción y Características
  
  <a href='https://lubuntu.me/' target='_blank'>Lubuntu</a> 20.04 se destaca por su ligereza y su entorno de escritorio LXQt, que minimiza el consumo de recursos del sistema. 
  
  Este sistema operativo es ideal para rejuvenecer ordenadores antiguos, permitiéndoles funcionar como centros multimedia o máquinas de respaldo. Con un kernel 5.4, <a href='https://lubuntu.me/' target='_blank'>Lubuntu</a> 20.04 se mantiene alineado con el resto de las distribuciones de su versión.
  
    <div class='divisor'></div>
  ## Gestión y Configuración
  
  El gestor de ventanas de <a href='https://lubuntu.me/' target='_blank'>Lubuntu</a> es ágil y confiable, aunque la personalización del sistema, como cambiar el fondo de pantalla, puede ser menos intuitiva para los nuevos usuarios. La falta de un centro de software integrado es otro punto a considerar, aunque se puede instalar la Snap Store u otros centros de software.
      `
    ],
    final: `
    <div class='divisor'></div>
    ## Recomendaciones
    <a href='https://lubuntu.me/' target='_blank'>Lubuntu</a> 20.04 es ideal para usuarios con experiencia en Linux que buscan optimizar hardware antiguo. 
    
    La distribución ofrece una experiencia sólida, pero puede no ser la opción más amigable para principiantes debido a la necesidad de conocimientos adicionales para la configuración. 
    
    La recomendación es probarla si tienes experiencia en Linux y quieres revivir un ordenador antiguo.
    <div class='divisor'></div>
    `,
    keywords: ['Lubuntu', 'Ubuntu', 'LXQt', 'Sistema Operativo', 'Hardware Antiguo']
  },
  {
    id: 'mac-mini-con-m4-mas-cerca-de-lo-que-crees_ES__4',
    newCode: '4',
    lang: 'es',
    readTime: '4 minutos',
    sections: ['PCs & Laptops'],
    title: 'Mac mini con M4: ¿Más cerca de lo que Crees?',
    mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722380582/mac-mini_ajccfc.jpg',
    thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722380579/mac_mini_thumbnail_baszqp.jpg',
    ImageAlt: 'Imagen de Mac mini',
    authorId: 'alberto-luna',
    date: '07-31-2024',
    miniDesc: 'El Mac mini con M4 podría ser una realidad más pronto de lo que piensas. Descubre por qué Apple podría estar saltándose el M3 y qué esperar de esta nueva versión.',
    content: [
      `
  
  El Mac mini es una computadora de escritorio compacta y versátil que ha sido popular entre los usuarios de Apple durante años, gracias a su diseño minimalista y su buena relación calidad-precio, algo poco común en el mundo de Apple. 
  
  La incorporación de un <a href='https://www.apple.com/mx/newsroom/2024/05/apple-introduces-m4-chip/' target='_blank'>Chip M4</a> en el Mac mini representaría una opción atractiva para quienes buscan un rendimiento mejorado y una mayor eficiencia energética. 
  
  Con el <a href='https://www.apple.com/mx/newsroom/2024/05/apple-introduces-m4-chip/' target='_blank'>chip M4</a>, Apple podría ofrecer una experiencia de usuario más rápida y fluida, además de una mayor duración de la batería.
  
    <div class='divisor'></div>
  ## ¿Por Qué no hay un mac mini con M3?
  
  Han pasado ya dos años desde el lanzamiento del Mac mini con M2, y los usuarios han estado esperando ansiosamente una actualización. 
  
  Aunque el <a href='https://www.apple.com/mx/mac-mini/' target='_blank'>Mac Mini con el M2</a> sigue siendo una opción sólida para muchos, la posibilidad de un Mac mini con chip M3 parece cada vez más lejana. 
  
  En cambio, los chips M4 de Apple ya son una realidad, lo que sugiere que Apple podría estar saltándose la generación de procesadores M3 para algunos equipos, especialmente el Mac mini.
  
      `,
      `
        <div class='divisor'></div>
  ## ¿Qué Esperar de un Mac mini con M4?
  
  ![Chip M4](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722380578/m4_chip_mhiu0f.jpg)
  
  Un Mac mini con M4 podría ofrecer un rendimiento significativamente mejorado en comparación con el modelo con M2. 
  
  Con el <a href='https://www.apple.com/mx/newsroom/2024/05/apple-introduces-m4-chip/' target='_blank'>chip M4</a>, Apple tendría la oportunidad de introducir nuevas funciones y características que no eran posibles con el chip M2, gracias a sus 10 núcleos y una GPU mejorada. Esto permitiría a los usuarios disfrutar de una experiencia general más fluida y eficiente.
  
      `
    ],
    final: `
    <div class='divisor'></div>
    ## ¿Cuándo se Espera un Mac mini con M4?
    La última actualización del Mac mini fue en enero de 2022, por lo que se espera que Apple lance una actualización del Mac mini con M4 en 2024. 
    
    Aunque aún no hay una fecha de lanzamiento oficial, los rumores sugieren que Apple podría anunciar el nuevo Mac mini con M4 a finales de 2024.
    <div class='divisor'></div>
    `,
    keywords: ['Mac mini', 'M4', 'Apple', 'Chip M4', 'Mac mini con M4']
  },
  {
    id: 'meta-ai-en-whatsapp-un-asistente-digital_ES__5',
    newCode: '5',
    lang: 'es',
    readTime: '5 minutos',
    sections: ['IA', 'Smartphones & Tablets'],
    title: 'Meta AI en WhatsApp: Un Asistente Digital',
    mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722380931/watsapp_tcv7hn.jpg',
    thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722380928/wattsapp_thumbnail_sokz3d.jpg',
    ImageAlt: 'Imagen de WhatsApp con Meta AI',
    authorId: 'alberto-luna',
    date: '07-31-2024',
    miniDesc: 'Descubre cómo Meta AI se integra en WhatsApp para ofrecer un asistente digital versátil y amigable. Conoce sus áreas de especialización y los temas de conversación permitidos.',
    content: [
      `
  
  Desde su lanzamiento, el chatbot de inteligencia artificial de Meta AI, marcado con un círculo azul en WhatsApp, ha captado la atención de numerosos usuarios.
  
  El chatbot se integra en la lista de contactos de los usuarios, quienes lo utilizan para diversos propósitos. Desde interacciones casuales, similares a las que se tendrían con un amigo, hasta asistencia en trabajos académicos, especialmente útil para estudiantes.
  
  <div class='divisor'></div>
  ## Áreas de Especialización de Meta AI
  
  Meta AI se destaca por su capacidad para ofrecer recomendaciones de lectura, análisis y reseñas de libros, lo cual resulta valioso para los entusiastas de la lectura y los clubes de lectura. 
  
  En el ámbito educativo, proporciona estrategias de aprendizaje y recursos tecnológicos para estudiantes y educadores.
  
  Además, el chatbot brinda asesoría sobre la compra de teléfonos móviles y el uso de la inteligencia artificial. También cubre temas de actualidad, incluyendo noticias políticas, medioambientales, deportivas y mucho, mucho más.
  
  <div class='divisor'></div>
  ## ✅ Temas de Conversación Permitidos 
  
  Meta AI puede participar en discusiones sobre una amplia variedad de temas, entre ellos:
  
  - **Ciencia:** biología, física, química, espacio, etc.
  - **Arte y cultura:** música, películas, literatura, historia, etc.
  - **Salud y bienestar:** nutrición, ejercicio, mindfulness, etc.
  - **Viajes y aventuras:** destinos, experiencias, consejos, etc.
  - **Cocina y gastronomía:** recetas, técnicas, restaurantes, etc.
  - **Deportes y fitness:** entrenamiento, equipos, eventos, etc.
  - **Filosofía y psicología:** pensamientos, teorías, autoayuda, etc.
  
  Meta AI asegura que no hay límites en las temáticas de conversación y está dispuesto a escuchar y proporcionar información en cualquier área de interés.
  
  <div class='divisor'></div>
  ## 🚫 Temas Restringidos por Meta AI
  
  El chatbot tiene restricciones diseñadas para mantener un entorno seguro y respetuoso. Entre los temas prohibidos se encuentran:
  
  - **Contenido explícito o inapropiado:** evita conversaciones sobre material sexual, ofensivo o grosero.
  - **Incitación a la violencia y discriminación:** bloquea mensajes racistas, homofóbicos, xenofóbicos, y cualquier discurso de odio.
  - **Divulgación de información personal:** protege datos sensibles como direcciones y números de teléfono.
  
      `,
      `
        <div class='divisor'></div>
  ## Recomendaciones Médicas y Legales
  
  ![IA no capacitada](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722380926/not_ai_u9gdkz.jpg)
  
  Meta AI no está capacitado para realizar diagnósticos médicos ni ofrecer asesoría legal. Aunque puede proporcionar información general, no sustituye la consulta con profesionales en estas áreas. 
  
  Además, evita discusiones sobre actividades ilegales o dañinas, como drogas o piratería informática, redirigiendo las conversaciones hacia temas positivos y constructivos.
  
  
      `
    ],
    final: `
    <div class='divisor'></div>
  
    ## Conclusion
  
    El chatbot de Meta AI en WhatsApp se presenta como un asistente digital versátil y amigable, capaz de interactuar en múltiples áreas de interés. 
    
    Su capacidad para ofrecer recomendaciones, asesoría y entretenimiento lo convierte en una herramienta valiosa para usuarios de todas las edades. 
    
    Sin embargo, es importante recordar que, al tratarse de una inteligencia artificial, sus respuestas pueden ser limitadas en ciertos contextos, por lo que se recomienda complementar su uso con fuentes adicionales de información.
    `,
    keywords: ['Meta AI', 'WhatsApp', 'Asistente Digital', 'Chatbot', 'Inteligencia Artificial']
  },
  {
    id: 'mejor-pc-gamer-por-menos-de-500-usd_ES__6',
    newCode: '6',
    lang: 'es',
    readTime: '5 minutos',
    sections: ['Gaming', 'PCs & Laptops'],
    title: 'Mejor PC Gamer por menos de $500 USD',
    mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722400055/pc-corsair_um3x3c.jpg',
    thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722400052/pc-corsair-thumbnail_ywbovu.jpg',
    ImageAlt: 'Imagen de PC Gamer',
    authorId: 'alberto-luna',
    date: '07-31-2024',
    miniDesc: 'Descubre cómo armar una PC gamer económica por menos de $500 USD. Conoce los componentes necesarios y las recomendaciones para disfrutar de tus juegos favoritos.',
    content: [
      `
  
      Hoy vamos a ver una PC gamer económica que puedes armar por menos de $500 USD. 
      
      Este presupuesto es ideal para aquellos que quieren iniciarse en el mundo del gaming sin gastar una fortuna. 
      
      Aunque no es un equipo de gama alta, es capaz de correr la mayoría de los juegos actuales con una calidad gráfica decente a buena. Además, este PC tiene una ventaja que veremos más adelante.
  
      <div class='divisor'></div>
      ## (Gabinete) Corsair 4000D Airflow Chasis ATX
      
      ![Corsair 4000D](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722400678/40c8f07e-407e-423f-abe1-ced4c8d19e6e.png)
      
      El <a href='https://www.amazon.com.mx/Corsair-4000D-Airflow-Templado-Media-Torre/dp/B08C74694Z/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3I0ONEEK6NVHM&dib=eyJ2IjoiMSJ9.fbOupylx0kZoWtLTxSA2U4ug1xKXVF5RQyQsCkxs3el2N7Uz_1jnTtnPBUJ4NAV_Cy8AeYKLe-gt_ZP5gE10SpdbT4CHhfrvISKHuIay732eumOCgOhTWMbSz8jk1o5F2F7wIt0_osgvoxzUSxwhhY4RrKrd4xxZelRhtekHmNDJA5wDSFS6FbOpDzwUS0zmoDbzRQUxr7xxEaFYmUKHqH_jpDRPTJPkvkDqaeuPnJAui7n4eHf3Z4uWrtLn4ItSBgVXoWZBdQ3uR7NsCB85lr7KA0tKk80MkoDZhIy3WuQ.O8zUFMmnX7cwW6G2LcuP5OMXqOI2R-Ki9MLM6TOlboQ&dib_tag=se&keywords=Corsair+4000D+Airflow+Chasis+ATX&qid=1722282398&s=electronics&sprefix=%2Celectronics%2C314&sr=1-1&ufe=app_do%3Aamzn1.fos.242f5c11-6cfd-40d6-91f6-be3d1974080c' target='_blank'>Corsair 4000D</a> es un gabinete de PC de alta calidad diseñado para ofrecer un excelente flujo de aire y una construcción robusta. Cuenta con un panel frontal de acero sólido con amplios canales de ventilación, lo que garantiza una refrigeración eficiente.
      
      **Nota:** El gabinete incluye dos ventiladores de 120 mm preinstalados, pero puedes agregar más ventiladores o un sistema de refrigeración líquida para mejorar aún más la refrigeración de tu PC.
      
      <div class='divisor'></div>
      ## (Tarjeta madre) GIGABYTE B550M DS3H
      
      ![GIGABYTE B550M DS3H](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722281805/0ac90f2d-ef44-4f6a-b898-68e0f155d742.png)
      
      La placa base <a href='https://www.amazon.com.mx/Gigabyte-889523022917-B550M-DS3H/dp/B089FY7QT1/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=L9MPCJT1PS4V&dib=eyJ2IjoiMSJ9.fbhUYdqrZF10AAoIZbnfp6t6fne_xwpUL07OpIsL1gPS_ygwwpIqkz_3J_3BXpUbEzIyOAIbKYJez-_65GLRyB-GxC-xSrTKDXW5t6D_fDhc6p-EHlDG1HrcbFQG7lKzACDKEbq744JSSSZkVxp0Vs1hvRyjfE2hNaD9NhpjXRGK33IvUZJ8wL82ey8y11S9HeJc2DNqD54rqwIxJdSBbvESQMUtmzlnO9ul4fOgwHx-zE-YIV0j3cSEL4tXA_JF4GOLARSEYLUE54TU_UircTVqdNhOKuzXpsHGOOf4u74.m2SLhMRy6aeb4Nisphj2EeqhY4dHioB-0LgNGON_UxI&dib_tag=se&keywords=GIGABYTE+B550M+DS3H&qid=1722282439&sprefix=gigabyte+b550m+ds3h%2Caps%2C296&sr=8-1&ufe=app_do%3Aamzn1.fos.242f5c11-6cfd-40d6-91f6-be3d1974080c' target='_blank'>GIGABYTE B550M DS3H</a> es una excelente opción para ensamblar un PC potente y versátil. Está diseñada para funcionar con los procesadores AMD Ryzen de 3ª generación y ofrece una alimentación estable y eficiente gracias a su sistema VRM digital. Disfruta de altas velocidades de transferencia de datos con las ranuras PCIe 4.0.
      
      **Nota:** Esta tarjeta madre es compatible con los procesadores Ryzen de 5ª generación, así que puedes actualizar tu procesador en el futuro.
      `,
      `
        <div class='divisor'></div>
  ## (Procesador) AMD Ryzen 5 5600G
  
  ![AMD Ryzen 5 5600G](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722281861/dd7753d8-159d-486e-a89a-f7902c254199.png)
  
  <a href='https://www.amazon.com.mx/AMD-Procesador-RyzenTM-5600G-Socket-AM4-3-90GHz/dp/B092L9GF5N/ref=asc_df_B092L9GF5N/?tag=gledskshopmx-20&linkCode=df0&hvadid=522538993191&hvpos=&hvnetw=g&hvrand=5150667329080268141&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9129474&hvtargid=pla-1250272768452&psc=1&mcid=b0e71b2a988b3c9ab87a5068dd10bf63' target='_blank'>El Ryzen 5 5600G</a> es un procesador de alto rendimiento diseñado para ofrecer una experiencia de juego y creación de contenido fluida. Combina una potente CPU de 6 núcleos con una gráfica integrada Radeon, lo que lo convierte en una excelente opción para aquellos que buscan construir un PC versátil sin la necesidad de una tarjeta gráfica dedicada.
  
  **Nota:** Este procesador es compatible con la tarjeta madre que elegimos, por lo que no tendrás problemas de compatibilidad.
  
  <div class='divisor'></div>
  ## (Memoria RAM) XPG SPECTRIX D50 DDR4 RGB
  
  ![XPG SPECTRIX D50](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722282035/c49fdda7-5bdb-4029-bee8-0b3d2faad91e.png)
  
  Alcanzando velocidades de hasta 4133 MHz y con una capacidad máxima de 32 GB, el módulo XPG <a href='https://www.amazon.com.mx/XPG-D50-PC4-25600-288-Pins-AX4U32008G16A-DW50/dp/B092G5Y6QP/ref=sr_1_8?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=EBI6IDCIGXJJ&dib=eyJ2IjoiMSJ9.hIT5D5EetKTlhQnOOY-dZ49jjQ9NQbuvTMcb5iaU53VI-PV5Ho5Br041XQoZhnYKLfstj4ZJ2NfoLH82rZ4VNX7k14DGEFx1oq2hLrX_j21X4e8jMFZvYg2l6AkrKJJBXZlDGPEIVUHj9qInr-7EdjW8nIlb8ukdJKuPZZ3BIJ-U_CC73nvXo2uYtNIt0k44o2BVRy1_9LrcrqaOq7hgVg9H3qzwI9Qxqyodz_DPkBwOxKHbqF-kN3caYh6PqjrUV4usHKQjK2MePOgu1wkLeWZ1KDG_-AFzmacvQPVQAfs.BNfQgOevIjyEyG6-yZ2elbBvCpSG-KCae4toBM3dbd8&dib_tag=se&keywords=XPG+SPECTRIX+D50+DDR4+RGB&qid=1722282463&sprefix=xpg+spectrix+d50+ddr4+rgb%2Caps%2C150&sr=8-8&ufe=app_do%3Aamzn1.fos.242f5c11-6cfd-40d6-91f6-be3d1974080c' target='_blank'>SPECTRIX D50</a> es una excelente opción de memoria. Además, cuenta con un diseño elegante y una impresionante barra de luz RGB triangular.
  
  **Nota:** Con 16 GB de RAM, tendrás suficiente memoria para la mayoría de los juegos y tareas diarias. Si necesitas más, puedes comprar dos módulos de 16 GB para un total de 32 GB, aunque esto implicaría un gasto adicional.
  
      `,
      `
  <div class='divisor'></div>
  ## (Almacenamiento) Kingston M.2, Capacidad: 1000 GB
  
  ![Kingston M.2](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722281964/2e882e47-a6a5-4c1e-a83e-7d615244cfde.png)
  
  Este <a href='https://www.amazon.com.mx/Kingston-SSD-NV2-Capacidad-Escritura/dp/B0BBWH1R8H/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3ND4QXJJ47AST&dib=eyJ2IjoiMSJ9.vKY1xmCpeCeXv_wCylORVJkksyMSpmRtyAPJ92INk9TQmvSumwBhCIGEU2dxBk69xlh9c3gp7Jid4jKz7OGnqG_CbIYkGmm-vvcpzSjZyAm6eR3ShPE-GwzmMUUWKEE3vEddI2bZXMFCkUIKkAQkBw1q9L0ks-ONfT1F9iaQ4hb5qy7W-iiY9cuan5g0bcz44VEZxqQx2-RIuV2UMPJSjgneHu2Z5dW-yIecIE24L88-Aglp3vuBk-3eqZg1x9YCVDMQTsrWDRV0wEJqU55nsvwH_DSSx8oKFs_i63Yr1q0.FDcwJ02eyMzbG70oRLhCk8ht3ht7jJ83cll5o2Ny7EM&dib_tag=se&keywords=Kingston+M.2%2C+Capacidad%3A+1000+GB&qid=1722282491&sprefix=kingston+m.2+capacidad+1000+gb%2Caps%2C137&sr=8-1&ufe=app_do%3Aamzn1.fos.19d97c10-80a3-4566-8ed8-d0331185c744' target='_blank'>SSD NVMe Gen 4x4 de Kingston</a> es perfecto para equipos compactos como laptops y PCs de factor de forma pequeño. Gracias a su diseño delgado de un solo lado, se adapta fácilmente a espacios reducidos. Con velocidades de lectura y escritura ultrarrápidas, podrás cargar aplicaciones y archivos en un abrir y cerrar de ojos.
  
  **Nota:** Podríamos haber ahorrado más con solo 500 GB o eligiendo un SSD de estado sólido, pero esta memoria ofrece mayor velocidad y capacidad por una diferencia de precio mínima.
  
  <div class='divisor'></div>
  ## (Fuente de poder) EVGA N1, 550W
  
  ![EVGA N1, 550W](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722282085/c4af53f8-be74-4564-b7a8-2c5ce8d15e27.png)
  
  La fuente de poder <a href='https://www.amazon.com.mx/EVGA-550W-Power-Supply-100-N1-0550-L1/dp/B01LYGJL0E/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1TC9EOKWZTUR4&dib=eyJ2IjoiMSJ9.hXNucVNx7dK9_tQRnpAS9Lo9AFa2xH0TWhDstZ8WogYYM_opRqrQknNmJaqMfwpFd1WLxrGcmdo3MOVHIGjYiHLWXQOgDBKswiavZy3jkgQyJsD1xouAfBk_-G85k_FdlvDX3nCIIztJU8zvP_TdUeAmst1v1JC2rQBMZqaL-kKyFSTx-LiIdgEle-0wQRtrAu_tZTChVaZaarcbDklzq7QVUjGPYsG58UtOzHzc21tZHkW__YV8p1mVj2dFHzkSWozk_MnwNYVi4yp3z97iwq4Iuswr3hCjv8CVPkpQJ0c.X15umhfov218hYP9dxNEMapLIrp9vIh7pzPOyKoU3GY&dib_tag=se&keywords=EVGA+N1%2C+550W&qid=1722282541&sprefix=evga+n1+550w%2Caps%2C152&sr=8-1&ufe=app_do%3Aamzn1.fos.242f5c11-6cfd-40d6-91f6-be3d1974080c' target='_blank'>EVGA de 550W</a> cuenta con un ventilador de 120 mm que utiliza un cojinete de manguito. Este diseño, combinado con un sistema de control inteligente, permite un funcionamiento casi silencioso. Además, incorpora múltiples protecciones electrónicas como OVP, UVP, OCP, OPP y SCP para garantizar la seguridad de tu equipo y evitar daños.
  
  **Nota:** Muchas personas piensan que este es el componente menos importante, pero una mala elección de fuente de poder puede arruinar todo tu PC. Con esta fuente de poder, no tendrás problemas.
  
      `
    ],
    final: `
    <div class='divisor'></div>
  
  ## Total: $9,226.37 MXN = 491,4 USD
  
  ![Total PC](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722282205/da095e3e-fedb-42a9-a60f-c48213175655.png)
  
  <div class='divisor'></div>
  ## Agrega una tarjeta gráfica en el futuro
  
  ### Para juegos a 1080p con detalles altos
  
  - **NVIDIA GeForce RTX 3060:** Ofrece un excelente equilibrio entre precio y rendimiento, permitiendo jugar a la mayoría de los títulos actuales con detalles altos y altas tasas de refresco.
  - **AMD Radeon RX 6600 XT:** Otra excelente opción con un rendimiento similar a la RTX 3060, pero con un precio ligeramente más bajo.
  
  ### Para juegos a 1440p o 4K
  
  - **NVIDIA GeForce RTX 3070:** Ideal para aquellos que buscan jugar en resoluciones más altas y con detalles ultra.
  - **AMD Radeon RX 6700 XT:** Una alternativa sólida a la RTX 3070, ofreciendo un rendimiento similar en muchos juegos.
  
  ### Para un presupuesto ajustado
  
  - **NVIDIA GeForce RTX 3050:**  Una opción más económica para aquellos que buscan mejorar el rendimiento de su sistema sin gastar demasiado.
  - **AMD Radeon RX 6600:** Similar a la RTX 3050, pero con un enfoque diferente en ciertas tecnologías.
  
    <div class='divisor'></div>
    `,
    keywords: ['PC Gamer', 'Gaming', 'Corsair', 'AMD Ryzen 5 5600G', 'EVGA N1']
  },
  {
    id: 'google-pixel-9-pro-fold-detalles-y-expectativas_ES__7',
    newCode: '7',
    lang: 'es',
    readTime: '4 minutos',
    sections: ['Gaming', 'Smartphones & Tablets'],
    title: 'Google Pixel 9 Pro Fold: Detalles y Expectativas',
    mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722400968/pixel-fold_r9f5p5.jpg',
    thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722400964/pixel-fold-thumbnail_dtjctv.jpg',
    ImageAlt: 'Google Pixel 9 Pro Fold',
    authorId: 'alberto-luna',
    date: '07-31-2024',
    miniDesc: 'Los detalles y expectativas del Google Pixel 9 Pro Fold, el nuevo dispositivo plegable de Google. Conoce su diseño, especificaciones y fecha de lanzamiento.',
    content: [
      `
  
  El Google Pixel 9 Pro Fold, la nueva incorporación a la línea de dispositivos plegables de Google, ha sido revelado en fotografías oficiales. 
  
  Presentan un diseño que confirma los rumores recientes. Este modelo se une al Pixel 9 y al Pixel 9 Pro como parte de la nueva serie de Google.
  
  El Pixel 9 Pro Fold, aunque similar al Pixel 9 Pro en varios aspectos, presenta características distintivas propias de un dispositivo plegable. 
  
  Destacan la bisagra y un módulo de cámaras trasero con una configuración de doble altura, diferente al del Pixel Fold lanzado anteriormente. 
  
  Además, el diseño del Pixel 9 Pro Fold parece menos cuadrado y estará disponible en dos colores: obsidian y porcelain.
  
  <div class='divisor'></div>
  ## Especificaciones y Comparación
  
  Las imágenes filtradas sugieren que la pantalla exterior del Pixel 9 Pro Fold tendrá una diagonal de 6,3 pulgadas, mientras que la pantalla interna alcanzará las 8 pulgadas.
  
  Comparado con el Galaxy Z Fold6 de Samsung, los marcos de ambas pantallas del Pixel 9 Pro Fold parecen menos refinados, indicando que Google aún está perfeccionando su diseño.
  
  <div class='divisor'></div>
  ## Anuncio Oficial y Nuevas Características
  
  Google, anticipando su lanzamiento debido a las filtraciones, ha fijado la presentación oficial para el 13 de agosto en el evento Made by Google en Mountain View. 
  
  Se espera que el Pixel 9 Pro Fold incorpore el chip Tensor G4 y ofrezca hasta 16 GB de RAM, destacándose por su enfoque en inteligencia artificial.
  Google Presenta el Pixel 9 Pro y el Pixel 9 Pro Fold
  
      `,
      `
        <div class='divisor'></div>
  ## Adelanto del Lanzamiento
  
  En respuesta a las múltiples filtraciones en redes sociales, Google ha decidido adelantar el lanzamiento de los Pixel 9 Pro y Pixel 9 Pro Fold. La presentación oficial se llevará a cabo el 13 de agosto. 
  
  El Pixel 9 Pro Fold, la nueva adición a la serie, contará con un rediseño significativo en su módulo de cámaras y una mayor integración de la inteligencia artificial Gemini.
  
  <div class='divisor'></div>
  ## Innovaciones y Diseño
  
  El Pixel 9 Pro Fold, una actualización del Pixel Fold de 2023, exhibirá un diseño renovado con módulos de cámara ubicados en la esquina superior izquierda del dispositivo. 
  
  Esta disposición es una mejora respecto al modelo anterior. Las nuevas características incluyen dos módulos de cámara, cada uno con su propio lente, y un flash integrado.
  
  <div class='divisor'></div>
  ## Avances en Inteligencia Artificial
  
  ![Google Pixel 9 Pro Fold](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722400963/gemini_bta3tk.jpg)
  
  
  
  Google también destacará la incorporación de <a href='https://gemini.google.com/' target='_blank'>Gemini</a>, su última inteligencia artificial, en estos nuevos modelos. 
  
  Esta tecnología permitirá a los usuarios aprovechar funciones avanzadas en redacción de texto y otros servicios. La integración de IA, que ya fue un punto focal en el Pixel 8, continúa siendo una prioridad para la compañía.
  Detalles del Google Pixel 9 Pro Fold: Diseño y Especificaciones
  
  <div class='divisor'></div>
  ## Comparación con Competencia
  
  A diferencia del Samsung Galaxy Z Fold6, el Pixel 9 Pro Fold presenta un diseño con biseles curvados en las esquinas. Los renders también sugieren que el dispositivo estará disponible en colores obsidian y porcelain. 
  
  Aunque aún no se ha confirmado el precio, el Pixel Fold de la generación anterior está actualmente a la venta por 1.299 dólares.
  
      `
    ],
    final: `
    <div class='divisor'></div>
  ## ¿Qué Esperar del Pixel 9 Pro Fold?
  
  El Pixel 9 Pro Fold de Google promete ser un dispositivo innovador con un diseño elegante y características avanzadas. 
  
  Con la presentación oficial programada para el 13 de agosto, los entusiastas de la tecnología esperan ansiosos para conocer más detalles sobre este nuevo modelo plegable. 
  
  La combinación de la inteligencia artificial de Google y un diseño moderno podría convertir al Pixel 9 Pro Fold en un competidor destacado en el mercado de dispositivos plegables.
  
    `,
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
    miniDesc: 'Conoce cómo mejorar el rendimiento de Visual Studio Code con estos consejos y trucos. Aprende a desactivar extensiones innecesarias, optimizaciones y más.',
    content: [
      `
  ## 1. Desactiva extensiones innecesarias
  
  ![Desactivar extenciones de Visual Studio Code](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722131687/8270978d-d108-4824-8b4a-995587b572a9.png)
  
  Es muy común que algunas extensiones de Visual Studio Code consuman muchos recursos del sistema, lo que puede ralentizar el rendimiento del editor. Para mejorar el rendimiento de Visual Studio Code, es recomendable deshabilitar las extensiones que no se utilizan con frecuencia o que no son esenciales para el flujo de trabajo. Para deshabilitar una extensión, sigue estos pasos:
  
  1. Abre Visual Studio Code.
  2. Haz clic en la pestaña de "Extensiones" en la barra lateral izquierda.
  3. Busca la extensión que deseas deshabilitar.
  4. Haz clic en el botón de engranaje junto a la extensión y selecciona "Deshabilitar".
  
  <div class='divisor'></div>
  ## 2. Optimiza la configuración de Visual Studio Code
  
  Visual Studio Code ofrece una amplia gama de opciones de configuración que pueden ayudarte a optimizar el rendimiento del editor. Algunas configuraciones comunes que puedes ajustar para mejorar el rendimiento incluyen:
  
  - Deshabilitar la detección de cambios en archivos grandes.
  - Ajustar la configuración de la memoria del editor.
  - Deshabilitar la detección de cambios en archivos remotos.
  - Ajustar la configuración de la memoria del servidor de lenguaje.
  
  Para acceder a la configuración de Visual Studio Code, sigue estos pasos:
  
  1. Abre Visual Studio Code.
  2. Haz clic en el icono de engranaje en la esquina inferior izquierda de la ventana.
  3. Selecciona "Configuración" en el menú desplegable.
  4. Busca las opciones de configuración que deseas ajustar y modifícalas según sea necesario.
  
      `,
      `
        <div class='divisor'></div>
  ## 3. Asigna más memoria RAM a Visual Studio Code si usas TypeScript
  
  ![Aumentar Ram a Typescript](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722131896/fab76d7c-5235-41ef-a82a-90b365ba4fc6.png)
  
  Si trabajas con TypeScript en Visual Studio Code, es posible que desees asignar más memoria RAM al editor para mejorar el rendimiento. Puedes hacerlo modificando la configuración de la memoria del servidor de lenguaje de TypeScript en Visual Studio Code. Para asignar más memoria RAM a TypeScript, sigue estos pasos:
  
  1. Abre Visual Studio Code.
  2. Haz clic en el icono de engranaje en la esquina inferior izquierda de la ventana.
  3. Selecciona "Configuración" en el menú desplegable.
  4. Busca "memory" en la barra de búsqueda y en la opción de TypeScript, modifica la configuración de la memoria según sea necesario.
  
  <div class='divisor'></div>
  ## 4. Considera cambiar el SSD de tu computadora
  
  Si tu computadora tiene un disco duro mecánico (HDD) en lugar de un disco de estado sólido (SSD), considera actualizar a un SSD para mejorar el rendimiento general de Visual Studio Code y de tu sistema en general. 
  
  Los SSD son considerablemente más rápidos que los HDD y pueden acelerar significativamente la velocidad de carga de archivos y la respuesta del sistema en general.
  
      `
    ],
    final: `
    <div class='divisor'></div>
  ## Conclusión
  
  Mejorar el rendimiento de Visual Studio Code puede ser crucial para optimizar tu flujo de trabajo y aumentar tu productividad como desarrollador. 
  
  Al seguir estos consejos y optimizar la configuración de Visual Studio Code, puedes lograr un editor más rápido y eficiente que te permita trabajar de manera más efectiva en tus proyectos de desarrollo de software.
  
    `,
    keywords: ['Visual Studio Code', 'Desarrollo de Software', 'Programación', 'Extensiones de Visual Studio Code', 'Rendimiento de Visual Studio Code']
  },
  {
    id: 'review-del-teclado-thunderbolt-k78_ES__9',
    newCode: '9',
    lang: 'es',
    readTime: '6 minutos',
    sections: ['Reseñas'],
    title: 'Review del Teclado Thunderbolt K78',
    mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722401307/thunder-teclado_dqf34g.jpg',
    thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722401305/thunder_teclado_thumbnail_cgjcs0.jpg',
    ImageAlt: 'Teclado Thunderbolt K78',
    authorId: 'alberto-luna',
    date: '07-31-2024',
    miniDesc: 'Descubre los pros y contras del teclado Thunderbolt K78 después de dos meses de uso continuo. Conoce sus características, lo que incluye en la caja y nuestra conclusión.',
    content: [
      `
  El teclado <a href='https://articulo.mercadolibre.com.mx/MLM-2473633700-espanol-teclado-mecanico-gamer-wired-thunderobot-k78-rgb-_JM' target='_blank'>Thunderbolt K78</a> es un teclado mecánico que es una alternativa mas economica a los teclado mecanicos de gama alta sin embargo esto no significa que sea un mal teclado, de hecho es un teclado bastante aceptable por el precio y ahora te vamos a decir despues de dos meses de uso continuo los pros y contras de este teclado.
  
  <div class='divisor'></div>
  ## Caracteristicas
  
  - **Idioma:** Español Latinoamérica
  - **Layout:** QWERTY
  - **Switches:** Outemu Red o Brown.
  - **Retroiluminación:** RGB
  - **Color del teclado:** Blanco/Negro
  - **Ergonómico y apto para diversos usos.**
  - **Contiene teclado numérico.**
  - **Tipo de teclado:** mecánico.
  - **Con conector USB-C.**
  - **Con cable removible.**
  - **Medidas:** 100.6cm de ancho, 347.6mm de alto y 33.5cm de profundidad.
  
  <div class='divisor'></div>
  ## Que hay en la caja
  
  ![Contenido de la caja](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722401488/thunder_caja_zrbhiw.jpg)
  
  - Teclado Thunderbolt K78
  - Cable USB-C
  - 2 switches Outemu Red o Brown adicionales
  - Extractor de teclas
  - Manual de usuario
      `,
      `
        <div class='divisor'></div>
  ## Pros
  
  - **Precio:** El precio de este teclado es bastante accesible en comparación con otros teclados mecánicos teniendo un costo aprox de $200 USD.
  
  - **Retroiluminación:** La retroiluminación RGB es bastante buena, puedes configurar la intensidad o la velocidad de RGB.
  
  - **Switches:** Los switches Outemu Red o Brown son bastante buenos, los switches Red son lineales y los Brown son táctiles, ambos son bastante buenos para escribir y jugar (Personalmente preferimos los Brow debido a su equilibrio de siliencio y confort).
  
  - **Cable removible:** El cable USB-C es removible, lo que facilita el transporte del teclado.
  
  - **PBT Keycaps:** Las teclas del teclado son de PBT, lo que las hace más resistentes al desgaste y a la decoloración.
  
  - **Diseño:** El diseño del teclado es bastante bueno siendo 78% del tamaño de un teclado completo, lo que lo hace bastante compacto y cómodo para llevar a cualquier lugar.
  
  - **Listo para usar:** El teclado es plug and play, no necesitas instalar ningún driver para usarlo.
  
  <div class='divisor'></div>
  ## Contras
  
  - **Calidad de construcción:** La calidad de construcción del teclado es bastante buena, sin embargo es de plastico en su totalidad.
  
  - **Software:** Solo puedes modificar la retroiluminación del teclado con sus configuraciones predefinidas, no puedes personalizar la retroiluminación a tu gusto.
  
  - **Ruido:** Los switches Red e incluso los brown son bastante ruidosos, si buscas un teclado silencioso este no es el teclado para ti.
  
  - **No tiene reposamuñecas:** El teclado no tiene reposamuñecas, lo que puede ser incómodo para algunas personas.
  
  - **Limitacion de algunas teclas:** Si utilizas todas las teclas de función del teclado o algunas otras como inicio, fin o supr tendras que usar Fn para acceder a ellas.
  
      `
    ],
    final: `
    <div class='divisor'></div>
  ## Conclusion
  
  El teclado <a href='https://articulo.mercadolibre.com.mx/MLM-2473633700-espanol-teclado-mecanico-gamer-wired-thunderobot-k78-rgb-_JM' target='_blank'>Thunderbolt K78</a> es un teclado bastante bueno para su precio, si buscas un teclado mecánico económico y de buena calidad este es el teclado para ti, sin embargo si buscas un teclado silencioso o con un diseño más premium te recomendamos optar por una opcion de gama un poco mas alta.
  
    <div class='divisor'></div>
    `,
    keywords: ['Thunderbolt K78', 'Teclado Mecánico', 'Teclado Gamer', 'Outemu Red', 'Outemu Brown']
  },
  {
    id: 'que-es-searchgpt-y-por-que-pondra-a-temblar-a-google_ES__10',
    newCode: '10',
    lang: 'es',
    readTime: '6 minutos',
    sections: ['IA', 'Programación'],
    title: '¿Qué es SearchGPT y por qué pondrá a temblar a Google?',
    mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722102886/9b47cb0a-09ad-4fbc-bf21-d30ec83436d4.png',
    thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722102886/9b47cb0a-09ad-4fbc-bf21-d30ec83436d4.png',
    ImageAlt: 'SearchGPT',
    authorId: 'alberto-luna',
    date: '07-31-2024',
    miniDesc: 'Descubre los pros y contras del teclado Thunderbolt K78 después de dos meses de uso continuo. Conoce sus características, lo que incluye en la caja y nuestra conclusión.',
    content: [
      `
  
      <a href='https://openai.com/' target='_blank'>OpenAI</a>, la empresa fundadora de <a href='https://chatgpt.com/' target='_blank'>ChatGPT</a>, <a href='https://openai.com/index/dall-e-3/' target='_blank'>DALLE</a> y otras herramientas de inteligencia artificial que hoy en día son utilizadas por millones de usuarios, ha dado a conocer este 25 de julio de 2024 su nuevo producto que promete revolucionar el mundo de las búsquedas en internet.
  
      <a href='https://openai.com/index/searchgpt-prototype/' target='_blank'>SearchGPT</a> es un motor de búsqueda basado en inteligencia artificial que utiliza el modelo GPT-4 de OpenAI para proporcionar resultados de búsqueda más precisos y relevantes. 
      
      Este motor de búsqueda utiliza el poder de la inteligencia artificial para comprender mejor las consultas de los usuarios y ofrecer resultados más relevantes en menos tiempo.
      
      <div class='divisor'></div>
      ## ¿Cómo funciona SearchGPT y cuáles son sus características?
      
      ![Characteristics](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722102759/imagen_2_roqspb.jpg)

      ### Características principales de SearchGPT:
      
      * **Respuestas rápidas y directas**: Proporciona información actualizada de la web con enlaces claros a fuentes relevantes.
      * **Conversación continua**: Permite hacer preguntas de seguimiento, construyendo un contexto compartido con cada consulta.
      * **Colaboración con editores y creadores**: Promueve el descubrimiento de sitios de editores, destacando contenido de alta calidad en una interfaz conversacional.
      * **Atribución clara**: Las respuestas tienen una atribución clara y enlaces para que los usuarios sepan de dónde proviene la información.
      `,
      `
        <div class='divisor'></div>
  ## Futuro de SearchGPT
  
  * **Mejoras continuas**: Planean mejorar la experiencia en áreas como información local y comercio.
  * **Integración con ChatGPT**: Los comentarios de usuarios y editores ayudarán a integrar las mejores funciones de SearchGPT en ChatGPT.
  
  <div class='divisor'></div>
  ## ¿Por qué SearchGPT pondrá a temblar a Google Chrome?
  
  ![Google](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722103480/Dise%C3%B1o_sin_t%C3%ADtulo_1_ixexaf.png)
  
  Google ha sido el rey indiscutible de los motores de búsqueda durante años, pero SearchGPT podría cambiar eso.
  
  Con la capacidad de comprender mejor las consultas de los usuarios y ofrecer respuestas más precisas y relevantes, SearchGPT tiene el potencial de superar a Google en términos de calidad de los resultados de búsqueda.
  
  <div class='divisor'></div>
  ## ¿Cómo puedo usar SearchGPT?
  
  ![SearchGPT waitlist](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722102886/9b47cb0a-09ad-4fbc-bf21-d30ec83436d4.png)
  
  Aunque por ahora SearchGPT no está disponible para el público en general, puedes inscribirte en la <a href='https://chatgpt.com/search' target='_blank'>lista de espera</a> para ser notificado cuando esté disponible y así tener acceso a esta nueva herramienta de búsqueda basada en inteligencia artificial.
  
      `
    ],
    final: `
    <div class='divisor'></div>
  ## Conclusión
  
  SearchGPT es un motor de búsqueda basado en inteligencia artificial que promete revolucionar la forma en que buscamos información en internet. 
  
  Con su capacidad para comprender mejor las consultas de los usuarios y ofrecer resultados más precisos y relevantes, SearchGPT tiene el potencial de competir con Google y otros motores de búsqueda establecidos en el mercado. Si bien aún no está disponible para el público en general, es una herramienta a tener en cuenta para el futuro de las búsquedas en línea.
  
    <div class='divisor'></div>
    `,
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
    miniDesc: 'Astro has launched a new feature called Server Islands that promises to revolutionize the way websites are created. Discover what they are and how they work.',
    content: [
      `
          If you are already familiar with <a href='https://astro.build/' target='_blank'>Astro</a>, you'll know that it is a modern framework for building websites, designed to be fast, simple, and scalable. 
          
          One of the standout features of Astro are <a href='https://docs.astro.build/es/concepts/islands/' target='_blank'>"islands"</a>, a technology it popularized, allowing pages to be incredibly fast by limiting interactivity to certain areas.
  
    However, these traditional <a href='https://docs.astro.build/es/concepts/islands/' target='_blank'>"islands"</a> had a drawback: they were client-loaded. This worked well for static sites without a backend, like blogs or portfolio pages, but became complicated for sites requiring dynamic backend content, such as e-commerce. 
    
    This is where Server Islands come in as a clever solution, maintaining the same concept of traditional <a href='https://docs.astro.build/es/concepts/islands/' target='_blank'>"islands"</a> but with the ability to process code from the backend.
  
    <div class='divisor'></div>
  
    ## How do they work and when can you use them?
  
    ![Astro Server Islands Excalidraw](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722377769/190c148b-758c-4506-aefd-1c649a689a95.png)
  
    <a href='https://astro.build/blog/astro-4120/#experimental-server-islands' target='_blank'>Server Islands</a> can process backend code on the server side. The cool thing is that you can have multiple islands without waiting for them to load to render the content. Astro handles server-side rendering and sends them to the client.
  
    It's important to note that <a href='https://astro.build/blog/astro-4120/#experimental-server-islands' target='_blank'>Server Islands</a> are very useful for dynamic content that doesn't change frequently. For example, they may not be the best choice for content that is constantly updated, like a social network.
  
    Currently, this feature is in beta, but you can try it experimentally in the <a href='https://astro.build/blog/astro-4120/' target='_blank'>Astro 4.12</a> version, which has not yet been officially released.
  
      `,
      `
      <div class='divisor'></div>
      ## How similar are Astro's Server Islands to Next.js PPR?
  
  ![Astro = Next.js](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722378234/astromasonext_ip6kkm.png)
  
  Astro's <a href='https://astro.build/' target='_blank'>Server Islands</a> are similar to <a href='https://nextjs.org/docs/app/api-reference/next-config-js/partial-prerendering' target='_blank'>PPR (Pre-rendering with Prefetch) from Next.js</a> in that both technologies allow server-side rendering and sending the content to the client. 
  
  However, Astro's <a href='https://astro.build/' target='_blank'>Server Islands</a> are easier to implement, and in some benchmarks, have been shown to be faster than Next.js's PPR.
      `
    ],
    final: `
    <div class='divisor'></div>
    ## Conclusion
    Astro's <a href='https://astro.build/' target='_blank'>Server Islands</a> are an exciting feature that promises to revolutionize how websites are created. They allow for a backend on a static site without sacrificing the speed and simplicity of <a href='https://astro.build/' target='_blank'>Astro</a>.
    
    Although this feature is still experimental, it is something to watch for the future of Astro and the creation of modern, fast websites.
    `,
    keywords: ['Astro', 'Server Islands', 'Backend', 'Astro 4.12', 'Next.js', 'PPR']
  },
  {
    id: 'the-new-chinese-processors-that-threaten-intel-and-amd_EN__2',
    newCode: '2',
    lang: 'en',
    readTime: '6 minutes',
    sections: ['PCs & Laptops'],
    title: 'The New Chinese Processors That Threaten Intel and AMD',
    mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1721959602/imagen_keqvdf.jpg',
    thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1721959902/loongson_thumbnail_xfq7dk.jpg',
    ImageAlt: 'Image of the new Chinese processors',
    authorId: 'alberto-luna',
    date: '07-31-2024',
    miniDesc: 'The new Loongson processors represent a threat to Intel and AMD. Discover their features and how they could change the semiconductor industry landscape.',
    content: [
      `
    The new <a href='https://www.loongson.cn' target='_blank'>Loongson</a> processors represent the Asian giant's response to the belief that China cannot develop its own processors. In July 2024, the new <a href='https://www.loongson.cn/EN/product/show?id=11' target='_blank'>Loongson LS3C6000</a> processor was introduced, designed mainly for servers but also suitable for desktop computers. This launch is a harbinger of what could happen in the not-too-distant future.
  
    <div class='divisor'></div>
  
    ## Key Features
  
    This processor has very interesting features that have nothing to envy from Intel or AMD processors. Some of its most notable features are:
  
    * **Frequency:** 2.0-2.5GHz
    * **Maximum computing speed:** 240 GFLOPS
    * **Physical cores:** 4
    * **Logical cores:** 8
    * **High-speed cache:** The processor has a private cache for each core and a shared cache of 16MB.
    * **Packaging:** Comes in a 35mm×35mm BGA package with 1,190 pins.
    * **Power management:** Compatible with dynamic voltage scaling in the main voltage domains.
    * **Typical power consumption:** 38W
  
    <div class='divisor'></div>
  
    ## What Can You Do with This Processor?
  
    ![loongson LS3C6000](https://res.cloudinary.com/dis6nw4o7/image/upload/v1721959602/imagen_1_ntatsf.jpg)
  
    Due to its standout features, this processor can be used in various areas such as:
  
    * **Servers:** Ideal for servers due to its large number of cores and maximum computing speed of 240 GFLOPS.
    * **Workstations:** With a frequency of 2.0-2.5GHz and 8 logical cores, it is suitable for workstations.
    * **Desktop computers:** Enough to meet the needs of an average user.
    * **Data centers:** Perfect for data centers thanks to its computing speed and numerous cores.
    * **Gaming:** Although not its main focus, it can be used for gaming due to its 8 logical cores and frequency.
  
      `,
      `
    <div class='divisor'></div>
    ## Are These New Processors a Threat to Intel and AMD?
  
    While this processor is not as powerful as the top-tier processors from Intel or AMD, it poses a threat to these two giants. The Loongson 3A6000 shows a significant improvement in performance <a href='https://www.loongson.cn/EN/product/show?id=11' target='_blank'>compared to the Loongson 3A5000, with a 60% and 90% increase</a>. If this evolution continues, it could become a major competitor for Intel and AMD in the near future.
  
    <div class='divisor'></div>
    ## What Would Be the Position of the United States and the West?
  
    Although this processor does not currently pose a significant threat to the industry, it is an example of what China can achieve in the future. The United States and the West must be prepared for what may happen. The possibility of this processor being sold massively in the West is complicated due to the trade war between China and the United States, and the situation in Taiwan. In 2024, China injected more than <a href='https://www.france24.com/es/minuto-a-minuto/20240528-china-invierte-m%C3%A1s-de-47-000-millones-de-d%C3%B3lares-para-reforzar-su-industria-de-chips' target='_blank'>47 billion dollars</a> into an investment fund to strengthen its semiconductor development and research industry, indicating its strong commitment to this sector.
      `
    ],
    final: `
    <div class='divisor'></div>
    ## Conclusion
    The new Loongson processors represent a significant advance in the semiconductor industry and a showcase of China's potential in this field. Although they do not currently pose a major threat to Intel and AMD, it is a harbinger of what could happen in the near future. The United States and the West must be prepared for what may happen and not underestimate China's potential in this sector.
    <div class='divisor'></div>
    `,
    keywords: ['Loongson', 'Processors', 'China', 'Intel', 'AMD', 'Semiconductors']
  },
  {
    id: 'lubuntu-the-lightweight-operating-system-for-old-computers_EN__3',
    newCode: '3',
    lang: 'en',
    readTime: '6 minutes',
    sections: ['PCs & Laptops'],
    title: 'Lubuntu: The Lightweight Operating System for Old Computers',
    mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722379967/astro_thumbnail_w1hzc9.jpg',
    thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722380053/astro_thumbnail_1_asxc6z.jpg',
    ImageAlt: 'Image of Lubuntu',
    authorId: 'alberto-luna',
    date: '07-31-2024',
    miniDesc: 'What is Lubuntu, and how can it help you revive your old computer? Discover its features, advantages, disadvantages, and whether it is suitable for you.',
    content: [
      `
  <a href='https://lubuntu.me/' target='_blank'>Lubuntu</a> is a variant of <a href='https://ubuntu.com/' target='_blank'>Ubuntu</a> designed to offer efficient performance on older or less powerful hardware.
  
  Its name, a combination of “lightweight” and <a href='https://ubuntu.com/' target='_blank'>Ubuntu</a>,” reflects its goal: to provide a lightweight yet functional operating system. 
  
  It uses the LXQt desktop environment to minimize hardware requirements while maintaining a modern and clean appearance.
  
  <div class='divisor'></div>
  
  ## History and Evolution
  
  <a href='https://lubuntu.me/' target='_blank'>Lubuntu</a> began in 2009 as a community project led by Mario Behling, aiming to develop a minimalist version of <a href='https://ubuntu.com/' target='_blank'>Ubuntu</a>. 
  
  The first version was released as a live CD in September 2009, with a full installation available the following year. Since then, <a href='https://lubuntu.me/' target='_blank'>Lubuntu</a> has become an official option within the Ubuntu family, with versions released every six months and the LTS (Long-Term Support) version starting in 2013.
  
  <div class='divisor'></div>
  ## System Requirements
  
  One of the main attractions of <a href='https://lubuntu.me/' target='_blank'>Lubuntu</a> is its low resource consumption. 
  
  The minimum requirements include a 700 MHz processor, 512 MB of RAM, and 5 GB of storage. As of version 19.04, <a href='https://lubuntu.me/' target='_blank'>Lubuntu</a> no longer supports 32-bit systems, focusing on more modern hardware to offer a better experience.
  
    <div class='divisor'></div>
  ## Programs and Applications
  
  <a href='https://lubuntu.me/' target='_blank'>Lubuntu</a> comes with a selection of pre-installed programs suitable for daily tasks, including Featherpad for text editing, LibreOffice Writer and Calc for office work, and Mozilla Firefox as a web browser. 
  
  It also features VLC media player and NetworkManager for network management. Users can install a wide range of additional applications according to their needs.
  
      `,
      `
        <div class='divisor'></div>
    ## Distinctive Features
  
  <a href='https://lubuntu.me/' target='_blank'>Lubuntu</a> differs from Ubuntu primarily in its user environment and hardware requirements. LXQt provides a clear and minimalist interface that conserves resources and ensures smooth performance even on older machines. 
  
  This approach allows new users to adapt quickly, although the system omits some advanced graphical effects.
  
    <div class='divisor'></div>
  ## Advantages and Disadvantages
  
  ### Advantages
  
  - **Low Hardware Requirements**: Ideal for older or less powerful computers, <a href='https://lubuntu.me/' target='_blank'>Lubuntu</a> offers efficient performance with minimal resource consumption.
  - **Free and Ad-Free**: No associated costs and no intrusive ads.
  - **Abundant Software**: Compatible with numerous free and accessible applications.
  - **Ease of Use**: The LXQt interface is intuitive and accessible, with support in Spanish.
  - **Support and Community**: Regular updates and an active user community.
  
    <div class='divisor'></div>
  ### Disadvantages
  
  - **Software Limitations**: Some larger applications may not work adequately, and Windows applications may require additional tools.
  - **Visual Appearance**: The minimalist design may lack some advanced graphical effects and functionalities.
  - **Initial Setup**: May require additional knowledge for users coming from other operating systems like Windows or macOS.
  
    <div class='divisor'></div>
  ## Who Is Lubuntu Recommended For?
  
  ![Ubuntu apps open](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722380221/lubuntu_apps_nujn6f.jpg)
  
  <a href='https://lubuntu.me/' target='_blank'>Lubuntu</a> is especially suitable for users who need to revitalize old or limited hardware. With its focus on efficiency and its modern desktop environment, it can be a viable option even for newer computers. 
  
  However, if running heavy applications or seeking an advanced graphical experience is a priority, other Linux distributions may be more appropriate.
  <a href='https://lubuntu.me/' target='_blank'>Lubuntu</a> 20.04: Lightness and Efficiency in Action
  
    <div class='divisor'></div>
  ## Description and Features
  
  <a href='https://lubuntu.me/' target='_blank'>Lubuntu</a> 20.04 stands out for its lightness and LXQt desktop environment, minimizing system resource consumption. 
  
  This operating system is ideal for rejuvenating old computers, allowing them to function as media centers or backup machines. With a 5.4 kernel, <a href='https://lubuntu.me/' target='_blank'>Lubuntu</a> 20.04 remains aligned with the rest of the distributions of its version.
  
    <div class='divisor'></div>
  ## Management and Configuration
  
  <a href='https://lubuntu.me/' target='_blank'>Lubuntu</a>'s window manager is agile and reliable, although system customization, such as changing the wallpaper, may be less intuitive for new users. The lack of an integrated software center is another point to consider, although the Snap Store or other software centers can be installed.
      `
    ],
    final: `
    <div class='divisor'></div>
    ## Recommendations
    <a href='https://lubuntu.me/' target='_blank'>Lubuntu</a> 20.04 is ideal for experienced Linux users looking to optimize old hardware. 
    
    The distribution offers a solid experience, but it may not be the most beginner-friendly option due to the need for additional setup knowledge. 
    
    It is recommended to try it if you have experience with Linux and want to revive an old computer.
    <div class='divisor'></div>
    `,
    keywords: ['Lubuntu', 'Ubuntu', 'LXQt', 'Operating System', 'Old Hardware']
  },
  {
    id: 'mac-mini-with-m4-closer-than-you-think_EN__4',
    newCode: '4',
    lang: 'en',
    readTime: '4 minutes',
    sections: ['PCs & Laptops'],
    title: 'Mac mini with M4: Closer Than You Think?',
    mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722380582/mac-mini_ajccfc.jpg',
    thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722380579/mac_mini_thumbnail_baszqp.jpg',
    ImageAlt: 'Image of Mac mini',
    authorId: 'alberto-luna',
    date: '07-31-2024',
    miniDesc: 'The Mac mini with M4 could be a reality sooner than you think. Discover why Apple might be skipping the M3 and what to expect from this new version.',
    content: [
      `
  
  The Mac mini is a compact and versatile desktop computer that has been popular among Apple users for years, thanks to its minimalist design and good value for money—something rare in the Apple world. 
  
  The incorporation of an <a href='https://www.apple.com/mx/newsroom/2024/05/apple-introduces-m4-chip/' target='_blank'>M4 chip</a> in the Mac mini would represent an attractive option for those seeking improved performance and greater energy efficiency. 
  
  With the <a href='https://www.apple.com/mx/newsroom/2024/05/apple-introduces-m4-chip/' target='_blank'>M4 chip</a>, Apple could offer a faster and smoother user experience, along with longer battery life.
  
    <div class='divisor'></div>
  ## Why is there no Mac mini with M3?
  
  It's been two years since the launch of the Mac mini with M2, and users have been eagerly awaiting an update. 
  
  Although the <a href='https://www.apple.com/mx/mac-mini/' target='_blank'>Mac Mini with the M2</a> remains a solid option for many, the possibility of a Mac mini with an M3 chip seems increasingly distant. 
  
  Instead, Apple's M4 chips are already a reality, suggesting that Apple might be skipping the M3 generation for some devices, especially the Mac mini.
  
      `,
      `
        <div class='divisor'></div>
  ## What to Expect from a Mac mini with M4?
  
  ![M4 Chip](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722380578/m4_chip_mhiu0f.jpg)
  
  A Mac mini with M4 could offer significantly improved performance compared to the model with M2. 
  
  With the <a href='https://www.apple.com/mx/newsroom/2024/05/apple-introduces-m4-chip/' target='_blank'>M4 chip</a>, Apple would have the opportunity to introduce new features and capabilities that were not possible with the M2 chip, thanks to its 10 cores and an improved GPU. This would allow users to enjoy a smoother and more efficient overall experience.
  
      `
    ],
    final: `
    <div class='divisor'></div>
    ## When to Expect a Mac mini with M4?
    The last update to the Mac mini was in January 2022, so it is expected that Apple will release a Mac mini update with M4 in 2024. 
    
    Although there is no official release date yet, rumors suggest that Apple could announce the new Mac mini with M4 in late 2024.
    <div class='divisor'></div>
    `,
    keywords: ['Mac mini', 'M4', 'Apple', 'M4 Chip', 'Mac mini with M4']
  },
  {
    id: 'meta-ai-on-whatsapp-a-digital-assistant_EN__5',
    newCode: '5',
    lang: 'en',
    readTime: '5 minutes',
    sections: ['AI', 'Smartphones & Tablets'],
    title: 'Meta AI on WhatsApp: A Digital Assistant',
    mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722380931/watsapp_tcv7hn.jpg',
    thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722380928/wattsapp_thumbnail_sokz3d.jpg',
    ImageAlt: 'Image of WhatsApp with Meta AI',
    authorId: 'alberto-luna',
    date: '07-31-2024',
    miniDesc: 'Discover how Meta AI integrates into WhatsApp to offer a versatile and friendly digital assistant. Learn about its areas of expertise and the allowed topics of conversation.',
    content: [
      `
  
  Since its launch, Meta AI's artificial intelligence chatbot, marked with a blue circle on WhatsApp, has captured the attention of many users.
  
  The chatbot integrates into users' contact lists, who use it for various purposes. From casual interactions, similar to those with a friend, to academic assistance, especially useful for students.
  
  <div class='divisor'></div>
  ## Meta AI's Areas of Expertise
  
  Meta AI stands out for its ability to offer reading recommendations, book analyses, and reviews, which are valuable for book enthusiasts and book clubs. 
  
  In the educational field, it provides learning strategies and technological resources for students and educators.
  
  Additionally, the chatbot offers advice on buying mobile phones and using artificial intelligence. It also covers current events, including political, environmental, sports news and more.
  
  <div class='divisor'></div>
  ## ✅ Allowed Topics of Conversation
  
  Meta AI can participate in discussions on a wide variety of topics, including:
  
  - **Science:** biology, physics, chemistry, space, etc.
  - **Art and culture:** music, movies, literature, history, etc.
  - **Health and wellness:** nutrition, exercise, mindfulness, etc.
  - **Travel and adventures:** destinations, experiences, tips, etc.
  - **Cooking and gastronomy:** recipes, techniques, restaurants, etc.
  - **Sports and fitness:** training, teams, events, etc.
  - **Philosophy and psychology:** thoughts, theories, self-help, etc.
  
  Meta AI ensures that there are no limits to conversation topics and is willing to listen and provide information in any area of interest.
  
  <div class='divisor'></div>
  ## 🚫 Restricted Topics by Meta AI
  
  The chatbot has restrictions designed to maintain a safe and respectful environment. Prohibited topics include:
  
  - **Explicit or inappropriate content:** avoid conversations about sexual, offensive, or rude material.
  - **Incitement to violence and discrimination:** blocks racist, homophobic, xenophobic messages, and any hate speech.
  - **Disclosure of personal information:** protects sensitive data like addresses and phone numbers.
  
      `,
      `
        <div class='divisor'></div>
  ## Medical and Legal Recommendations
  
  ![AI not trained](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722380926/not_ai_u9gdkz.jpg)
  
  Meta AI is not trained to provide medical diagnoses or legal advice. While it can provide general information, it does not replace consulting professionals in these areas.
  
  Additionally, it avoids discussions on illegal or harmful activities, such as drugs or hacking, redirecting conversations towards positive and constructive topics.
  
  
      `
    ],
    final: `
    <div class='divisor'></div>
  
    ## Conclusion
  
    Meta AI's chatbot on WhatsApp is presented as a versatile and friendly digital assistant capable of interacting in multiple areas of interest. 
    
    Its ability to offer recommendations, advice, and entertainment makes it a valuable tool for users of all ages. 
    
    However, it's important to remember that, as an artificial intelligence, its responses may be limited in certain contexts, so it is recommended to complement its use with additional information sources.
    `,
    keywords: ['Meta AI', 'WhatsApp', 'Digital Assistant', 'Chatbot', 'Artificial Intelligence']
  },
  {
    id: 'best-gaming-pc-under-500-usd_EN__6',
    newCode: '6',
    lang: 'en',
    readTime: '5 minutes',
    sections: ['Gaming', 'PCs & Laptops'],
    title: 'Best Gaming PC for Under $500 USD',
    mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722400055/pc-corsair_um3x3c.jpg',
    thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722400052/pc-corsair-thumbnail_ywbovu.jpg',
    ImageAlt: 'Gaming PC Image',
    authorId: 'alberto-luna',
    date: '07-31-2024',
    miniDesc: 'Discover how to build an affordable gaming PC for under $500 USD. Learn about the necessary components and recommendations to enjoy your favorite games.',
    content: [
      `
      Today, we’re going to look at an affordable gaming PC that you can build for under $500 USD. 
      
      This budget is ideal for those who want to get into gaming without spending a fortune. 
      
      While it's not a high-end machine, it can run most current games with decent to good graphical quality. Additionally, this PC has an advantage that we will discuss later.
    
      <div class='divisor'></div>
      ## (Case) Corsair 4000D Airflow ATX Case
      
      ![Corsair 4000D](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722400678/40c8f07e-407e-423f-abe1-ced4c8d19e6e.png)
      
      The <a href='https://www.amazon.com.mx/Corsair-4000D-Airflow-Templado-Media-Torre/dp/B08C74694Z/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3I0ONEEK6NVHM&dib=eyJ2IjoiMSJ9.fbOupylx0kZoWtLTxSA2U4ug1xKXVF5RQyQsCkxs3el2N7Uz_1jnTtnPBUJ4NAV_Cy8AeYKLe-gt_ZP5gE10SpdbT4CHhfrvISKHuIay732eumOCgOhTWMbSz8jk1o5F2F7wIt0_osgvoxzUSxwhhY4RrKrd4xxZelRhtekHmNDJA5wDSFS6FbOpDzwUS0zmoDbzRQUxr7xxEaFYmUKHqH_jpDRPTJPkvkDqaeuPnJAui7n4eHf3Z4uWrtLn4ItSBgVXoWZBdQ3uR7NsCB85lr7KA0tKk80MkoDZhIy3WuQ.O8zUFMmnX7cwW6G2LcuP5OMXqOI2R-Ki9MLM6TOlboQ&dib_tag=se&keywords=Corsair+4000D+Airflow+Chasis+ATX&qid=1722282398&s=electronics&sprefix=%2Celectronics%2C314&sr=1-1&ufe=app_do%3Aamzn1.fos.242f5c11-6cfd-40d6-91f6-be3d1974080c' target='_blank'>Corsair 4000D</a> is a high-quality PC case designed to provide excellent airflow and a robust build. It features a solid steel front panel with ample ventilation channels, ensuring efficient cooling.
    
      **Note:** The case includes two pre-installed 120 mm fans, but you can add more fans or a liquid cooling system for even better cooling of your PC.
    
      <div class='divisor'></div>
      ## (Motherboard) GIGABYTE B550M DS3H
      
      ![GIGABYTE B550M DS3H](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722281805/0ac90f2d-ef44-4f6a-b898-68e0f155d742.png)
      
      The <a href='https://www.amazon.com.mx/Gigabyte-889523022917-B550M-DS3H/dp/B089FY7QT1/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=L9MPCJT1PS4V&dib=eyJ2IjoiMSJ9.fbhUYdqrZF10AAoIZbnfp6t6fne_xwpUL07OpIsL1gPS_ygwwpIqkz_3J_3BXpUbEzIyOAIbKYJez-_65GLRyB-GxC-xSrTKDXW5t6D_fDhc6p-EHlDG1HrcbFQG7lKzACDKEbq744JSSSZkVxp0Vs1hvRyjfE2hNaD9NhpjXRGK33IvUZJ8wL82ey8y11S9HeJc2DNqD54rqwIxJdSBbvESQMUtmzlnO9ul4fOgwHx-zE-YIV0j3cSEL4tXA_JF4GOLARSEYLUE54TU_UircTVqdNhOKuzXpsHGOOf4u74.m2SLhMRy6aeb4Nisphj2EeqhY4dHioB-0LgNGON_UxI&dib_tag=se&keywords=GIGABYTE+B550M+DS3H&qid=1722282439&sprefix=gigabyte+b550m+ds3h%2Caps%2C296&sr=8-1&ufe=app_do%3Aamzn1.fos.242f5c11-6cfd-40d6-91f6-be3d1974080c' target='_blank'>GIGABYTE B550M DS3H</a> motherboard is an excellent choice for building a powerful and versatile PC. It is designed to work with AMD Ryzen 3rd generation processors and provides stable and efficient power delivery thanks to its digital VRM system. Enjoy high data transfer speeds with PCIe 4.0 slots.
    
      **Note:** This motherboard is compatible with 5th generation Ryzen processors, so you can upgrade your CPU in the future.
      `,
      `
      <div class='divisor'></div>
      ## (Processor) AMD Ryzen 5 5600G
      
      ![AMD Ryzen 5 5600G](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722281861/dd7753d8-159d-486e-a89a-f7902c254199.png)
      
      <a href='https://www.amazon.com.mx/AMD-Procesador-RyzenTM-5600G-Socket-AM4-3-90GHz/dp/B092L9GF5N/ref=asc_df_B092L9GF5N/?tag=gledskshopmx-20&linkCode=df0&hvadid=522538993191&hvpos=&hvnetw=g&hvrand=5150667329080268141&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9129474&hvtargid=pla-1250272768452&psc=1&mcid=b0e71b2a988b3c9ab87a5068dd10bf63' target='_blank'>The Ryzen 5 5600G</a> is a high-performance processor designed to provide a smooth gaming and content creation experience. It combines a powerful 6-core CPU with integrated Radeon graphics, making it an excellent choice for those looking to build a versatile PC without the need for a dedicated graphics card.
    
      **Note:** This processor is compatible with the motherboard we chose, so you won’t have any compatibility issues.
    
      <div class='divisor'></div>
      ## (RAM) XPG SPECTRIX D50 DDR4 RGB
      
      ![XPG SPECTRIX D50](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722282035/c49fdda7-5bdb-4029-bee8-0b3d2faad91e.png)
      
      With speeds of up to 4133 MHz and a maximum capacity of 32 GB, the XPG <a href='https://www.amazon.com.mx/XPG-D50-PC4-25600-288-Pins-AX4U32008G16A-DW50/dp/B092G5Y6QP/ref=sr_1_8?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=EBI6IDCIGXJJ&dib=eyJ2IjoiMSJ9.hIT5D5EetKTlhQnOOY-dZ49jjQ9NQbuvTMcb5iaU53VI-PV5Ho5Br041XQoZhnYKLfstj4ZJ2NfoLH82rZ4VNX7k14DGEFx1oq2hLrX_j21X4e8jMFZvYg2l6AkrKJJBXZlDGPEIVUHj9qInr-7EdjW8nIlb8ukdJKuPZZ3BIJ-U_CC73nvXo2uYtNIt0k44o2BVRy1_9LrcrqaOq7hgVg9H3qzwI9Qxqyodz_DPkBwOxKHbqF-kN3caYh6PqjrUV4usHKQjK2MePOgu1wkLeWZ1KDG_-AFzmacvQPVQAfs.BNfQgOevIjyEyG6-yZ2elbBvCpSG-KCae4toBM3dbd8&dib_tag=se&keywords=XPG+SPECTRIX+D50+DDR4+RGB&qid=1722282463&sprefix=xpg+spectrix+d50+ddr4+rgb%2Caps%2C150&sr=8-8&ufe=app_do%3Aamzn1.fos.242f5c11-6cfd-40d6-91f6-be3d1974080c' target='_blank'>SPECTRIX D50</a> is an excellent memory option. Additionally, it features a sleek design and an impressive triangular RGB light bar.
    
      **Note:** With 16 GB of RAM, you’ll have enough memory for most games and daily tasks. If you need more, you can buy two 16 GB modules for a total of 32 GB, although this would involve additional cost.
      `,
      `
      <div class='divisor'></div>
      ## (Storage) Kingston M.2, Capacity: 1000 GB
      
      ![Kingston M.2](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722281964/2e882e47-a6a5-4c1e-a83e-7d615244cfde.png)
      
      This <a href='https://www.amazon.com.mx/Kingston-SSD-NV2-Capacidad-Escritura/dp/B0BBWH1R8H/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3ND4QXJJ47AST&dib=eyJ2IjoiMSJ9.vKY1xmCpeCeXv_wCylORVJkksyMSpmRtyAPJ92INk9TQmvSumwBhCIGEU2dxBk69xlh9c3gp7Jid4jKz7OGnqG_CbIYkGmm-vvcpzSjZyAm6eR3ShPE-GwzmMUUWKEE3vEddI2bZXMFCkUIKkAQkBw1q9L0ks-ONfT1F9iaQ4hb5qy7W-iiY9cuan5g0bcz44VEZxqQx2-RIuV2UMPJSjgneHu2Z5dW-yIecIE24L88-Aglp3vuBk-3eqZg1x9YCVDMQTsrWDRV0wEJqU55nsvwH_DSSx8oKFs_i63Yr1q0.FDcwJ02eyMzbG70oRLhCk8ht3ht7jJ83cll5o2Ny7EM&dib_tag=se&keywords=Kingston+M.2%2C+Capacidad%3A+1000+GB&qid=1722282491&sprefix=kingston+m.2+capacidad+1000+gb%2Caps%2C137&sr=8-1&ufe=app_do%3Aamzn1.fos.19d97c10-80a3-4566-8ed8-d0331185c744' target='_blank'>Kingston NVMe Gen 4x4 SSD</a> is perfect for compact systems like laptops and small form factor PCs. Thanks to its slim, single-sided design, it fits easily into tight spaces. With ultra-fast read and write speeds, you can load applications and files in the blink of an eye.
    
      **Note:** We could have saved more with just 500 GB or by choosing a traditional SSD, but this memory offers greater speed and capacity for a minimal price difference.
      `,
      `
      <div class='divisor'></div>
      ## (Power Supply) EVGA N1, 550W
      
      ![EVGA N1, 550W](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722282085/c4af53f8-be74-4564-b7a8-2c5ce8d15e27.png)
      
      The <a href='https://www.amazon.com.mx/EVGA-550W-Power-Supply-100-N1-0550-L1/dp/B01LYGJL0E/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1TC9EOKWZTUR4&dib=eyJ2IjoiMSJ9.hXNucVNx7dK9_tQRnpAS9Lo9AFa2xH0TWhDstZ8WogYYM_opRqrQknNmJaqMfwpFd1WLxrGcmdo3MOVHIGjYiHLWXQOgDBKswiavZy3jkgQyJsD1xouAfBk_-G85k_FdlvDX3nCIIztJU8zvP_TdUeAmst1v1JC2rQBMZqaL-kKyFSTx-LiIdgEle-0wQRtrAu_tZTChVaZaarcbDklzq7QVUjGPYsG58UtOzHzc21tZHkW__YV8p1mVj2dFHzkSWozk_MnwNYVi4yp3z97iwq4Iuswr3hCjv8CVPkpQJ0c.X15umhfov218hYP9dxNEMapLIrp9vIh7pzPOyKoU3GY&dib_tag=se&keywords=EVGA+N1%2C+550W&qid=1722282541&sprefix=evga+n1+550w%2Caps%2C152&sr=8-1&ufe=app_do%3Aamzn1.fos.242f5c11-6cfd-40d6-91f6-be3d1974080c' target='_blank'>EVGA 550W</a> power supply features a 120 mm fan with a sleeve bearing. This design, combined with an intelligent control system, allows for almost silent operation. It also includes multiple electronic protections such as OVP, UVP, OCP, OPP, and SCP to ensure the safety of your system and prevent damage.
    
      **Note:** Many people think this is the least important component, but a poor choice of power supply can ruin your entire PC. With this power supply, you won’t have any issues.
      `
    ],    
    final: `
    <div class='divisor'></div>
  
  ## Total: $9,226.37 MXN = 491.4 USD
  
  ![Total PC](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722282205/da095e3e-fedb-42a9-a60f-c48213175655.png)
  
  <div class='divisor'></div>
  ## Add a Graphics Card in the Future
  
  ### For 1080p Gaming with High Details
  
  - **NVIDIA GeForce RTX 3060:** Offers an excellent balance between price and performance, allowing you to play most current titles with high details and high refresh rates.
  - **AMD Radeon RX 6600 XT:** Another excellent option with performance similar to the RTX 3060 but at a slightly lower price.
  
  ### For 1440p or 4K Gaming
  
  - **NVIDIA GeForce RTX 3070:** Ideal for those looking to play at higher resolutions and with ultra details.
  - **AMD Radeon RX 6700 XT:** A solid alternative to the RTX 3070, providing similar performance in many games.
  
  ### For a Tight Budget
  
  - **NVIDIA GeForce RTX 3050:** A more affordable option for those looking to boost their system's performance without spending too much.
  - **AMD Radeon RX 6600:** Similar to the RTX 3050 but with a different focus on certain technologies.
  
    <div class='divisor'></div>
    `,
    keywords: ['Gaming PC', 'Gaming', 'Corsair', 'AMD Ryzen 5 5600G', 'EVGA N1']
  },
  {
    id: 'google-pixel-9-pro-fold-details-and-expectations_EN__7',
    newCode: '7',
    lang: 'en',
    readTime: '4 minutes',
    sections: ['Smartphones & Tablets'],
    title: 'Google Pixel 9 Pro Fold: Details and Expectations',
    mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722400968/pixel-fold_r9f5p5.jpg',
    thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722400964/pixel-fold-thumbnail_dtjctv.jpg',
    ImageAlt: 'Google Pixel 9 Pro Fold',
    authorId: 'alberto-luna',
    date: '07-31-2024',
    miniDesc: 'Details and expectations for the Google Pixel 9 Pro Fold, Google\'s new foldable device. Learn about its design, specifications, and release date.',
    content: [
      `
      The Google Pixel 9 Pro Fold, the latest addition to Google's foldable device lineup, has been revealed in official photos. 
      
      They showcase a design that confirms recent rumors. This model joins the Pixel 9 and Pixel 9 Pro as part of Google's new series.
  
      The Pixel 9 Pro Fold, while similar to the Pixel 9 Pro in several aspects, features distinctive characteristics of a foldable device. 
      
      Notable are the hinge and a rear camera module with a double-height configuration, different from the previously released Pixel Fold. 
      
      Additionally, the Pixel 9 Pro Fold's design appears less squared and will be available in two colors: obsidian and porcelain.
  
      <div class='divisor'></div>
      ## Specifications and Comparison
  
      Leaked images suggest that the external screen of the Pixel 9 Pro Fold will have a diagonal of 6.3 inches, while the internal screen will reach 8 inches. 
      
      Compared to Samsung's Galaxy Z Fold6, the bezels on both screens of the Pixel 9 Pro Fold seem less refined, indicating that Google is still perfecting its design.
  
      <div class='divisor'></div>
      ## Official Announcement and New Features
  
      Anticipating its launch due to leaks, Google has set the official presentation for August 13 at the Made by Google event in Mountain View. 
      
      The Pixel 9 Pro Fold is expected to incorporate the Tensor G4 chip and offer up to 16 GB of RAM, highlighting its focus on artificial intelligence.
      Google Presents the Pixel 9 Pro and the Pixel 9 Pro Fold
      `,
      `
      <div class='divisor'></div>
      ## Early Launch
  
      In response to multiple leaks on social media, Google has decided to advance the launch of the Pixel 9 Pro and Pixel 9 Pro Fold. The official presentation will take place on August 13. 
      
      The Pixel 9 Pro Fold, the new addition to the series, will feature a significant redesign in its camera module and greater integration of the Gemini artificial intelligence.
  
      <div class='divisor'></div>
      ## Innovations and Design
  
      The Pixel 9 Pro Fold, an update to the 2023 Pixel Fold, will showcase a refreshed design with camera modules located in the upper left corner of the device. 
      
      This arrangement is an improvement over the previous model. New features include two camera modules, each with its own lens, and an integrated flash.
  
      <div class='divisor'></div>
      ## Advances in Artificial Intelligence
  
      ![Google Pixel 9 Pro Fold](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722400963/gemini_bta3tk.jpg)
  
      Google will also highlight the inclusion of <a href='https://gemini.google.com/' target='_blank'>Gemini</a>, its latest artificial intelligence, in these new models. 
      
      This technology will enable users to take advantage of advanced functions in text drafting and other services. The integration of AI, which was already a focal point in the Pixel 8, continues to be a priority for the company.
      Details of the Google Pixel 9 Pro Fold: Design and Specifications
  
      <div class='divisor'></div>
      ## Comparison with Competitors
  
      Unlike the Samsung Galaxy Z Fold6, the Pixel 9 Pro Fold features a design with curved bezels at the corners. Renders also suggest that the device will be available in obsidian and porcelain colors. 
      
      Although the price has not yet been confirmed, the previous generation Pixel Fold is currently on sale for $1,299.
      `
    ],
    final: `
    <div class='divisor'></div>
    ## What to Expect from the Pixel 9 Pro Fold?

    Google's Pixel 9 Pro Fold promises to be an innovative device with a sleek design and advanced features. 
    
    With the official presentation scheduled for August 13, technology enthusiasts are eagerly awaiting more details about this new foldable model. 
    
    The combination of Google's artificial intelligence and a modern design could make the Pixel 9 Pro Fold a standout competitor in the foldable device market.

    `,
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
    miniDesc: 'Learn how to improve Visual Studio Code performance with these tips and tricks. Discover how to disable unnecessary extensions, optimize settings, and allocate more RAM.',
    content: [
      `
      ## 1. Disable Unnecessary Extensions
  
      ![Disable Visual Studio Code Extensions](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722131687/8270978d-d108-4824-8b4a-995587b572a9.png)
  
      It is common for some Visual Studio Code extensions to consume many system resources, which can slow down the editor's performance. To improve Visual Studio Code performance, it is advisable to disable extensions that are not frequently used or are not essential for your workflow. To disable an extension, follow these steps:
  
      1. Open Visual Studio Code.
      2. Click on the "Extensions" tab in the left sidebar.
      3. Search for the extension you want to disable.
      4. Click the gear icon next to the extension and select "Disable."
  
      <div class='divisor'></div>
      ## 2. Optimize Visual Studio Code Settings
  
      Visual Studio Code offers a wide range of configuration options that can help you optimize the editor's performance. Some common settings you can adjust to improve performance include:
  
      - Disable change detection in large files.
      - Adjust the editor memory settings.
      - Disable change detection in remote files.
      - Adjust the language server memory settings.
  
      To access Visual Studio Code settings, follow these steps:
  
      1. Open Visual Studio Code.
      2. Click the gear icon in the lower-left corner of the window.
      3. Select "Settings" from the dropdown menu.
      4. Search for the settings you want to adjust and modify them as needed.
      `,
      `
      <div class='divisor'></div>
      ## 3. Allocate More RAM to Visual Studio Code if Using TypeScript
  
      ![Increase RAM for TypeScript](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722131896/fab76d7c-5235-41ef-a82a-90b365ba4fc6.png)
  
      If you work with TypeScript in Visual Studio Code, you might want to allocate more RAM to the editor to improve performance. You can do this by modifying the TypeScript language server memory settings in Visual Studio Code. To allocate more RAM to TypeScript, follow these steps:
  
      1. Open Visual Studio Code.
      2. Click the gear icon in the lower-left corner of the window.
      3. Select "Settings" from the dropdown menu.
      4. Search for "memory" in the search bar and modify the memory settings for TypeScript as needed.
  
      <div class='divisor'></div>
      ## 4. Consider Upgrading to an SSD
  
      If your computer has a mechanical hard drive (HDD) instead of a solid-state drive (SSD), consider upgrading to an SSD to improve overall performance of Visual Studio Code and your system in general. 
      
      SSDs are significantly faster than HDDs and can greatly accelerate file loading times and overall system responsiveness.
      `,
    ],
    final: `
    <div class='divisor'></div>
    ## Conclusion
  
    Improving Visual Studio Code performance can be crucial for optimizing your workflow and increasing your productivity as a developer. 
    
    By following these tips and optimizing Visual Studio Code settings, you can achieve a faster and more efficient editor that allows you to work more effectively on your software development projects.

    `,
    keywords: ['Visual Studio Code', 'Software Development', 'Programming', 'Visual Studio Code Extensions', 'Visual Studio Code Performance']
  },
  {
    id: 'thunderbolt-k78-keyboard-review_EN__9',
    newCode: '9',
    lang: 'en',
    readTime: '6 minutes',
    sections: ['Reviews', 'Gaming'],
    title: 'Thunderbolt K78 Keyboard Review',
    mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722401307/thunder-teclado_dqf34g.jpg',
    thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722401305/thunder_teclado_thumbnail_cgjcs0.jpg',
    ImageAlt: 'Thunderbolt K78 Keyboard',
    authorId: 'alberto-luna',
    date: '07-31-2024',
    miniDesc: 'Discover the pros and cons of the Thunderbolt K78 keyboard after two months of continuous use. Learn about its features, what\'s included in the box, and our conclusion.',
    content: [
      `
      The <a href='https://articulo.mercadolibre.com.mx/MLM-2473633700-espanol-teclado-mecanico-gamer-wired-thunderobot-k78-rgb-_JM' target='_blank'>Thunderbolt K78</a> keyboard is a mechanical keyboard that is a more affordable alternative to high-end mechanical keyboards. However, this does not mean it is a bad keyboard; in fact, it is quite acceptable for the price. After two months of continuous use, here are the pros and cons of this keyboard.
  
      <div class='divisor'></div>
      ## Features
  
      - **Language:** Latin American Spanish
      - **Layout:** QWERTY
      - **Switches:** Outemu Red or Brown
      - **Backlight Color:** RGB
      - **Keyboard Color:** White/Black
      - **Ergonomic and suitable for various uses.**
      - **Includes numeric keypad.**
      - **Type:** Mechanical
      - **USB-C Connector**
      - **Removable Cable**
      - **Dimensions:** 100.6cm wide, 347.6mm high, and 33.5cm deep.
  
      <div class='divisor'></div>
      ## What's in the Box
  
      ![Box Contents](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722401488/thunder_caja_zrbhiw.jpg)
  
      - Thunderbolt K78 Keyboard
      - USB-C Cable
      - 2 Additional Outemu Red or Brown Switches
      - Keycap Puller
      - User Manual
      `,
      `
      <div class='divisor'></div>
      ## Pros
  
      - **Price:** The price of this keyboard is quite affordable compared to other mechanical keyboards, approximately $200 USD.
  
      - **Backlight:** The RGB backlight is quite good, allowing you to adjust the intensity or speed of the RGB lighting.
  
      - **Switches:** The Outemu Red or Brown switches are quite good; the Red switches are linear, and the Brown switches are tactile. Both are quite good for typing and gaming (Personally, we prefer the Browns due to their balance of quietness and comfort).
  
      - **Removable Cable:** The USB-C cable is removable, making it easier to transport the keyboard.
  
      - **PBT Keycaps:** The keyboard keys are made of PBT, which makes them more resistant to wear and discoloration.
  
      - **Design:** The design of the keyboard is quite good, being 78% of the size of a full keyboard, making it compact and easy to carry around.
  
      - **Plug and Play:** The keyboard is plug and play, so no driver installation is needed to use it.
  
      <div class='divisor'></div>
      ## Cons
  
      - **Build Quality:** The build quality of the keyboard is quite good, but it is entirely made of plastic.
  
      - **Software:** You can only modify the backlight using predefined settings; you cannot customize the backlight to your liking.
  
      - **Noise:** The Red switches, and even the Browns, are quite noisy. If you are looking for a silent keyboard, this might not be the one for you.
  
      - **No Wrist Rest:** The keyboard does not come with a wrist rest, which might be uncomfortable for some users.
  
      - **Limited Function Keys:** If you use all the function keys or some others like Home, End, or Delete, you will need to use the Fn key to access them.
      `,
    ],
    final: `
    <div class='divisor'></div>
    ## Conclusion
  
    The <a href='https://articulo.mercadolibre.com.mx/MLM-2473633700-espanol-teclado-mecanico-gamer-wired-thunderobot-k78-rgb-_JM' target='_blank'>Thunderbolt K78</a> keyboard is quite good for its price. If you're looking for an affordable and quality mechanical keyboard, this one is a solid choice. However, if you're looking for a quieter keyboard or a more premium design, you might want to consider a higher-end option.
  
    <div class='divisor'></div>
    `,
    keywords: ['Thunderbolt K78', 'Mechanical Keyboard', 'Gaming Keyboard', 'Outemu Red', 'Outemu Brown']
  },
  {
    id: 'what-is-searchgpt-and-why-it-will-shake-google_EN__10',
    newCode: '10',
    lang: 'en',
    readTime: '6 minutes',
    sections: ['AI'],
    title: 'What is SearchGPT and Why It Will Shake Google?',
    mainImage: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722102886/9b47cb0a-09ad-4fbc-bf21-d30ec83436d4.png',
    thumbnail: 'https://res.cloudinary.com/dis6nw4o7/image/upload/v1722102886/9b47cb0a-09ad-4fbc-bf21-d30ec83436d4.png',
    ImageAlt: 'SearchGPT',
    authorId: 'alberto-luna',
    date: '07-31-2024',
    miniDesc: 'Discover what SearchGPT is and why it might shake Google. Learn about its features, potential impact, and how you can get access to it.',
    content: [
      `
      <a href='https://openai.com/' target='_blank'>OpenAI</a>, the company behind <a href='https://chatgpt.com/' target='_blank'>ChatGPT</a>, <a href='https://openai.com/index/dall-e-3/' target='_blank'>DALLE</a>, and other AI tools used by millions, announced on July 25, 2024, their new product that promises to revolutionize the world of internet searches.
  
      <a href='https://openai.com/index/searchgpt-prototype/' target='_blank'>SearchGPT</a> is an AI-based search engine that uses OpenAI's GPT-4 model to provide more accurate and relevant search results. 
      
      This search engine leverages the power of AI to better understand user queries and deliver more relevant results faster.
      
      <div class='divisor'></div>
      ## How does SearchGPT work and what are its features?
      
      ![Characteristics](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722102759/imagen_2_roqspb.jpg)

      ### Main features of SearchGPT
      
      * **Fast and Direct Answers**: Provides updated information from the web with clear links to relevant sources.
      * **Ongoing Conversation**: Allows follow-up questions, building a shared context with each query.
      * **Collaboration with Publishers and Creators**: Promotes the discovery of publisher sites, highlighting high-quality content in a conversational interface.
      * **Clear Attribution**: Responses come with clear attribution and links so users know where the information comes from.
      `,
      `
      <div class='divisor'></div>
      ## Future of SearchGPT
  
      * **Continuous Improvements**: Plans to enhance the experience in areas such as local information and commerce.
      * **Integration with ChatGPT**: User and editor feedback will help integrate the best features of SearchGPT into ChatGPT.
  
      <div class='divisor'></div>
      ## Why will SearchGPT Shake Google?
  
      ![Google](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722103480/Dise%C3%B1o_sin_t%C3%ADtulo_1_ixexaf.png)
  
      Google has been the undisputed king of search engines for years, but SearchGPT might change that. 
      
      With the ability to better understand user queries and provide more accurate and relevant answers, SearchGPT has the potential to surpass Google in terms of search result quality.
  
      <div class='divisor'></div>
      ## How Can I Use SearchGPT?
  
      ![SearchGPT waitlist](https://res.cloudinary.com/dis6nw4o7/image/upload/v1722102886/9b47cb0a-09ad-4fbc-bf21-d30ec83436d4.png)
  
      Although SearchGPT is not yet available to the general public, you can sign up for the <a href='https://chatgpt.com/search' target='_blank'>waitlist</a> to be notified when it becomes available and gain access to this new AI-based search tool.
  
      `,
    ],
    final: `
    <div class='divisor'></div>
    ## Conclusion
  
    SearchGPT is an AI-based search engine that promises to revolutionize how we search for information online. 
    
    With its ability to better understand user queries and provide more accurate and relevant results, SearchGPT has the potential to compete with Google and other established search engines. Although it is not yet available to the general public, it is a tool to watch for the future of online searches.
  
    <div class='divisor'></div>
    `,
    keywords: ['SearchGPT', 'OpenAI', 'Artificial Intelligence', 'Google', 'ChatGPT']
  }
    
];

module.exports = { newsEs, newsEn };