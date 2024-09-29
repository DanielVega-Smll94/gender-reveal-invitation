// src/app/layout.tsx

import '../styles/globals.css';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="es">
      <head>
        <title>Invitación Gender Reveal</title>
      </head>
      <body>
        <div className="container mx-auto p-4">
          {children}
        </div>
      </body>
    </html>
  );
};

export default Layout;
