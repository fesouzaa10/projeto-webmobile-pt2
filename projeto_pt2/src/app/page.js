'use client';
import styles from "./globals.css";

import { useState } from 'react';

export default function Home() {

  const materiaisDB = [
    { nome: "Jornal", categoria: "papel", cor: "#2196f3", msg: "AZUL" },
    { nome: "Revista", categoria: "papel", cor: "#2196f3", msg: "AZUL" },
    { nome: "Papelão", categoria: "papel", cor: "#2196f3", msg: "AZUL" },
    { nome: "Garrafa PET", categoria: "plastico", cor: "#f44336", msg: "VERMELHA" },
    { nome: "Sacola", categoria: "plastico", cor: "#f44336", msg: "VERMELHA" },
    { nome: "Pote", categoria: "plastico", cor: "#f44336", msg: "VERMELHA" },
    { nome: "Garrafa de Vidro", categoria: "vidro", cor: "#4caf50", msg: "VERDE" },
    { nome: "Pote de Vidro", categoria: "vidro", cor: "#4caf50", msg: "VERDE" },
    { nome: "Lata de Alumínio", categoria: "metal", cor: "#fbc02d", msg: "AMARELA" },
    { nome: "Lata de Aço", categoria: "metal", cor: "#fbc02d", msg: "AMARELA" }
  ];

  const [resultado, setResultado] = useState("");
  const [cor, setCor] = useState("#333");

  function filtrarLixeira(categoria) {
    const itens = materiaisDB.filter(m => m.categoria === categoria);
    const nomes = itens.map(m => m.nome).join(", ");
    const corBase = itens[0].cor;

    setResultado(`Itens comuns: ${nomes}`);
    setCor(corBase);
  }

  return (
    <main>

      <section>
        <h2>Sobre o ReciclaFácil</h2>
        <p>
          O ReciclaFácil foi feito para ajudar as pessoas a reciclarem corretamente,
          trazendo informação simples e acessível para toda a comunidade.
        </p>
      </section>

      <section id="tipos">
        <h2>Tipos de Reciclagem</h2>

        <section className="cards">

          <article className="card azul" onClick={() => filtrarLixeira('papel')}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfuecZ4xBSPsTvepYUtiLirADI7LDluVGgXQ&s" />
            <section className="info">
              <h3>Papel</h3>
              <p>Lixeira Azul</p>
            </section>
          </article>

          <article className="card vermelho" onClick={() => filtrarLixeira('plastico')}>
            <img src="https://img.freepik.com/vetores-gratis/residuos-de-reciclagem-vermelho_25030-68449.jpg" />
            <section className="info">
              <h3>Plástico</h3>
              <p>Lixeira Vermelha</p>
            </section>
          </article>

          <article className="card verde" onClick={() => filtrarLixeira('vidro')}>
            <img src="https://static.vecteezy.com/system/resources/previews/024/089/832/non_2x/green-waste-bin-ecology-free-png.png" />
            <section className="info">
              <h3>Vidro</h3>
              <p>Lixeira Verde</p>
            </section>
          </article>

          <article className="card amarelo" onClick={() => filtrarLixeira('metal')}>
            <img src="https://img.freepik.com/vetores-gratis/residuos-de-reciclagem-amarelo_25030-68159.jpg" />
            <section className="info">
              <h3>Metal</h3>
              <p>Lixeira Amarela</p>
            </section>
          </article>

        </section>

        {resultado && (
          <p id="resultado" style={{
            borderLeft: `5px solid ${cor}`,
            color: cor,
            backgroundColor: cor + "11"
          }}>
            {resultado}
          </p>
        )}

      </section>

    </main>
  );
}