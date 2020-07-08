import React from 'react';

import Header from '../Header/index';
import SocialMedia from '../SocialMedia/index';
import * as S from './styled';
import {
  HeadingPrimaryWhite,
  DividerWhite,
  Wrapper,
} from '../../styles/styled';
import { techData } from '../data';

import heroBg from '../../assets/img/hero-back.jpg';
import avatar from '../../assets/img/avatar2.jpg';

const index = () => (
  <S.Hero heroBg={heroBg}>
    <Header />
    <Wrapper>
      <S.Banner>
        <figure>
          <img src={avatar} alt="avatar" />
        </figure>
        <div className="banner-intro">
          <HeadingPrimaryWhite>web developer</HeadingPrimaryWhite>
          <DividerWhite />
          <div className="skills">
            {techData.map((item) => (
              <span>{item} |</span>
            ))}
          </div>
          <SocialMedia />
        </div>
      </S.Banner>
    </Wrapper>
  </S.Hero>
);

export default index;
