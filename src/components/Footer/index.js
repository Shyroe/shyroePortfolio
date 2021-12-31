import React from 'react';
import * as S from './styled';

export default () => {
  const actualDate = new Date().getFullYear();
  return (
    <S.FooterSection>
      <h3 className="description">Copyright Shyroe {actualDate} </h3>
    </S.FooterSection>
  );
};
