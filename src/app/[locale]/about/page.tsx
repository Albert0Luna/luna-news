import '@/src/about/styles/about.css';
import { useTranslations } from 'next-intl';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { cookies } from 'next/headers';
import { Metadata } from 'next';
// import newsEs from '@/src/mock/newsEs.json';
// import newsEn from '@/src/mock/newsEn.json';
import Link from 'next/link';

export function metadata () {

  const cookieStore = cookies();
  const data = cookieStore.get('NEXT_LOCALE')?.value;
  const lang = data?.toLowerCase();

  const dynamicMetadata: Metadata = {
    //? Basic metadata
    title: `${lang === 'es' ? 'Sobre Nosotros' : 'About us'}`,
    generator: 'Luna News',
    applicationName: 'Luna News',
    referrer: 'origin-when-cross-origin',
    keywords: `${lang === 'es' 
      ? 'Sobre Nosotros, Luna News' 
      : 'About us, Luna News'
    }`,
    authors: { name: 'Alberto' },
    creator: 'Alberto Luna',
    publisher: 'Luna News',
    metadataBase: new URL('https://lunanews.tech'),
    alternates: {
      canonical: 'https://lunanews.tech/en/about',
      languages: {
        'en-US': 'https://www.lunanews.tech/en/about',
        'es-MX': 'https://www.lunanews.tech/es/about',
      },
    },
  };

  return dynamicMetadata;
};

