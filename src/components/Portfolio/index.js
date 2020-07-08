import React from 'react';

import * as S from './styled';
import { HeadingPrimaryDark, DividerDark, Wrapper } from '../../styles/styled';
import Projects from '../Projects/index';

const index = () => (
  <S.PortfolioWrapper>
    <HeadingPrimaryDark>projetos recentes</HeadingPrimaryDark>
    <DividerDark />
    <Projects />
  </S.PortfolioWrapper>
);

export default index;
