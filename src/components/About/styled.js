import styled from 'styled-components';

export const AboutSection = styled.section`
  padding: 10% 5%;
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
`;
export const AboutDescription = styled.p`
  font-size: 2rem;
  font-family: 'Lato', 'sans-serif';
  line-height: 160%;
  font-weight: 300;
  color: #f4f4f4;

  @media only screen and (max-width: $bp-small) {
    font-size: 1.8rem;
  }
`;
