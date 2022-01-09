/* eslint-disable import/no-unresolved */
// Data content for components

import natoursImg from '../assets/img/natours-banner.jpg';
import trilloImg from '../assets/img/trillo.jpg';
import gitFinderImg from '../assets/img/github-finder.jpg';
import favLinksImg from '../assets/img/favoritelinks-home.jpg';
import shopCartImg from '../assets/img/shopping-cart.jpg';
import expenseTrackerImg from '../assets/img/expense-tck.jpg';
import wongamesImg from '../assets/img/wongames.png';
import moviesFinderImg from '../assets/img/movies-finder.png';
import shyroeBlog from '../assets/img/shyroedevblog.png';
import cryptShyroe from '../assets/img/crypt-shyroe.png';

// Projects Data

export const projectsData = [
  {
    id: 1,
    show: false,
    title: 'natours',
    image: natoursImg,
    content: {
      description: `Projeto Front-End (CSS apenas) mobile responsive e desktop responsive, feito com pré-processador Css (SASS) e arquitetura Css (BEM).

      A ideia do projeto é criar uma interface complexa e aplicar conceitos de código CSS para tornar o projeto escalável e também criar fantásticas animações e efeitos apenas utilizando a linguagem de estilos CSS.`,
    },
    github: 'https://github.com/Shyroe/Natours',
    visit: 'https://natours-interface.netlify.app/',
  },
  {
    id: 2,
    show: false,
    title: 'trillo',
    image: trilloImg,
    content: {
      description: `Projeto Front-End (CSS apenas) mobile responsive e desktop responsive, feito com pré-processador Css (SASS) e arquitetura Css (BEM).

      A ideia do projeto é criar uma interface complexa e responsiva, aplicando os conceitos do módulo flexbox.`,
    },
    github: 'https://github.com/Shyroe/Trillo',
    visit: 'https://trilloteste.netlify.app/',
  },
  {
    id: 3,
    show: false,
    title: 'github finder',
    image: gitFinderImg,
    content: {
      description: `Este projeto é uma aplicação, que utiliza a Api do Github. Consiste em pesquisar por um usuário do Github e a aplicação retorna 30 usuários que estão relacionados com o nome inserido no campo de busca. Ao clicar em um usuário você poderá ver suas informações e acessar links que levam ao perfil do mesmo no Github ou à projetos realizados.

      Projeto Front-End, construído com o framework React e Api do Github. Ao desenvolver esse projeto compreendi importantes conceitos e tecnologias do React. E, também, trabalhei com rotas e requisições assíncronas à API.`,
    },
    github: 'https://github.com/Shyroe/GithubFinderApp',
    visit: 'https://githubfinder-reactapp.netlify.app/',

  },
  {
    id: 4,
    show: false,
    title: 'favorite links',
    image: favLinksImg,
    content: {
      description: `Este é um projeto BackEnd. Foi construído em NodeJS com o framework ExpressJS; PostgreSQL para banco de dados; PassportJS para a criação da Autentição no backend. A parte visual foi feita com Handlebars(template engine) e Bootstrap4.

      A ideia por trás desse projeto é a criação de uma aplicação para armazenar diversas Urls, de diferentes pessoas que acessarem a plataforma, e disponibilizá-las facilmente ao usuário. A plataforma conecta individualmente cada usuário à sua lista de Urls salvas.`,
    },
    github: 'https://github.com/Shyroe/FavoriteLinks',
  },
  {
    id: 5,
    show: false,
    title: 'shoppping cart',
    image: shopCartImg,
    content: {
      description: 'Aplicação que simula a parte de um ecommerce em que adicionamos produtos ao carrinho de compras. Trata-se de um CRUD Front-End feito em React, utilizando as tecnologias: Reack hooks, contextApi e SASS para estilização.',
    },
    visit: 'https://shopping-cart-v1.netlify.app/',
    github: 'https://github.com/Shyroe/ShoppingCart',
  },
  {
    id: 6,
    show: false,
    title: 'expense tracker',
    image: expenseTrackerImg,
    content: {
      description: 'Aplicação de finanças que disponibiliza uma interface para o usuário registrar seus gastos e ganhos diários, com o intuito de aumentar o controle a respeito da sua vida financeira. Trata-se de um projeto Front-End feito em React, que utiliza as tecnologias: React Hooks; useReducer() e SASS.',
    },
    visit: 'https://expense-tck.netlify.app/',
    github: 'https://github.com/Shyroe/TrackerExpense',
  },
  {
    id: 7,
    show: false,
    title: 'wongames',
    image: wongamesImg,
    content: {
      description: `Este projeto é um ecommerce de jogos, semelhante ao Steam. Foi feito utilizando, React de modo avançado, TDD (Test Driven Design).
      Ou seja, foi realizado um teste antes de criar uma nova funcionalidade ou componente.
      Cada componente foi criado também utilizando Storybook.`,
      technologies: 'NextJS; Styled Components; Eslint; Typescript; Jest; React Testing Library; Cypress; Storybook; Prettier; Husky; GraphQL; Stripe',
      features: 'Implementação de funcionalidades de um ecommerce, tais como: meio de pagamento, carrinho de compras,lista de desejos, autenticação, cadastro e login de usuários; dashboard. Consultas a API utilizando GraphQL',
      learn: 'Aprendi a criar um projeto com componentes customizados, de forma profissional, utilizando testes e tipagens.',
    },
    github: 'https://github.com/Shyroe/wongames',
    visit: 'https://wongames.willianjusten.com.br/',
  },
  {
    id: 8,
    show: false,
    title: 'movies finder',
    image: moviesFinderImg,
    content: {
      description: `Esta aplicação trata-se de um site de streaming de filmes e séries, inspirado em netflix, hulu.
      Foi utilizado Redux para trabalhar com estados de forma global, em diferentes componentes da aplicação.
      `,
      technologies: 'NextJS; MUI (Material UI); eslint; Typescript; Redux; React Loading bar',
      features: `Listagem de filmes, séries e atores;
      Paginação; busca por filtros;
      integração a API externa;`,
      learn: `Este projeto foi muito importante para aprimorar minhas habilidades com tipagens, criação de paginação, filtros.
      Implementação de Redux para utilizar gerenciamento de estados em toda a aplicação.`,
    },
    github: 'https://github.com/Shyroe/shyroe-movies-finder',
    visit: 'https://movies-finder.vercel.app/',
  },
  {
    id: 9,
    show: false,
    title: 'Shyroe Blog',
    image: shyroeBlog,
    content: {
      description: `Este projeto trata-se de um Blog voltado para nicho de desenvolvimento Web.
      `,
      technologies: 'Gatsby(React and Graphql); Elasticlunr; Disqus; Styled-components',
      features: `
      Filtro de pesquisa para posts (elasticlunr);
Filtro por tags e categorias;
Tema dark e light;
Requisições a API de forma moderna, usando GraphQl;
Paginação;
Implementação de comentários nas postagens (Disqus);
Newsletter;
      `,
      learn: `
      Aprendi sobre conceitos e implementações utilizando Gatsby;
Aprimorei minhas habilidades em trabalhar com requisições usando Graphql;
Criação de funcionalidades específicas para Blog, tais como: paginação de posts; comentários; filtros, etc.
      `,
    },
    github: 'https://github.com/Shyroe/shyroeDev',
    visit: 'https://shyroedevblog.netlify.app',
  },
  {
    id: 10,
    show: false,
    title: 'Shyroe Crypt - Web 3.0',
    image: cryptShyroe,
    content: {
      description: `
      Esta é uma aplicação moderna que utiliza tecnologias da Web 3.0:
projeto baseado em Blockchain, utiliza smart contracts para fazer transações.
      `,
      technologies: 'ReactJS; Vite; Smart Contracts (Solidity language); Hardhat; Ethers (Ethereum blockchain); Framer Motion; TailwindCss',
      features: `
      Conectar Wallet usando Metamask;
Web 3.0 and Ethereum blockchain;
Integração com Giphy API;
Integração com Ropsten Network, para fazer trazação de Ethereums;
Criar e Listar Transactions (transações de criptomoedas);
      `,
      learn: `
      Durante a construção deste projeto, aprendi conceitos de Web 3.0 e criação de aplicação baseada em Blockchain usando Smart contracts.
Implementações e funcionalidades que aprendi:
Criar Wallet (carteira de criptomoedas); Conectar Wallet; criação de smart contracts; implementação de transactions;
Utilização de blockchain do Ethereum. E conceitos e práticas sobre a linguagem Solidity.
      `,
    },
    github: 'https://github.com/Shyroe/crypt-shyroe',
    visit: '',
  },
];

