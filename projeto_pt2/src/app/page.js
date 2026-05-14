"use client";
{/* Nome: Felipe de Souza Cassemiro
RA: 10735839*/}

import { useState } from "react";
import { materiaisDB } from "./dados";
import Card from "./components/cards";

export default function Home() {
  const [resultado, setResultado] = useState(null);

  const filtrarLixeira = (categoria) => {
    const itens = materiaisDB.filter(m => m.categoria === categoria);
    const nomes = itens.map(m => m.nome).join(", ");
    setResultado({
      texto: `Itens comuns: ${nomes}`,
      cor: itens[0].cor
    });
  };

  return (
    <main>
      <section>
        <h2>Sobre o ReciclaFácil</h2>
        <p>O ReciclaFácil foi feito para ajudar as pessoas a reciclarem corretamente, trazendo informação simples e acessível.</p>
      </section>
<section className="cards">
      <Card 
  classe="azul" 
  onClick={() => filtrarLixeira('papel')} 
  imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfuecZ4xBSPsTvepYUtiLirADI7LDluVGgXQ&s" 
  altText="Lixeira azul" 
  titulo="Papel" 
  subtitulo="Lixeira Azul" 
/>
<Card 
  classe="vermelho" 
  onClick={() => filtrarLixeira('plastico')} 
  imgSrc="https://img.freepik.com/vetores-gratis/residuos-de-reciclagem-vermelho_25030-68449.jpg?semt=ais_hybrid&w=740&q=80" 
  altText="Lixeira vermelha" 
  titulo="Plástico" 
  subtitulo="Lixeira Vermelha" 
/>
<Card 
  classe="verde" 
  onClick={() => filtrarLixeira('vidro')} 
  imgSrc="https://static.vecteezy.com/system/resources/previews/024/089/832/non_2x/green-waste-bin-ecology-free-png.png" 
  altText="Lixeira verde" 
  titulo="Vidro" 
  subtitulo="Lixeira Verde" 
/>
<Card 
  classe="amarelo" 
  onClick={() => filtrarLixeira('metal')} 
  imgSrc="https://img.freepik.com/vetores-gratis/residuos-de-reciclagem-amarelo_25030-68159.jpg?semt=ais_hybrid&w=740&q=80" 
  altText="Lixeira amarela" 
  titulo="Metal" 
  subtitulo="Lixeira Amarela"
  />
  </section>
        {resultado && (
          <p 
            className="resultado-estilo" 
            style={{ 
              color: resultado.cor, 
              borderLeft: `5px solid ${resultado.cor}`,
              backgroundColor: resultado.cor + "11",
              padding: "15px",
              marginTop: "20px"
            }}
          >
            {resultado.texto}
          </p>
        )}
    </main>
  );
}