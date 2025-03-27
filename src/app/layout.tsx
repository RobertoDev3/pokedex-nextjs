import Providers from '@/context/providers';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Pokedex Next.js',
  description: 'Pokedex Next.js',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className={`${poppins.className} overflow-hidden`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
