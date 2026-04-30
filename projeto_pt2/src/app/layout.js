export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <meta charset="UTF-8"/>
        <title>ReciclaFácil</title>
      </head>
      <body>
        {children}
        <footer>
          <p>Felipe de Souza Cassemiro</p>
          <p>RA: 10735839</p>
        </footer>
      </body>
    </html>
  );
}
