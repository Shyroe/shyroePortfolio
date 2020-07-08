import React from 'react';
import * as S from './styled';
import { Wrapper } from '../../styles/styled';
import SocialMedia from '../SocialMedia';

export default () => (
  <S.LocationSection>
    <Wrapper>
      <S.Location>
        <div className="map">
          <h2 className="title">Localização Atual</h2>
          <h4 className="city">Santa Adélia, SP</h4>
          <div className="google-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8592.609669211724!2d-48.814268076985286!3d-21.247352526343622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94beae7b839dd671%3A0x52bfc9abb420eea4!2sSanta%20Ad%C3%A9lia%2C%20SP%2C%2015950-000!5e0!3m2!1spt-BR!2sbr!4v1579860566576!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              frameBorder="0"
              // style="border:0"
              allowFullScreen=""
              title="map"
            />
          </div>
        </div>
        <div className="social">
          <h2 className="social-title">Acessar Redes Sociais</h2>
          <SocialMedia />
        </div>
      </S.Location>
    </Wrapper>
  </S.LocationSection>
);
