import styled from 'styled-components';
import V from '../../styles/variables';

export const WrapperModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 500;
  /* overflow-y: none; */
  /* overflow: auto; */
  /* overflow: hidden; */
  /* background-color: rgba(0, 0, 0, 0.5); */
  background-color: ${V.colorWhite};
  padding-bottom: 4rem;
  border: 2px solid green;
`;

export const ModalContent = styled.div`
  /* position: absolute;
  top: 0%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
  width: 50%;
  height: 100%;
  margin: 3rem auto;
  /* padding-top: 3rem; */
  /* width: 50%; */
  /* width: auto;
  height: 100%; */
  display: flex;
  flex-direction: column;
  color: ${V.colorDark};
  border: 2px solid orange;

  & > .close {
    margin-left: auto;
    margin-right: 1rem;
    font-size: 4rem;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 2rem;
    color: ${V.colorDark};

    &:hover {
      opacity: 0.7;
    }
  }

  & > .modal-body {
    & > figure {
      width: auto;
      height: auto;
      border: 2px solid red;

      & > img {
        width: 100%;
        height: 100%;
      }
    }
    & > .description {
      font-size: 2rem;
      font-weight: 400;
      /* line-height: 2.6rem; */
      margin-top: 1.5rem;
    }
  }

  & > .modal-footer {
    width: 100%;
    /* margin: 0 auto; */
    color: ${V.colorDark};
    margin-top: 1.5rem;
    text-transform: capitalize;
    font-weight: bold;
    font-size: 1.6rem;
    & > .repo {
      margin-bottom: 0.5rem;
    }

    & > .link {
      text-decoration: none;
    }
  }
`;
