'use client';

import { useState } from 'react';

export default function Pesquisar() {
  const [busca, setBusca] = useState('');
  const [resultado, setResultado] = useState(null);

  const materiaisDB = [
    { nome: "Jornal", categoria: "papel", cor: "#2196f3", msg: "AZUL" },
    { nome: "Revista", categoria: "papel", cor: "#2196f3", msg: "AZUL" },
    { nome: "Papelão", categoria: "papel", cor: "#2196f3", msg: "AZUL" },
    { nome: "Garrafa PET", categoria: "plástico", cor: "#f44336", msg: "VERMELHA" },
    { nome: "Sacola", categoria: "plástico", cor: "#f44336", msg: "VERMELHA" },
    { nome: "Pote", categoria: "plástico", cor: "#f44336", msg: "VERMELHA" },
    { nome: "Garrafa de Vidro", categoria: "vidro", cor: "#4caf50", msg: "VERDE" },
    { nome: "Pote de Vidro", categoria: "vidro", cor: "#4caf50", msg: "VERDE" },
    { nome: "Lata de Alumínio", categoria: "metal", cor: "#fbc02d", msg: "AMARELA" },
    { nome: "Lata de Aço", categoria: "metal", cor: "#fbc02d", msg: "AMARELA" }
  ];

  const handlePesquisa = (e) => {
    e.preventDefault();
    const valor = busca.toLowerCase().trim();

    if (valor === "") {
      setResultado({ texto: "Digite um material!", cor: "#333" });
      return;
    }

    const achado = materiaisDB.find(m =>
      m.nome.toLowerCase().includes(valor) || 
      m.categoria.toLowerCase().includes(valor)
    );

    if (achado) {
      setResultado({
        texto: `Descarte na lixeira ${achado.msg} (${achado.categoria})`,
        cor: achado.cor
      });
    } else {
      setResultado({ texto: "Material não encontrado.", cor: "#777" });
    }
  };

  return (
    <main>
      <section className="pesquisa">
        <h2>Pesquisar Material</h2>

        <form className="search-box" onSubmit={handlePesquisa}>
          <input 
            type="text" 
            placeholder="Digite um material..." 
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
          <button type="submit">Pesquisar</button>
        </form>

        {resultado && (
          <p 
            className="resultado-estilo" 
            style={{ 
              color: resultado.cor, 
              borderLeftColor: resultado.cor,
              backgroundColor: resultado.cor + "11" 
            }}
          >
            {resultado.texto}
          </p>
        )}
      </section>
    </main>
  );
}