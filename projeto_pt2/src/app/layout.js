{/* Nome: Felipe de Souza Cassemiro - RA: 10735839 */}

import './globals.css';
import Header from './components/header';
import Footer from './components/footer';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        
        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}