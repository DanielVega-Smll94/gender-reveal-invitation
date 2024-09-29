// src/app/reveal/page.tsx

'use client';

const Reveal: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-200 to-indigo-200 text-center">
      <h1 className="text-4xl font-bold mb-8">¡Revelación Completada!</h1>
      <p className="text-lg mb-4">
        Gracias por ser parte de este momento especial.
      </p>
    </div>
  );
};

export default Reveal;
