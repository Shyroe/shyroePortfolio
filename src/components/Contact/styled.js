import styled, { css } from 'styled-components';
import { Skype } from '@styled-icons/entypo-social';
import { Phone } from '@styled-icons/material';
// import { Envelope } from '@styled-icons/fa-solid';
import { EnvelopeClosed } from '@styled-icons/open-iconic';
import V from '../../styles/variables';

export const SkeletonIcon = css`
  width: 5rem;
  height: 5rem;
  fill: ${V.colorIcon};
`;

export const SkypeIcon = styled(Skype)`
  ${SkeletonIcon}
`;
export const PhoneIcon = styled(Phone)`
  ${SkeletonIcon}
`;
export const EnvelopeIcon = styled(EnvelopeClosed)`
  ${SkeletonIcon}
`;

export const ContactSection = styled.section`
  padding: 6% 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media only screen and (max-width: ${V.bpSmall}) {
    padding: 12% 0;
  }

`;

export const Contacts = styled.div`
  height: 100%;
  padding-top: 4rem;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);

  @media only screen and (max-width: ${V.bpSmall}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: ${V.bpSmallest}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ContactItem = styled.div`
  display: flex;

  flex-flow: column nowrap;

  justify-content: space-evenly;
  align-items: center;

  /* height: 13.6rem; */
  height: auto;
  width: 24.2rem;
  row-gap: 1.2rem;


  @media only screen and (max-width: ${V.bpSmallest}) {
    padding: 2.5rem 0;
  }

  @media only screen and (max-width: ${V.bpSmall}) {
    padding: 2rem 0;
  }
  & > .name {
    color: ${V.colorDark};
    font-size: 1.9rem;
    text-transform: capitalize;
  }

  & > .info {
    font-size: 1.9rem;
    color: ${V.colorDark};
    font-weight: 300;
  }
`;
