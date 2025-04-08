import './globals.css';

export const metadata = {
  title: 'Merchant Rebellion - Rage Against The Fees',
  description: 'Stop the squeeze on merchant fees',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
} 