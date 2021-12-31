import React from 'react';
import * as S from './styled';
import {
  HeadingPrimaryWhite,
  DividerWhite,
  Wrapper,
} from '../../styles/styled';

import { aboutData } from '../data';

export default () => (
  <S.AboutSection id="sobre">
    <Wrapper>
      <HeadingPrimaryWhite>{aboutData.title}</HeadingPrimaryWhite>
      <DividerWhite />
      <S.AboutDescription>
        {/* Olá, meu nome é: Leonardo Camargo. Minha entrada no universo do
        desenvolvimento WEB, se deu em razão da necessidade de criar um blog e
        compartilhar conhecimento com as pessoas. Eu iniciei com o Gerenciador
        de Conteúdo Wordpress, na época não entendia as tecnologias de
        desenvolvimento WEB. Apesar disso, ainda consegui criar um blog
        gratuito, porém comecei a estudar para conseguir melhorar alguns
        aspectos do blog. Acontece que me apaixonei por esse universo. Certo dia
        tomei uma decisão que mudou completamente minha vida. Disse: “Eu vou me
        tornar um desenvolvedor WEB e contribuir positivamente à vida de cada um
        com meus projetos”. A partir de então, tenho buscado conhecimento de
        todas as formas, por meio de: livros, vídeos, áudios, artigos na
        internet, cursos, etc. A meta é tornar-me o melhor desenvolvedor, isso
        mesmo, a melhor versão de mim mesmo a cada dia. */}

        {aboutData.content}
      </S.AboutDescription>
    </Wrapper>
  </S.AboutSection>
);
