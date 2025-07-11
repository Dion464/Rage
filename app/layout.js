import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Navigation from './components/Navigation';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'The Merchant Rebellion',
  description: 'Join the Merchant Rebellion against high payment processing fees.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  );
} 