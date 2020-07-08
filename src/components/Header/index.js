import React from 'react';
import * as S from './styled';
import { Wrapper } from '../../styles/styled';
import { headerData } from '../data';

const index = () => (
  <S.Header>
    <div className="head-nav">
      {/* <Wrapper> */}
      <div className="brand">
        <S.IconCode />
        Shyroe
      </div>
      <S.Navigation>
        <ul className="list">
          {headerData.map((item) => (
            <li className="item">
              <a href="/" className="link">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </S.Navigation>
      <S.respIcons>
        <S.IconBars />
      </S.respIcons>
      {/* </Wrapper> */}
    </div>
  </S.Header>
);

export default index;
