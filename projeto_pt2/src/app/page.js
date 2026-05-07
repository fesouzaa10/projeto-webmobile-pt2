"use client";
import { useState } from "react";
import { materiaisDB } from "./dados";

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

      <section id="tipos">
        <h2>Tipos de Reciclagem</h2>
        <div className="cards">
          {/* Card Azul */}
          <article className="card azul" onClick={() => filtrarLixeira('papel')}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfuecZ4xBSPsTvepYUtiLirADI7LDluVGgXQ&s" alt="Lixeira azul" />
            <div className="info">
              <h3>Papel</h3>
              <p>Lixeira Azul</p>
            </div>
          </article>

          {/* Card Vermelho */}
          <article className="card vermelho" onClick={() => filtrarLixeira('plastico')}>
            <img src="https://img.freepik.com/vetores-gratis/residuos-de-reciclagem-vermelho_25030-68449.jpg?semt=ais_hybrid&w=740&q=80" alt="Lixeira vermelha" />
            <div className="info">
              <h3>Plástico</h3>
              <p>Lixeira Vermelha</p>
            </div>
          </article>

          {/* Card Verde */}
          <article className="card verde" onClick={() => filtrarLixeira('vidro')}>
            <img src="https://static.vecteezy.com/system/resources/previews/024/089/832/non_2x/green-waste-bin-ecology-free-png.png" alt="Lixeira verde" />
            <div className="info">
              <h3>Vidro</h3>
              <p>Lixeira Verde</p>
            </div>
          </article>

          {/* Card Amarelo */}
          <article className="card amarelo" onClick={() => filtrarLixeira('metal')}>
            <img src="https://img.freepik.com/vetores-gratis/residuos-de-reciclagem-amarelo_25030-68159.jpg?semt=ais_hybrid&w=740&q=80" alt="Lixeira amarela" />
            <div className="info">
              <h3>Metal</h3>
              <p>Lixeira Amarela</p>
            </div>
          </article>
        </div>

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
      </section>
    </main>
  );
}