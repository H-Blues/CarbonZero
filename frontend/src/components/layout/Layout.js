import { Inter as interFonts } from 'next/font/google';
import ContextProvider from '@/context';

const inter = interFonts({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <>
      <div className={inter.className}>
        <ContextProvider>{children}</ContextProvider>
      </div>
    </>
  );
}
