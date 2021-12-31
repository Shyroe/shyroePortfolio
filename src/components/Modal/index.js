import React from 'react';

import * as S from './styled';
import { HeadingPrimaryDark, DividerDark, Wrapper } from '../../styles/styled';

const index = ({ modalsClone, closeModal }) => (
  <S.WrapperModal>
    {/* <Wrapper> */}
    {modalsClone.map((item) => {
      console.log('modals item: ', item);
      return (
        <>
          {item.show && (
            <>
              <S.ModalContent key={`modal${item.id}`} image={item.image}>
                <span
                  role="button"
                  tabIndex="0"
                  onClick={() => closeModal(item.id)}
                  onKeyUp={() => closeModal(item.id)}
                  className="close"
                >
                  &times;
                </span>
                <HeadingPrimaryDark>{item.title}</HeadingPrimaryDark>
                <DividerDark />
                <div className="modal-body">
                  <figure>
                    <img src={item.image} alt="this is the modal img" />
                  </figure>
                  <p className="description">{item.content}</p>
                </div>
                <div className="modal-footer">
                  {/* <h3 className="repo">
                    Github:
                    <a className="link" href="/">
                      link
                    </a>
                  </h3> */}

                  <a href="/" className="action github">
                    Github
                  </a>
                  <a href="/" className="action deploy">
                    Visitar
                  </a>


                  {/* <h3 className="repo">
                    Netlify:
                    <a className="link" href="/">
                      link
                    </a>
                  </h3> */}
                </div>
              </S.ModalContent>
            </>
          )}
        </>
      );
    })}
    {/* </Wrapper> */}
  </S.WrapperModal>
);

export default index;
