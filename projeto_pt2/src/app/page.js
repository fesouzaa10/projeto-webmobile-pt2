import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (

<body>

<header>
  <h1>ReciclaFácil ♻</h1>
  <p>Aprenda a reciclar corretamente</p>
</header>

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
    <article className="card azul" onclick="filtrarLixeira('papel')">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfuecZ4xBSPsTvepYUtiLirADI7LDluVGgXQ&s" alt="Lixeira azul para papel"/>
      <section className="info">
        <h3>Papel</h3>
        <p>Lixeira Azul</p>
      </section>
    </article>

    <article className="card vermelho" onclick="filtrarLixeira('plastico')">
      <img src="https://img.freepik.com/vetores-gratis/residuos-de-reciclagem-vermelho_25030-68449.jpg?semt=ais_hybrid&w=740&q=80" alt="Lixeira vermelha para plástico"/>
      <section className="info">
        <h3>Plástico</h3>
        <p>Lixeira Vermelha</p>
      </section>
    </article>

    <article className="card verde" onclick="filtrarLixeira('vidro')">
      <img src="https://static.vecteezy.com/system/resources/previews/024/089/832/non_2x/green-waste-bin-ecology-free-png.png" alt="Lixeira verde para vidro"/>
      <section className="info">
        <h3>Vidro</h3>
        <p>Lixeira Verde</p>
      </section>
    </article>

    <article className="card amarelo" onclick="filtrarLixeira('metal')">
      <img src="https://img.freepik.com/vetores-gratis/residuos-de-reciclagem-amarelo_25030-68159.jpg?semt=ais_hybrid&w=740&q=80" alt="Lixeira amarela para metal"/>
      <section className="info">
        <h3>Metal</h3>
        <p>Lixeira Amarela</p>
      </section>
    </article>
  </section>

  <p id="resultado"></p>
</section>

</main>

<footer>
  <p>Felipe de Souza Cassemiro</p>
  <p>RA: 10735839</p>
</footer>

</body>
  );
}
