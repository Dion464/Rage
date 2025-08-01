import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Navigation from './components/Navigation';
import Script from 'next/script';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'The Merchant Rebellion',
  description: 'Join the Merchant Rebellion against high payment processing fees.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            // Prevent duplicate pixel loading
            if (window.fbqLoaded) return;
            window.fbqLoaded = true;
            
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            
            // Initialize pixel only once
            setTimeout(function() {
              if (typeof fbq !== 'undefined' && !window.fbqInitialized) {
                fbq('init', '3811009842530661');
                fbq('track', 'PageView');
                window.fbqInitialized = true;
              }
            }, 100);
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=3811009842530661&ev=PageView&noscript=1"
          />
        </noscript>
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  );
} 