import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'stream-app-viewer',
  description: 'stream-app-viewer for alskfl',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className='w-screen h-screen'>
          <div>
            <Link href="/">HOME</Link>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
