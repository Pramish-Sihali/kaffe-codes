
// src/app/(pages)/layout.tsx
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/layout/Footer';

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
