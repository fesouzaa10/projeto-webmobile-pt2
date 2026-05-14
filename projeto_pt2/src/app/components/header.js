{/* Nome: Felipe de Souza Cassemiro  
RA: 10735839 */}
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <h1>ReciclaFácil ♻</h1>
      <p>Aprenda a reciclar corretamente</p>
      <nav>
        <Link href="/">Início</Link>
        <Link href="/pesquisar">Pesquisar</Link>
      </nav>
    </header>
  );
}