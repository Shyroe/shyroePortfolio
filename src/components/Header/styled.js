import styled from 'styled-components';
import { Code } from '@styled-icons/entypo/';
import { Bars } from '@styled-icons/fa-solid/';
import V from '../../styles/variables';

export const IconCode = styled(Code)`
  width: 2rem;
  height: 2rem;
  fill: ${V.colorIcon};
  margin-right: 1rem;
`;

export const IconBars = styled(Bars)`
  width: 3rem;
  height: 3rem;
  fill: ${V.colorWhite};
`;

export const Header = styled.div`
  background-color: #000120;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;

  & > .head-nav {
    height: 10rem;
    /* height: 8rem; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.6s;
    padding: 0 2rem;

    & > .shrink {
      height: 7.5rem;
      font-size: 2rem;
    }

    & > .brand {
      display: flex;
      align-items: center;
      font-size: 2rem;
    }
  }
`;

export const respIcons = styled.div`
  position: absolute;
  top: 30%;
  right: 10%;
  width: 5rem;
  height: 5rem;
  border: 3px solid green;
  display: none;
  cursor: pointer;

  & > ${IconBars} {
    font-size: 4.5rem;

    &:hover {
      opacity: 0.8;
      color: ${V.colorIcon};
    }
  }

  @media only screen and (max-width: ${V.bpSmall}) {
    display: block;
  }
`;

export const Navigation = styled.nav`
  @media only screen and (max-width: ${V.bpSmall}) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 30rem;
    border-top: 1px solid white;
    background-color: #000120;
    transition: all 0.3s;
    transform: scaleY(0);
    transform-origin: top;

    & > .open {
      transform: scaleY(1);
    }
  }

  & > .list {
    list-style: none;
    display: flex;

    @media only screen and (max-width: ${V.bpSmall}) {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-evenly;
      height: 100%;
      border: 2px solid green;
    }
    & > .item {
    margin-right: 1rem;

  & > .link {
    text-decoration: none;
    /* color: ${V.colorWhite}; */
    color: #fff;
    font-size: 1.7rem;
    text-transform: uppercase;
    font-weight: bold;
    padding: 1rem;
    position: relative;

    @media only screen and (max-width: ${V.bpSmall}) {
      font-size: 2rem;
    }
  }

  & > .link:hover {
    color: ${V.colorIcon};
  }

  & > .link::before,
  & > .link::after {
    content: '';
    width: 100%;
    height: 0.2rem;
    position: absolute;
    left: 0;
    transform: scaleX(0);
    transition: all 1s;
    /* background-color:  ${V.colorWhite}; */
    background-color: ${V.colorWhite};
  }

  & > .link::before {
    top: 0;
    transform-origin: left;
  }

  & > .link::after {
    bottom: 0;
    transform-origin: right;
  }

  & > .link:hover::before,
  & > .link:hover::after {
    transform: scaleX(1);
  }
    }
}
`;
