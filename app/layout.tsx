import './globals.css';
import { Inter } from 'next/font/google';

// Define Inter font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'NorchAI - Your AI Skincare Partner',
  description: 'Personalized skincare routines powered by AI technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Font imports for high-converting typography */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
        {/* Add styles to simulate GT Super font - this is what high converting landing pages use */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @font-face {
              font-family: 'GT Super';
              src: url('https://cdn.fontshare.com/wf/QMBJHPZT6GYT2NQL4ADWR6VWNN2KPNJI/KGOZREYR3WBGSAWRPEIOHISAOYYK5O3D/KN37MPPFGKAVKDYB77UH75C42UL3MU3I.woff2') format('woff2');
              font-weight: 700;
              font-style: normal;
              font-display: swap;
            }
          `
        }} />
        
        {/* Default styles for the container and layout */}
        <style dangerouslySetInnerHTML={{
          __html: `
            body {
              background-color: #ffffff;
              color: #060606;
              font-family: 'Inter', sans-serif;
            }
            h1, h2, h3, h4, h5, h6 {
              font-family: 'GT Super', 'Inter', serif;
            }
            .container {
              width: 100%;
              max-width: 1200px;
              margin: 0 auto;
              padding: 0 1rem;
            }
            .btn-primary {
              background-color: #ff3c41;
              color: white;
            }
            .btn-outline {
              border: 1px solid #e5e7eb;
            }
            .text-primary {
              color: #ff3c41;
            }
            .text-accent {
              color: #47cf73;
            }
            .bg-primary {
              background-color: #ff3c41;
            }
            .bg-accent {
              background-color: #47cf73;
            }
          `
        }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
} 