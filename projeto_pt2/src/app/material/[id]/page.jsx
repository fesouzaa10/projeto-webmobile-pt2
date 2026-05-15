/* Nome: Felipe de Souza Cassemiro 
RA: 10735839 */

import { materiaisDB } from "@/dados";
import Link from "next/link";

export default function DetalheMaterial({ params }) {
  // O "id" vem do nome da pasta [id]
  const materialNome = decodeURIComponent(params.id);
  const material = materiaisDB.find(
    (m) => m.nome.toLowerCase() === materialNome.toLowerCase()
  );

  if (!material) {
    return (
      <section>
        <h2>Material não encontrado</h2>
        <Link href="/">Voltar para o início</Link>
      </section>
    );
  }

  return (
    <section className="resultado-estilo" style={{ borderTop: `10px solid ${material.cor}` }}>
      <h2>{material.nome}</h2>
      <p>Este material deve ser descartado na lixeira: <strong>{material.msg}</strong></p>
      <div 
        style={{ 
          backgroundColor: material.cor, 
          width: "50px", 
          height: "50px", 
          margin: "20px auto", 
          borderRadius: "50%" 
        }} 
      />
      <Link href="/pesquisar" style={{ color: "#2e7d32", textDecoration: "underline" }}>
        Fazer nova busca
      </Link>
    </section>
  );
}