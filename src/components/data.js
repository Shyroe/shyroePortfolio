/* eslint-disable import/no-unresolved */
// Data content for components

import natoursImg from '../assets/img/natours-banner.jpg';
import trilloImg from '../assets/img/trillo.jpg';
import gitFinderImg from '../assets/img/github-finder.jpg';
import favLinksImg from '../assets/img/favoritelinks-home.jpg';
import shopCartImg from '../assets/img/shopping-cart.jpg';
import expenseTrackerImg from '../assets/img/expense-tck.jpg';

// Projects Data

export const projectsData = [
  {
    id: 1,
    show: false,
    title: 'natours',
    image: natoursImg,
    content: `Projeto Front-End (CSS apenas) mobile responsive e desktop responsive, feito com pré-processador Css (SASS) e arquitetura Css (BEM).

    A ideia do projeto é criar uma interface complexa e aplicar conceitos de código CSS para tornar o projeto escalável e também criar fantásticas animações e efeitos apenas utilizando a linguagem de estilos CSS.`,
    github: '',
    visit: '',
  },
  {
    id: 2,
    show: false,
    title: 'trillo',
    image: trilloImg,
    content: `Projeto Front-End (CSS apenas) mobile responsive e desktop responsive, feito com pré-processador Css (SASS) e arquitetura Css (BEM).

    A ideia do projeto é criar uma interface complexa e responsiva, aplicando os conceitos do módulo flexbox.`,
  },
  {
    id: 3,
    show: false,
    title: 'github finder',
    image: gitFinderImg,
    content: `Este projeto é uma aplicação, que utiliza a Api do Github. Consiste em pesquisar por um usuário do Github e a aplicação retorna 30 usuários que estão relacionados com o nome inserido no campo de busca. Ao clicar em um usuário você poderá ver suas informações e acessar links que levam ao perfil do mesmo no Github ou à projetos realizados.

    Projeto Front-End, construído com o framework React e Api do Github. Ao desenvolver esse projeto compreendi importantes conceitos e tecnologias do React. E, também, trabalhei com rotas e requisições assíncronas à API.`,
  },
  {
    id: 4,
    show: false,
    title: 'favorite links',
    image: favLinksImg,
    content: `Este é um projeto BackEnd. Foi construído em NodeJS com o framework ExpressJS; PostgreSQL para banco de dados; PassportJS para a criação da Autentição no backend. A parte visual foi feita com Handlebars(template engine) e Bootstrap4.

    A ideia por trás desse projeto é a criação de uma aplicação para armazenar diversas Urls, de diferentes pessoas que acessarem a plataforma, e disponibilizá-las facilmente ao usuário. A plataforma conecta individualmente cada usuário à sua lista de Urls salvas.`,
  },
  {
    id: 5,
    show: false,
    title: 'shoppping cart',
    image: shopCartImg,
    content:
      'Aplicação que simula a parte de um ecommerce em que adicionamos produtos ao carrinho de compras. Trata-se de um CRUD Front-End feito em React, utilizando as tecnologias: Reack hooks, contextApi e SASS para estilização.',
  },
  {
    id: 6,
    show: false,
    title: 'expense tracker',
    image: expenseTrackerImg,
    content:
      'Aplicação de finanças que disponibiliza uma interface para o usuário registrar seus gastos e ganhos diários, com o intuito de aumentar o controle a respeito da sua vida financeira. Trata-se de um projeto Front-End feito em React, que utiliza as tecnologias: React Hooks; useReducer() e SASS.',
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
    'Olá, meu nome é: Leonardo Camargo. Minha entrada no universo do desenvolvimento WEB, se deu em razão da necessidade de criar um blog e compartilhar conhecimento com as pessoas. Eu iniciei com o Gerenciador de Conteúdo Wordpress, na época não entendia as tecnologias de desenvolvimento WEB. Apesar disso, ainda consegui criar um blog gratuito, porém comecei a estudar para conseguir melhorar alguns aspectos do blog. Acontece que me apaixonei por esse universo. Certo dia tomei uma decisão que mudou completamente minha vida. Disse: “Eu vou me tornar um desenvolvedor WEB e contribuir positivamente à vida de cada um com meus projetos”. A partir de então, tenho buscado conhecimento de todas as formas, por meio de: livros, vídeos, áudios, artigos na internet, cursos, etc. A meta é tornar-me o melhor desenvolvedor, isso mesmo, a melhor versão de mim mesmo a cada dia.',
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
