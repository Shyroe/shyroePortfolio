import styled from 'styled-components';
import mq from 'styled-media-query';
import V from '../../styles/variables';

export const WrapperModal = styled.div`
position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 500;
  background-color: ${V.colorWhite};

  padding-bottom: 4rem;
  /* border: 2px solid green; */




  /* &:before {
    /* content: "";
  display: none;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10; */

  /* position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 500;
  /* background-color: ${V.colorWhite};
  background: rgba(0, 0, 0, 0.6);
  padding-bottom: 4rem;
  border: 2px solid green;
  } */
`;

export const ModalContent = styled.div`
  width: 50%;
  height: auto;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  color: ${V.colorDark};
  /* border: 2px solid orange; */

  ${mq.lessThan('medium')`
  width: 90%;
  `}

  ${mq.lessThan('small')`
  width: 98%;
  `}

  & > .close {
    margin-left: auto;
    margin-right: 1rem;
    font-size: 4rem;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 2rem;
    color: ${V.colorDark};

    &:hover {
      opacity: 0.6;
    }
  }

  & > .modal-body {
    & > figure {
      width: auto;
      /* height: auto; */
      /* border: 2px solid red; */

      & > img {
        width: 100%;
        height: 100%;
      }
    }
    & > .description {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      /* border: 2px solid blue; */
      row-gap: .7rem;
      margin-top: 5rem;

      & > .destaque {
        color: ${V.colorIcon};
        font-weight: 600;
        font-size: 1.6rem;
        text-transform: uppercase;
        margin-bottom: .5rem;
        margin-top: 2.8rem;
        text-align: left;
      }
     & > .paragraph {
        font-size: 1.7rem;
        font-weight: 400;
        line-height: 1.6;
      }
    }

  }

  & > .modal-footer {
    width: 100%;
    color: ${V.colorDark};
    margin-top: 2.5rem;
    text-transform: capitalize;
    font-weight: bold;
    font-size: 1.6rem;
    /* border: 2px solid red; */
    display: flex;
    flex-wrap: wrap;
    padding: 4rem 0px;
    column-gap: 2.5rem;
    & > .repo {
      margin-bottom: 0.5rem;
    }

    & > .link {
      text-decoration: none;
    }

    .action {
      display: inline-block;
      padding:1rem 2.5rem;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      text-align: center;
      font-size: 1.6rem;
      text-transform: uppercase;
      text-decoration: none;
    }

    .github {
      background-color: ${V.colorIcon};
      color: ${V.colorWhite};

      &:hover {
        background-color: ${V.colorWhite};
      color:  ${V.colorIcon};
      }
    }

    .deploy {
      background-color: ${V.colorDark};
      color: ${V.colorWhite};

      &:hover {
      background-color: ${V.colorWhite};
      color: ${V.colorDark};
      }
    }
  }
`;
