/* Nome: Felipe de Souza Cassemiro - RA: 10735839 */

import { materiaisDB } from "../../dados";
import Link from "next/link";

// Adicionamos "async" antes da função
export default async function DetalheMaterial({ params }) {
  
  // No Next.js moderno, precisamos dar "await" no params
  const resolvedParams = await params;
  const materialId = resolvedParams.id;
  
  const material = materiaisDB.find(
    (m) => m.nome.toLowerCase() === decodeURIComponent(materialId).toLowerCase()
  );

  if (!material) {
    return (
      <main style={{ padding: "50px", textAlign: "center" }}>
        <h2>Material não encontrado</h2>
        <p>Não encontramos informações sobre: <strong>{decodeURIComponent(materialId)}</strong></p>
        <Link href="/pesquisar" style={{ color: "green", textDecoration: "underline" }}>
            Voltar para a pesquisa
        </Link>
      </main>
    );
  }

  return (
    <main style={{ padding: "20px" }}>
      <section 
        className="resultado-estilo" 
        style={{ 
          borderLeft: `10px solid ${material.cor}`,
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          maxWidth: "600px",
          margin: "0 auto",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
        }}
      >
        <h2 style={{ color: material.cor }}>{material.nome}</h2>
        <hr />
        <p style={{ fontSize: "1.2rem", margin: "20px 0" }}>
            Este material deve ser descartado na lixeira: <strong>{material.msg}</strong>
        </p>
        
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span>Cor da lixeira:</span>
            <div style={{ 
                backgroundColor: material.cor, 
                width: "30px", 
                height: "30px", 
                borderRadius: "5px" 
            }} />
        </div>

        <div style={{ marginTop: "30px" }}>
            <Link href="/pesquisar" style={{ color: "#666", textDecoration: "none", fontSize: "0.9rem" }}>
                ← Voltar para a busca
            </Link>
        </div>
      </section>
    </main>
  );
}