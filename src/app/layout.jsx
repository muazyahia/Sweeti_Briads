import '../styles/global.css';
import Providers from '../components/Providers';

export const metadata = {
  title: 'Sweeti Braids',
  description: 'Sweeti Braids is a luxury hair braiding studio in Zagazig, Egypt. Specializing in Knotless Braids, Cornrows, and French Braids. Weave elegance & self-love into every braid.',
  keywords: ['Braids', 'Hair Salon', 'Knotless Braids', 'Zagazig', 'Egypt', 'Cornrows', 'Hair Styling'],
  openGraph: {
    title: 'Sweeti Braids',
    description: 'Luxury hair braiding studio in Egypt. Weave elegance into every braid.',
    url: 'https://sweetibraids.com',
    siteName: 'Sweeti Braids',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sweeti Braids | Luxury Hair Braiding',
    description: 'Luxury hair braiding studio in Egypt. Weave elegance into every braid.',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
