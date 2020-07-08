import React from 'react';
import * as S from './styled';
import { HeadingPrimaryDark, Wrapper } from '../../styles/styled';
import { contactData } from '../data';

export default () => {
  const renderIcon = (icon) => {
    switch (icon) {
      case 'skype':
        return <S.SkypeIcon />;
        break;
      case 'phone':
        return <S.PhoneIcon />;
        break;
      case 'envelope':
        return <S.EnvelopeIcon />;
        break;
      default:
        return <S.Skype />;
    }
  };
  return (
    <S.ContactSection>
      <Wrapper>
        <HeadingPrimaryDark>Entre em contato</HeadingPrimaryDark>
        <S.Contacts>
          {contactData.map((item) => (
            <S.ContactItem key={item.id}>
              {renderIcon(item.icon)}
              <h4 className="name"> {item.name} </h4>
              <p className="info"> {item.info} </p>
            </S.ContactItem>
          ))}
        </S.Contacts>
      </Wrapper>
    </S.ContactSection>
  );
};
