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
src/app/
 ├── pesquisar/
 │    └── page.js      (Página de busca de materiais)
 ├── layout.js         (Estrutura global: cabeçalho e rodapé)
 ├── page.js           (Página principal/Home)
 └── globals.css       (Estilização global unificada)

 ## Processo de Migração e Novas Adaptações

 Durante a migração, foram realizadas as seguintes adaptações técnicas:

* Substituição de Estruturas: Arquivos .html foram convertidos em componentes React (.js).

* Roteamento: Implementação de navegação entre a Home e a nova página de Pesquisa utilizando a estrutura de pastas do Next.js.

* Gerenciamento de Estado: Substituição da manipulação direta do DOM (como as funções exibirMensagem do projeto anterior) pelo hook useState para controlar os resultados das buscas e filtros em tempo real.


## Auxílio de IA

O desenvolvimento deste projeto contou com o suporte de Inteligência Artificial Generativa, que atuou como um tutor técnico nas seguintes frentes:

* Refatoração de Código: Auxílio na conversão da lógica imperativa do JavaScript para a lógica declarativa do React.

* Resolução de Erros: Suporte na interpretação de erros de compilação (como erros de default export) e resolução de conflitos de mesclagem no terminal do Git.

## Funcionalidades

* Categorias de Reciclagem: Cards interativos para papel, plástico, vidro e metal na página inicial.

* Busca Inteligente: Funcionalidade que permite pesquisar por materiais específicos para identificar a lixeira correta.

* Feedback Visual Dinâmico: O sistema altera as cores e mensagens do card de resposta automaticamente conforme o tipo de material identificado pela busca.