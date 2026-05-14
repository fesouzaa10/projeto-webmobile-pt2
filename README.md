# ReciclaFácil – Migração para Next.js

## Descrição
O projeto **ReciclaFácil** tem como objetivo auxiliar usuários na correta separação de resíduos recicláveis, oferecendo informações simples e acessíveis sobre o descarte adequado de materiais.

Inicialmente desenvolvido utilizando HTML, CSS e JavaScript puro, o sistema foi migrado para o framework **Next.js** com o intuito de aplicar conceitos modernos de desenvolvimento web, como roteamento dinâmico e componentes reutilizáveis.

---

## Objetivo
Realizar a migração de uma aplicação estática para uma aplicação baseada em React (Next.js), adaptando a estrutura, o estilo e a lógica de programação para o novo paradigma de estados e componentes.

---

## Estrutura do Projeto
```text
src/
 ├── components/       (Componentes reutilizáveis: Header, Footer, Card)
 ├── app/
 │    ├── pesquisar/   (Pasta da rota de pesquisa)
 │    │    └── page.js (Arquivo da página de busca)
 │    ├── layout.js    (Estrutura global com Header e Footer)
 │    ├── page.js      (Página inicial com os cards semânticos)
 │    └── globals.css  (Estilos globais e CSS Flexbox)
 └────└── dados.js     (Banco de dados mockado dos materiais)
 ```

 ## Processo de Migração e Novas Adaptações

 Durante a migração, foram realizadas as seguintes adaptações técnicas:

* Substituição de Estruturas: Arquivos .html foram convertidos em componentes React (.js).

* Roteamento: Implementação de navegação entre a Home e a nova página de Pesquisa utilizando a estrutura de pastas do Next.js.

* Gerenciamento de Estado: Substituição da manipulação direta do DOM (como as funções exibirMensagem do projeto anterior) pelo hook useState para controlar os resultados das buscas e filtros em tempo real.


## Auxílio de IA

O desenvolvimento deste projeto contou com o suporte de Inteligência Artificial Generativa, que atuou como um tutor técnico nas seguintes frentes:
## Uso de Inteligência Artificial Generativa
O uso de IA neste projeto (Gemini 3 Flash) foi focado em:
1.  **Refatoração de Componentes**: Orientação para extrair lógica repetitiva do `page.js` para o componente `Card.js`.
2.  **Melhoria Semântica**: Sugestão de substituição de contêineres `div` por `section` e `article` para melhor legibilidade e SEO.
3.  **Debug de Layout**: Ajuste de CSS Flexbox para garantir que os cards fiquem alinhados lado a lado após a componentização.

## Funcionalidades

* Categorias de Reciclagem: Cards interativos para papel, plástico, vidro e metal na página inicial.

* Busca Inteligente: Funcionalidade que permite pesquisar por materiais específicos para identificar a lixeira correta.

* Feedback Visual Dinâmico: O sistema altera as cores e mensagens do card de resposta automaticamente conforme o tipo de material identificado pela busca.