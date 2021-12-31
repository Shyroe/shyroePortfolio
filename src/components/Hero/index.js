import React from 'react';
import Typical from 'react-typical';
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
          <HeadingPrimaryWhite>
            <span style={{ color: '#474be7' }}>
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  'Profissional',
                  1000,
                  'Apaixonado',
                  1000,
                  'Front-End',
                  1000,
                ]}
              />
            </span>{' '}
            web developer
          </HeadingPrimaryWhite>
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
