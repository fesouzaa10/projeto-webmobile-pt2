import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>

        <header>
          <h1>ReciclaFácil ♻</h1>
          <p>Aprenda a reciclar corretamente</p>

          <nav>
            <Link href="/">Início</Link>
            <Link href="/pesquisar">Pesquisar</Link>
          </nav>
        </header>

        {children}

        <footer>
          <p>Felipe de Souza Cassemiro</p>
          <p>RA: 10735839</p>
        </footer>

      </body>
    </html>
  );
}