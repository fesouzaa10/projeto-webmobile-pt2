{/* Nome: Felipe de Souza Cassemiro - RA: 10735839 */}

export default function Card({ classe, onClick, imgSrc, altText, titulo, subtitulo }) {
  return (
    <article className={`card ${classe}`} onClick={onClick}>
      <img src={imgSrc} alt={altText} />
      <div className="info">
        <h3>{titulo}</h3>
        <p>{subtitulo}</p>
      </div>
    </article>
  );
}