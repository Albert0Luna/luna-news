import '@/src/about/styles/faq.css';

export default function FAQ () {
  const faq = [
    {
      question: '¿Cómo puedo suscribirme a Luna news?',
      answer: 'Para suscribirte a Luna news, simplemente haz clic en el botón de suscripción en la parte superior de la página y sigue las instrucciones.'
    },
    {
      question: '¿Cómo puedo cancelar mi suscripción?',
      answer: 'Para cancelar tu suscripción a Luna news, simplemente haz clic en el botón de cancelación en la parte superior de la página y sigue las instrucciones.'
    },
    {
      question: '¿Cómo puedo Sectionsar a Luna news?',
      answer: 'Para Sectionsar a Luna news, envía un correo electrónico a'
    }
  ];
  
  return (
    <section className='faq'>
      {faq && 
        faq.map((item) => {
          return (
            <details key={item.question} className='details'>
              <summary className='question'>
                {item.question}
              </summary>
              <p className='answer'>{item.answer}</p>
            </details>
          );
        })
      }
    </section>
  );
}
