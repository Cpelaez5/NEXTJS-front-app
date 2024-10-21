// /src/app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../app/components/layout/navbar'; // Asegúrate de importar el Navbar

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '360-Degree Employee Evaluation',
  description: 'A web application for conducting 360-degree evaluations of remote employees',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* Incluye el Navbar aquí */}
        {children}
      </body>
    </html>
  );
}