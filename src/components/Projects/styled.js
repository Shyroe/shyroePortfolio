import styled from 'styled-components';
import { SearchAlt } from '@styled-icons/boxicons-regular/';
import V from '../../styles/variables';

export const SearchIcon = styled(SearchAlt)`
  width: 5rem;
  height: 5rem;
  fill: ${V.colorWhite};
  display: none;
`;

export const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-columns: 30rem;
  grid-auto-rows: 21rem;
  grid-gap: 30px;
  margin-top: 4rem;

  @media only screen and (max-width: ${V.bpMedium}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: ${V.bpSmallest}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Project = styled.figure`
  width: 100%;
  height: 100%;
  position: relative;
  border: 2px solid blue;
  background: url(${(props) => props.image});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover::before {
    /* background-color: ${V.colorIcon}; */
    height: 100%;
    opacity: .7;
  }

  &:hover ${SearchIcon} {
    display: block;
    z-index: 10;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background-color: ${V.colorIcon};

  }
`;
