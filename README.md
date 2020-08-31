# PokeStore
Projeto Frontend Simulando uma loja para compra de Pokemon.

## STACK
O Frontend web desse projeto teve seus arquivos divididos em seus seções, explicadas a seguir. `Components` onde são guardados os inputs, cards de post, cards de comentários e afins. Os `Containers`
são as páginas que guardam a lógica de união entre componentes para mostrar na tela. As `Actions` armazenam as requisições feitas pela API. As Pasta `Images` armazena o logotipo utilizado no
header. O `Reducer` contém as informações que foram requisitadas nas actions de tal forma que possam ser usadas globalmente no projeto. Por fim, o `Style` armazena o thema do material-ui utilizado
no projeto.

## Tecnologias e serviços utilizadas
Nesse projeto foram utilizados: ReactJs, Redux, Redux-thunk, javascript, axios, Material-ui, uuid, HTML, CSS, styled-components, jest, react-test-renderer, react-router, netflify para o hosting do site e
gerenciadores de pacotes do Nodejs: yarn e npm.

## Sobre
Esse é um projeto frontend que busca consumir os dados da API ***https://pokeapi.co/***. Esse projeto tinha como objetivo a criação de dois E-Commerces com estilos diferentes e que tivessem as
mesmas funcionalidades. A home page vem trazendo a fire store, nela o usuário pode encontrar um catálogo de pokémon de fogo. O usuário pode buscar pelo nome do pokémon na barra de busca no topo da
página, além disso, é possível ordenar os pokémon tanto por valor e nome, em ordem crescente quanto decrescente. O usuário consegue adicionar os pokémon que ele escolher ao clicar no botão ***Add***
que cada card de produto tem e eles irão aparecer no carrinho lateral que fica ao lado direito da página e caso ele desista do pokémon, é possível remover do carrinho. Ao finalizar a compra, é
retornado uma mensagem com um agradecimento ao usuário e o valor que ele recebeu de desconto por comprar na loja. Para mudar de loja é só clicar no botão que fica ao lado da barra de busca. A
segunda loja vem trazendo pokémon de água. Nela o usuário vai encontrar um estilo diferente porém com as mesmas funcionalidades. 
***OBS: Cada loja tem seu carrinho único!**

## Instruções para rodar
Por ser um projeto com ReactJS, há a necessidade do NodeJS. Com ele em sua máquina, basta abrir o ***TERMINAL*** e navegar até o repositório clonado e rodar:
1. `cd PokeStore/` para navegar até o repositório clona;
1. `npm install`, `npm i` ou `yarn` para instalar todas as dependências;
1. `npm run start` ou `yarn start` para rodar localmente o projeto;
1. `npm run build` ou `yarn build` para gerar uma versão estática do projeto (que ficará na pasta `build`);
1. `npm run test` ou `yarn test` para rodas os testes feitos;

## Deploy do projeto
link do deploy: ***https://b2wpokestore.netlify.app/***
