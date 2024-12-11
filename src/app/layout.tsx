// src/app/layout.tsx
import { Nunito } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { WishlistProvider } from '@/context/WishlistContext';
import './globals.css';

const nunito = Nunito({ 
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-nunito',
});

export const metadata = {
  title: 'Kaffe Codes',
  description: 'Platform to run a successful online business in Nepal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className={`${nunito.className} flex flex-col min-h-screen`}>
        <WishlistProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </WishlistProvider>
      </body>
    </html>
  );
}