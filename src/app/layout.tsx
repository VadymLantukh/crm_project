import { Plus_Jakarta_Sans } from 'next/font/google';
import Providers from './components/providers';
import './globals.css';

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>TruScape</title>
      </head>
      <body className={font.className}>
        <main>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
