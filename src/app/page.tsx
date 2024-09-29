// src/app/page.tsx

'use client';

import { useState } from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  const [reveal, setReveal] = useState<boolean>(false);
  const [gender, setGender] = useState<'niña' | 'niño' | null>(null);

  const handleReveal = () => {
    const isGirl = Math.random() < 0.5;
    setGender(isGirl ? 'niña' : 'niño');
    setReveal(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-pink-200 text-center">
      <h1 className="text-4xl font-bold mb-8">¡Estás invitado al Gender Reveal!</h1>
      {!reveal ? (
        <button
          onClick={handleReveal}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Hacer el Gender Reveal
        </button>
      ) : (
        <div>
          {gender === 'niña' ? (
            <h2 className="text-3xl text-pink-500">¡Es una niña! 🎀</h2>
          ) : (
            <h2 className="text-3xl text-blue-500">¡Es un niño! 🎩</h2>
          )}
          {/* Enlace a la página de revelación */}
          <Link href="/reveal" className="mt-4 text-blue-700 underline">
            Ver la Revelación
          </Link>
        </div>
      )}
      <Link href="/about" className="mt-4 text-blue-700 underline">
        Ir a Acerca de
      </Link>
    </div>
  );
};

export default Home;
