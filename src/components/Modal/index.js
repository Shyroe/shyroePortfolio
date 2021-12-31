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
                  <div className="description">
                    {
                      item.content.description && (
                        <p className="paragraph">
                          {item.content.description}
                        </p>
                      )
                    }

                    {
                      item.content.technologies && (
                        <>
                          <h3 className="destaque">Tecnologias utilizadas no projeto:</h3>
                          <p className="paragraph">
                            {item.content.technologies}
                          </p>
                        </>
                      )
                    }

                    {
                      item.content.features && (
                        <>
                          <h3 className="destaque">Funcionalidades e integrações:</h3>
                          <p className="paragraph">
                            {item.content.features}
                          </p>
                        </>
                      )
                    }

                    {
                      item.content.learn && (
                        <>
                          <h3 className="destaque">O que aprendi com este projeto:</h3>
                          <p className="paragraph">
                            {item.content.learn}
                          </p>
                        </>
                      )
                    }

                  </div>
                </div>
                <div className="modal-footer">

                  {
                    item.github && (
                      <a href={item.github} target="_blank" className="action github" rel="noreferrer">
                        Github
                      </a>
                    )
                  }

                  {
                    item.visit && (
                      <a href={item.visit} target="_blank" className="action deploy" rel="noreferrer">
                        Visitar
                      </a>
                    )
                  }

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
