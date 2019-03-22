
Esse projeto tem como base o uso do `Wordpress` com algumas ferramentas necessárias para o desenvolvimento ágil do tema. Então leve em conta todos os passos abaixo.

## Requisitos (baseados em sua construção):
* Node **v8.9.3**
* NPM **v5.5.1**
* Gulp **v3.9.1**
* Yarn **v1.3.2** (Opcional)

---

## A estrutura do Projeto

Leve em consideração a estrutura do projeto, levando em consideração alguns detalhes importantes para o *cross-development*, prevalencendo a qualidade de código e performance do produto final.

### Os diretórios e tema para desenvolvimento:
```sh
_theme #contém todos os arquivos necessários para desenvolvimento do tema
wp-admin #core do wordpress, não altere.
wp-content #contém os plugins e o tema compilado da pasta _theme
wp-includes #core do wordpress, não altere.
```

Você, caro desenvolvedor, deverá trabalhar somente no diretório `_theme` e nunca deve mexer na estrutura atual do `Wordpress`, prevenindo conflitos.

Agora vamos a estrutura do tema em si:
```sh
_theme #root do tema para desenvolvimento
- source
-- assets #contém tudo estilizável do tema: CSS, JS e Imagens.
-- includes #contém todos os arquivos que devem ser incluidos separamamente (como ACF, funções, etc)
-- partials #partes separadas de páginas para organização de arquivos e fácil manutenção
-- footer.php #footer padrão de todas as páginas
-- header.php #header padrão de todas as páginas
-- functions.php #funções padrão de todas as páginas (NUNCA FAÇA UMA FUNÇÃO DIRETA AQUI, USE INCLUDE/REQUIRE)
-- index.php #index padrão
-- single.php #página interna de um post
```

Todos os arquivos `.php` aqui inseridos, scss, js e img serão transpilados/compilados e movidos para a pasta `wp-content/themes/wp-quebrarosilencio`. Nunca altere diretamente o tema compilado e sim o que estiver dentro de `_theme`.

**Dicas importantes**:

* **Não** modifique diretamente o tema em `wp-content/themes/wp-quebrarosilencio`
* **Evite** ao máximo alterar a estrutura ou os arquivos do próprio `Wordpress`;
* **Evite** instalar e *commitar* plugins desnecessários. Teste-os primeiro e *commite* se for de necessidade do projeto;
* **Nunca** faça um *commit* contendo o `wp-config.php`;
* **Nunca** ignore os arquivos `*-lock.json`. Eles mantém a integridade dos pacotes em múltiplos ambientes de desenvolvimento;

---

## Como iniciar o desenvolvimento do tema
Essa estrutura foi criada para ser *baby-friendly*, ou seja, até uma criança saberia o que fazer no passo-a-passo abaixo:

1. Clone esse repositório;
2. Dentro do repositório, crie um arquivo `.config.json` com base no `.config-sample.json` que está dentro de `(_theme/config)` (Não se esqueça de remover qualquer comentário que o arquivo .config.json possa ter);
3. Abra o seu terminal e acesse o repositório `cd seu-path/wp-quebrarosilencio/_theme`;
4. Ainda no terminal, execute os comandos `npm install && npm start`;

Após esse *baby-steps*, caso tenha dado algum erro, veja o motivo do erro, pesquise e tente resolver. Se nada der certo, peça ajuda, mas não atrapalhe outro desenvolvedor sem ao menos ter pesquisado.

**Dicas importantes**:

* **Não** modifique os arquivos sem antes ter dado `npm start`;
* O `terminal` é seu **melhor amigo**, ele mostrará os erros e sucessos, use-o antes de sair perguntando;
* Ao instalar um novo pacote com o `npm`, descreva a necessidade no momento do *commit*.

---

## Os arquivos de desenvolvimento

Jovem padawan, preste atenção nos arquivos no qual tem que desenvolver, pois são acompanhados de algumas tecnologias que estão presentes no lado negro da força.

Veja a lista abaixo das linguagens/arquivos que terá que lidar:

* `PHP` (a lá `wordpress`);
* `jQuery` (infelizmente) com **ES6**;
* `SCSS` com `OOCSS` e *Component Files* pra organização de arquivos.

Os arquivos transpilados são gerados individualmente por arquivos dentro das pastas com nome de `_build`. Isso previne que alguma página receba um código enorme que não irá utilizar.

Nos arquivos `SCSS`, esse problema pode ser resolvido com `@include`. Já no JS, é necessário fazer um `module.exports` desse novo componente e importá-lo diretamente no `.js` com o nome de build responsável por ele(s).

O `gulpfile` está preparado para qualquer modificação dentro de `_theme`, então não se preocupe com ele ou como seus arquivos serão geridos, mas siga sempre a mesma lógica.

---

## Perguntas e respostas:

* **P:** Não sei muito bem trabalhar com o Wordpress, o que faço? -
**R:** Wordpress não é um bicho de sete cabeças, mas estude antes de fazer qualquer coisa. A documentação é de grande utilidade: https://codex.wordpress.org/

* **P:** Não sei mexer com ES6 e Module.exports, etc... O que devo fazer? -
**R:** Nada, não altere o que não sabe ou não conhece. Não invente a roda e insira um arquivo novo com `$(document).ready()` bem estranho. Se o projeto tem um padrão, siga esse padrão. Existe uma documentação bem legal sobre **ES6** e **Module Patterns** nesses links: https://github.com/ericdouglas/ES6-Learning - https://addyosmani.com/resources/essentialjsdesignpatterns/book/

* **P:** Nunca trabalhei dessa forma com `SCSS` ou `JS`, e agora? -
**R:** Pra tudo existe uma primeira vez.

* **P:** O prazo está curto, e agora? -
**R:** Faça o possível para entregar o projeto, mantendo a qualidade de código. Tempo não é desculpa para trabalho porco, isso é atrelado a falta de conhecimento. Em contrapartida, se for muito necessário zoar o código pra entregar, faça, mas refatore quando tiver um tempo disponível.

* **P:** Posso colocar um script ou link ou style direto dentro de uma página? -
**R:** Se você souber voar, sim.

---

Para aliviar toda essa tensão da documentação, como já dizia o Dev Yoda: "Que a força da **gambiarra** esteja com você".