export const headerData = [
  {
    name: 'currículo',
    isActive: false,
    link: 'https://drive.google.com/file/d/1nlY4_J4o2vuXIuy_TOarcmlnhbLm9V3x/view?usp=sharing',
  },
  {
    name: 'projetos',
    isActive: false,
    link: '/#projetos',
  },
  {
    name: 'sobre',
    isActive: false,
    link: '/#sobre',
  },
  {
    name: 'contato',
    isActive: false,
    link: '/#contato',
  },
];

export const socialIcons = [
  {
    id: 1,
    name: 'github',
    link: 'https://www.github.com/Shyroe',
  },
  {
    id: 2,
    name: 'linkedin',
    link: 'https://www.linkedin.com',
  },
];

export const techData = [
  'html / css',
  'javascript',
  'reactJs / typescript',
  'nodejs / express',
  'sass / mui',
  'typescript',
];

export const aboutData = {
  title: 'sobre',
  content:
    `Olá, meu nome é Leonardo Camargo, sou um desenvolvedor Frontend e Backend apaixonado por criar projetos para a internet e solucionar problemas de programação. Além do código, prezo também por boas práticas de programação.
    Procuro sempre estudar e dominar as melhores tecnologias e práticas do mercado para desenvolver projetos robustos e escaláveis.

    Tenho +1 ano trabalhando como desenvolvedor fullstack, ao longo desse tempo, adquiri muita experiência, trabalhando em diversos tipos de projetos, tais como: páginas de vendas (landingpages), blogs, sites institucionais, Ecommerces (lojas virtuais), sites comerciais e sites educacionais.
    `,
};

export const contactData = [
  {
    id: 1,
    name: 'skype',
    info: 'leohenrique@gmail.com',
    icon: 'skype',
  },
  {
    id: 2,
    name: 'telefone',
    info: '(17) 988238706',
    icon: 'phone',
  },
  {
    id: 3,
    name: 'e-mail',
    info: 'lhc.developerweb@gmail.com',
    icon: 'envelope',
  },
];