/*
const newToRealizeEs = {
  "_id": "phishing-la-amenaza-favorita-de-los-ciberdelincuentes_ES__12",
  "new_code": "12",
  "url_es": "https://lunanews.tech/es/phishing-la-amenaza-favorita-de-los-ciberdelincuentes_ES__12",
  "url_en": "https://lunanews.tech/en/phishing-the-favorite-threat-of-cybercriminals_EN__12",
  "language": "es",
  "read_time": "6 minutos",
  "sections": ["Pc & Laptops", "Smathphones & Tablets"],
  "title": "Phishing: La amenaza favorita de los ciberdelincuentes",
  "main_image": "https://res.cloudinary.com/dis6nw4o7/image/upload/v1724252134/imagen_5_p2jdsl.jpg",
  "main_image_source": {
      "source_name": "Diseno Web Akus",
      "url": "https://disenowebakus.net"
    },
  "thumbnail_image": "https://res.cloudinary.com/dis6nw4o7/image/upload/v1724252134/imagen_5_p2jdsl.jpg",
  "image_alt": "Phising",
  "author_id": "alberto-luna",
  "summary": "El phishing es un fraude cibernético donde correos falsos roban datos personales y financieros. Identificarlo es clave para evitar ser víctima.",
  "content": ["Descripción: El phishing es una técnica de fraude donde ciberdelincuentes usan correos falsos para robar información personal y financiera. Estos mensajes parecen legítimos y redirigen a sitios web falsos. Aprender a identificarlos es crucial para proteger tus datos. Aquí te mostramos cómo prevenir el phishing.\n\n## Phishing: Amenaza pasivo-agresiva\n\n<picture><img src=\"https://res.cloudinary.com/dis6nw4o7/image/upload/v1724252450/credit_card_oh2ve0.jpg\" /><small>Source: <a href=\"https://disenowebakus.net\" target=\"_blank\">Disenowebakus</a></small></picture>\n\nEl phishing se ha vuelto una técnica popular entre los ciberdelincuentes para robar información personal delicada de usuarios, como contraseñas, cuentas bancarias y otros datos personales. A pesar de su prevalencia, aún hay personas que desconocen este término y su funcionamiento, lo que las hace vulnerables. Aprender a evitar el robo de datos por suplantación de identidad es crucial. Dedicar cinco minutos de tu día podría ahorrarte meses de problemas.\n\n## ¿Qué es el phishing?\n\n<picture><img src=\"https://res.cloudinary.com/dis6nw4o7/image/upload/v1724252811/phising-ads_jf3fym.jpg\" /><small>Source: <a href=\"https://infomedia.es\" target=\"_blank\">Infomedia</a></small></picture>\n\nEl phishing es una forma de **suplantación de identidad a través de correos electrónicos** que parecen legítimos, pero no lo son. Estos correos electrónicos suelen solicitar información personal y datos bancarios con una justificación falsa. Por ejemplo, pueden parecer correos \"legítimos\" de tu banco, afirmando que tu cuenta ha sido comprometida y que debes cambiar la contraseña. El correo incluirá una URL que te dirigirá a un sitio \"copia\" (un sitio casi idéntico al original) con el propósito de robar la información que ingreses.\n\n", "## Cómo evitar el phishing\n\nPara evitar este tipo de fraude, sigue estos consejos. No te tomarán más de cinco minutos y compártelos con quienes puedan necesitarlos. La seguridad digital debe ser conocida por todos.\n\n## Medidas de prevención para evitar ser víctima del phishing:\n\n1. **No responder correos sospechosos**: Si recibes un correo electrónico que te pide información personal o financiera y presenta faltas de ortografía, carencia de verificación, o cualquier elemento inusual, no respondas ni accedas a los enlaces incluidos.\n2. **No enviar información personal por correo electrónico**: El correo electrónico no es un medio seguro para enviar información confidencial. Utiliza otros medios y asegúrate de que cuentan con las medidas de seguridad adecuadas.\n3. **Evitar el acceso desde lugares públicos**: No ingreses información personal en sitios web de entidades financieras desde lugares públicos como cibercafés. Estos lugares son frecuentemente blancos de robo de información. Espera a poder enviar información confidencial desde tu servicio de internet personal.\n4. **Verificar los indicadores de seguridad del sitio web**: Asegúrate de que la dirección web comienza con \"https://\" y que aparece un candado cerrado en la barra de direcciones del navegador. Esto indica que el sitio utiliza TLS (Transport Layer Security), un protocolo de encriptación que protege la información transmitida.\n5. **Mantener el software actualizado**: Instala actualizaciones de seguridad en tu sistema operativo, antivirus y aplicaciones. Estas actualizaciones suelen incluir nuevos protocolos de seguridad que ayudan a prevenir diferentes tipos de malware.\n6. **Revisar resúmenes bancarios y de tarjeta de crédito**: Comunica inmediatamente cualquier operación no autorizada a la entidad emisora. Esto ayudará tanto a ti como a la empresa y a otros usuarios que puedan ser víctimas de un posible robo de información.\n7. **No descargar archivos de fuentes no confiables**: Pueden contener virus o software malicioso. Siempre verifica las URL sospechosas en sitios como VirusTotal antes de descargar archivos.\n8. **No contestar mensajes sospechosos**: Ignora cualquier comunicación que solicite información personal o financiera de manera inesperada. Siempre contacta primero a la empresa o persona correspondiente antes de ingresar cualquier dato.\n9. **Estar siempre atento**: La desconfianza y el análisis cuidadoso de los sitios web donde introduces tus datos son tu mejor protección. La concienciación sobre la seguridad virtual salva a miles de usuarios de ser engañados y víctimas de fraudes."
]
,
  "conclusion": "## Conclusión \n\nSiguiendo estos consejos, podrás proteger mejor tus datos. Sin embargo, estos no garantizan la seguridad al 100%, por lo que siempre debes usar la herramienta más poderosa contra los ciberataques: el sentido común y la concienciación sobre la seguridad virtual. Puedes tomar este breve test de phishing dirigido por Google, compártelo con tu familia y amigos: <a href=\"https://phishingquiz.withgoogle.com/\" target=\"_blank\">phishingquiz</a>\n\n*La seguridad virtual es un privilegio que debe ser comunicado por todos y para todos.*"
  ,
  "keywords": [
    "phishing",
    "ciberataques",
    "seguridad virtual",
    "datos personales",
    "concienciación",
    "test de phishing",
    "Google",
    "protección de datos",
    "fraude cibernético",
    "sentido común"
  ],
  "createdAt": {
    "$date": "2024-08-21T01:54:13.738Z"
  },
  "updatedAt": {
    "$date": "2024-08-21T01:54:13.738Z"
  },
  "__v": 0
};

const newToRealizeEn = {
  "_id": "phishing-the-favorite-threat-of-cybercriminals_EN__12",
  "new_code": "12",
  "url_es": "https://lunanews.tech/es/phishing-la-amenaza-favorita-de-los-ciberdelincuentes_ES__12",
  "url_en": "https://lunanews.tech/en/phishing-the-favorite-threat-of-cybercriminals_EN__12",
  "language": "en",
  "read_time": "6 minutes",
  "sections": ["PC & Laptops", "Smartphones & Tablets"],
  "title": "Phishing: The Favorite Threat of Cybercriminals",
  "main_image": "https://res.cloudinary.com/dis6nw4o7/image/upload/v1724252134/imagen_5_p2jdsl.jpg",
  "main_image_source": {
    "source_name": "Diseno Web Akus",
    "url": "https://disenowebakus.net"
  },
  "thumbnail_image": "https://res.cloudinary.com/dis6nw4o7/image/upload/v1724252134/imagen_5_p2jdsl.jpg",
  "image_alt": "Phising",
  "author_id": "alberto-luna",
  "summary": "Phishing is a cyber fraud where fake emails steal personal and financial data. Identifying it is key to avoiding being a victim.",
  "content": ["Description: Phishing is a fraudulent technique where cybercriminals use fake emails to steal personal and financial information. These messages appear legitimate and redirect to fake websites. Learning to identify them is crucial to protecting your data. Here, we show you how to prevent phishing.\n\n## Phishing: A Passive-Aggressive Threat\n\n<picture><img src=\"https://res.cloudinary.com/dis6nw4o7/image/upload/v1724252450/credit_card_oh2ve0.jpg\" /><small>Source: <a href=\"https://disenowebakus.net\" target=\"_blank\">Disenowebakus</a></small></picture>\n\nPhishing has become a popular technique among cybercriminals to steal sensitive personal information from users, such as passwords, bank accounts, and other personal data. Despite its prevalence, there are still people who are unaware of this term and how it works, making them vulnerable. Learning to avoid data theft through identity theft is crucial. Spending five minutes of your day could save you months of trouble.\n\n## What is Phishing?\n\n<picture><img src=\"https://res.cloudinary.com/dis6nw4o7/image/upload/v1724252811/phising-ads_jf3fym.jpg\" /><small>Source: <a href=\"https://infomedia.es\" target=\"_blank\">Infomedia</a></small></picture>\n\nPhishing is a form of **identity theft through emails** that appear legitimate but are not. These emails usually request personal information and banking data with a false justification. For example, they may seem like \"legitimate\" emails from your bank, claiming that your account has been compromised and that you need to change your password. The email will include a URL that will direct you to a \"copy\" site (a site almost identical to the original) with the purpose of stealing the information you enter.\n\n## How to Avoid Phishing\n\nTo avoid this type of fraud, follow these tips. It won't take more than five minutes, and share them with those who might need them. Digital security should be known by everyone.\n\n## Prevention Measures to Avoid Being a Phishing Victim:\n\n1. **Do not respond to suspicious emails**: If you receive an email asking for personal or financial information and it contains spelling errors, lack of verification, or any unusual element, do not respond or click on the links included.\n2. **Do not send personal information via email**: Email is not a secure way to send confidential information. Use other means and ensure they have adequate security measures.\n3. **Avoid accessing from public places**: Do not enter personal information on financial institution websites from public places like internet cafes. These places are frequently targets for information theft. Wait until you can send confidential information from your personal internet service.\n4. **Check website security indicators**: Make sure the web address starts with \"https://\" and that a closed padlock appears in the browser's address bar. This indicates that the site uses TLS (Transport Layer Security), an encryption protocol that protects the transmitted information.\n5. **Keep your software updated**: Install security updates on your operating system, antivirus, and applications. These updates often include new security protocols that help prevent different types of malware.\n6. **Review bank and credit card statements**: Immediately report any unauthorized transaction to the issuing entity. This will help both you and the company, as well as other users who may be victims of possible information theft.\n7. **Do not download files from untrusted sources**: They may contain viruses or malicious software. Always check suspicious URLs on sites like VirusTotal before downloading files.\n8. **Do not reply to suspicious messages**: Ignore any communication that unexpectedly requests personal or financial information. Always contact the company or person first before entering any data.\n9. **Always be alert**: Distrust and carefully analyze the websites where you enter your data, as they are your best protection. Awareness of virtual security saves thousands of users from being deceived and becoming fraud victims."
]
,
  "conclusion": "## Conclusion \n\nBy following these tips, you will be better able to protect your data. However, these do not guarantee 100% security, so you should always use the most powerful tool against cyberattacks: common sense and awareness of virtual security. You can take this brief phishing test by Google, share it with your family and friends: <a href=\"https://phishingquiz.withgoogle.com/\" target=\"_blank\">phishingquiz</a>\n\n*Virtual security is a privilege that should be communicated by everyone and for everyone.*"
  ,
  "keywords": [
    "phishing",
    "cyberattacks",
    "virtual security",
    "personal data",
    "awareness",
    "phishing test",
    "Google",
    "data protection",
    "cyber fraud",
    "common sense"
],
"createdAt": {
  "$date": "2024-08-21T01:54:13.738Z"
},
"updatedAt": {
  "$date": "2024-08-21T01:54:13.738Z"
},
"__v": 0
};

function RenderData () {

  const selectedNew = newToRealizeEn;
  return (
    <section className='about_data' style={{maxWidth: '500px'}}>
      <h1>{selectedNew?.title}</h1>
      <img src={selectedNew?.thumbnail_image} alt="" width={150}/>
      <picture>
        <img src={selectedNew?.main_image} alt={selectedNew?.image_alt} width={300}/>
        <small>Fuente:
          <Link href={selectedNew?.main_image_source?.url as string}>
            {selectedNew?.main_image_source?.source_name}
          </Link>
        </small>
      </picture>
      <div>
        {selectedNew?.content.map((item, index: number) => {
          return (
            <MDXRemote source={item} key={index}/>
          );
        })}
      </div>
      <MDXRemote source={selectedNew?.conclusion as string}/>
      <ul>
        {selectedNew?.keywords.map(item => {
          return (
            <li key={item}>{item}</li>
          );
        })}
      </ul>
    </section>
  );
}

*/

export default function Page () {
  const t = useTranslations('About');
  return (
    <article className='about'>
      {/*<RenderData />*/}

      <h1 className='title'>{t('title.p1')} <span>{t('title.p2')}</span></h1>
      <section className='about_content'>
        <h1><span>Luna</span> News</h1>
        <MDXRemote
          source={t('content')}
        />
      </section>
      {/* <FAQ /> */}
    </article>
  );
}
