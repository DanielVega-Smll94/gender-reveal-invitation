// src/app/about/page.tsx

'use client';

import Link from 'next/link';

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-200 to-yellow-200 text-center">
      <h1 className="text-4xl font-bold mb-8">Acerca de Nuestro Gender Reveal</h1>
      <p className="text-lg mb-4">
        Estamos emocionados de compartir con ustedes la maravillosa noticia del género de nuestro bebé.
      </p>
      <Link href="/" className="mt-4 text-green-700 underline">
        Volver al Inicio
      </Link>
    </div>
  );
};

export default About;
