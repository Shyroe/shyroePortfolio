import React, { useState } from 'react';
import * as S from './styled';
import { Wrapper } from '../../styles/styled';
import { headerData } from '../data';

const index = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <S.Header>
      <div className="head-nav">
        <div className="brand">
          <S.IconCode />
          Shyroe
        </div>
        <S.Navigation openMenu={openMenu}>
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
          <S.IconBars onClick={toggleMenu} />
        </S.respIcons>
      </div>
    </S.Header>
  );
};

export default index;
