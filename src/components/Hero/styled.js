import styled from 'styled-components';
import V from '../../styles/variables';

export const Hero = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${(props) => props.heroBg});
  background-size: cover;
  position: relative;
`;

export const Banner = styled.div`
  height: 90vh;
  padding-top: 15rem;
  display: flex;
  flex-direction: column;

  & > figure {
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
    & > img {
      width: 25rem;
      height: 25rem;
      border-radius: 50%;

      @media only screen and (max-width: ${V.bpMedium}) {
        width: 20rem;
        height: 20rem;
      }

      @media only screen and (max-width: ${V.bpSmall}) {
        width: 15rem;
        height: 15rem;
      }

      background-position: center left;
      background-size: cover;
    }
  }

  & > .banner-intro {
    background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.9)
    );
    color: ${V.colorWhite};
    width: 100%;
    height: auto;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;

    justify-content: space-evenly;
    align-items: center;
    padding: 1.5rem 0;
    border: 2px solid blue;

    @media only screen and (max-width: ${V.bpSmall}) {
    }

    & > .skills {
      width: 80%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      & > span {
        font-size: 2rem;
        line-height: 3rem;
        font-family: 'Lato', 'sans-serif';
        line-height: 2.8rem;
        text-align: center;
        margin-right: 0.5rem;
        margin-left: 0.5rem;
        @media only screen and (max-width: ${V.bpSmall}) {
          padding: 0 1rem;
        }
      }
    }
  }
`;
