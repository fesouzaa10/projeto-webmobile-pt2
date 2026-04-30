# ReciclaFácil – Migração para Next.js

## Descrição

O presente projeto tem como objetivo auxiliar usuários na correta separação de resíduos recicláveis, oferecendo informações simples e acessíveis sobre o descarte adequado de materiais.

Inicialmente desenvolvido utilizando HTML, CSS e JavaScript puro, o sistema foi posteriormente migrado para o framework Next.js, com o intuito de aplicar conceitos modernos de desenvolvimento web.

---

## Objetivo

Realizar a migração de uma aplicação estática para uma aplicação baseada em React (Next.js), adaptando a estrutura, o estilo e a lógica de programação para o novo paradigma.

---

## Estrutura do Projeto

```id="f0v2e1"
src/app/
 ├── layout.js
 ├── page.js
 ├── globals.css
```

* **layout.js**: responsável pela estrutura global da aplicação (cabeçalho e rodapé).
* **page.js**: contém o conteúdo da página principal.
* **globals.css**: arquivo de estilização global.

---

## Processo de Migração

Durante a migração, foram realizadas as seguintes adaptações:

* Substituição de arquivos `.html` por componentes React (`.js`);
* Transferência da estrutura global para o arquivo `layout.js`;
* Inserção do conteúdo principal no arquivo `page.js`;
* Conversão de eventos HTML (`onclick`) para eventos React (`onClick`);
* Substituição da manipulação direta do DOM por controle de estado com `useState`.

---

## Funcionalidades

* Exibição de categorias de reciclagem (papel, plástico, vidro e metal);
* Interação por clique para exibir informações sobre os materiais;
* Feedback visual dinâmico ao usuário.

