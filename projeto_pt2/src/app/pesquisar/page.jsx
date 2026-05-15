'use client';

/* Nome: Felipe de Souza Cassemiro
   RA: 10735839 */

import { useState } from 'react';
import Link from 'next/link';
import { materiaisDB } from '../dados'; // Importando do arquivo central

export default function Pesquisar() {
  const [busca, setBusca] = useState('');
  const [resultado, setResultado] = useState(null);

  const handlePesquisa = (e) => {
    e.preventDefault();
    const valor = busca.toLowerCase().trim();

    if (valor === "") {
      setResultado({ texto: "Digite um material!", cor: "#333", link: null });
      return;
    }

    // Busca mais flexível: procura no nome ou na categoria
    const achado = materiaisDB.find(m =>
      m.nome.toLowerCase().includes(valor) || 
      m.categoria.toLowerCase().includes(valor)
    );

    if (achado) {
      setResultado({
        texto: `Descarte na lixeira ${achado.msg} (${achado.categoria})`,
        cor: achado.cor,
        nomeReal: achado.nome // Nome exato para o link funcionar
      });
    } else {
      setResultado({ texto: "Material não encontrado.", cor: "#777", link: null });
    }
  };

  return (
    <main>
      <section className="pesquisa">
        <h2>Pesquisar Material</h2>

        <form className="search-box" onSubmit={handlePesquisa}>
          <input 
            type="text" 
            placeholder="Ex: Papel, Garrafa, Jornal..." 
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
          <button type="submit">Pesquisar</button>
        </form>

        {resultado && (
          <div 
            className="resultado-estilo" 
            style={{ 
              color: resultado.cor, 
              borderLeft: `5px solid ${resultado.cor}`,
              backgroundColor: resultado.cor + "11",
              padding: "15px",
              marginTop: "20px",
              borderRadius: "8px"
            }}
          >
            <p><strong>{resultado.texto}</strong></p>
            
            {resultado.nomeReal && (
              <Link 
                href={`/material/${encodeURIComponent(resultado.nomeReal)}`}
                style={{
                  display: "block",
                  marginTop: "10px",
                  textDecoration: "underline",
                  color: resultado.cor,
                  fontWeight: "bold"
                }}
              >
                Clique aqui para ver detalhes de como reciclar {resultado.nomeReal}
              </Link>
            )}
          </div>
        )}
      </section>
    </main>
  );
}