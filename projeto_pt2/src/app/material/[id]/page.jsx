/* Nome: Felipe de Souza Cassemiro
RA: 10735839 */

import { materiaisDB } from "../../dados";
import Link from "next/link";
import styles from "./material.module.css";

export default async function DetalheMaterial({ params }) {
  const resolvedParams = await params;
  const materialId = resolvedParams.id;
  
  const material = materiaisDB.find(
    (m) => m.nome.toLowerCase() === decodeURIComponent(materialId).toLowerCase()
  );

  if (!material) {
    return (
      <main className={styles.container}>
        <div className={styles.card}>
          <h2>Material não encontrado</h2>
          <Link href="/pesquisar" className={styles.linkVoltar}>Voltar para a pesquisa</Link>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.container}>
      <section 
        className={styles.card} 
        style={{ borderTop: `12px solid ${material.cor}` }}
      >
        <h2 className={styles.titulo} style={{ color: material.cor }}>
          {material.nome}
        </h2>
        
        <p className={styles.info}>
          Este material deve ser descartado na lixeira: <br/>
          <strong>{material.msg}</strong>
        </p>
        
        <div 
          className={styles.caixaCor} 
          style={{ backgroundColor: material.cor }} 
          title={`Cor: ${material.msg}`}
        />

        <Link href="/pesquisar" className={styles.linkVoltar}>
          Voltar para a busca
        </Link>
      </section>
    </main>
  );
}