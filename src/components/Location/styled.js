import styled from 'styled-components';
import V from '../../styles/variables';

export const LocationSection = styled.section`
  padding: 10% 0% 10% 10%;
  background-color: #000120;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const Location = styled.div`
  display: flex;
  justify-content: flex-start;

  color: ${V.colorWhite};
  width: 100%;

  @media only screen and (max-width: ${V.bpSmall}) {
    flex-flow: column nowrap;
  }

  & > .map {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 35rem;
    margin-right: 5rem;

    & > .title {
      margin: 0;
      padding: 0;
      font-size: 2.7rem;
      text-transform: uppercase;
    }
    & > .city {
      font-size: 1.8rem;
    }

    & > .google-map {
      width: 32.4rem;
      height: 20rem;

      & > iframe {
        width: 32.4rem;
        height: 20rem;
        border-radius: 1.5rem;
      }
    }
  }
  & > .social {
    & .social-title {
      font-size: 2.7rem;
      text-transform: uppercase;
      font-weight: 600;
      margin-bottom: 5rem;
      margin-top: 1.7rem;

      @media only screen and (max-width: $bp-small) {
        text-align: center;
        padding-top: 4rem;
      }
    }
  }
`;
