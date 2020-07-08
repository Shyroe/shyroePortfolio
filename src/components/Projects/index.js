import React, { useState, useEffect, Fragment } from 'react';

import { cloneDeep } from 'lodash';
import { projectsData } from '../data';
import Modal from '../Modal/index';
import * as S from './styled';
import { Wrapper } from '../../styles/styled';

export default () => {
  const [projects, setProjects] = useState(projectsData);
  const [projectsClone, setProjectsClone] = useState([]);
  const [modalsClone, setModalsClone] = useState([]);
  console.log('modals clone state: ', modalsClone);
  const [showModal, setShowModal] = useState(false);
  const [activeModal, setActiveModal] = useState({});

  const loadAllProjects = () => {
    console.log('All projects');
    const copyProjects = cloneDeep(projects);
    console.log('LoadAll Copy Projects: ', copyProjects);
    copyProjects.forEach((item) => {
      // Set all to true
      item.show = true;
      return item;
    });
    setProjectsClone([...copyProjects]);
  };

  useEffect(() => {
    loadAllProjects();
  }, []);
  // Modals
  const openModal = (id) => {
    // Show modal container
    setShowModal(true);

    // const copyModals = _.cloneDeep(modals);
    // const copyModals = cloneDeep(projects);

    const copyModals = JSON.parse(JSON.stringify(projects));
    console.log('openmodal copyModals: ', copyModals);

    const selectedModal = copyModals.find((item) => item.id === id);
    console.log('selectedModal: ', selectedModal);
    selectedModal.show = true;

    // Active Modal
    setActiveModal(selectedModal);

    // Remover modal antigo
    const filteredModals = copyModals.filter((item) => item.id !== id);
    console.log('open filteredModals: ', filteredModals);

    // setProjectsClone([...filteredModals, selectedModal]);
    setModalsClone([...filteredModals, selectedModal]);
  };

  const closeModal = (id) => {
    // Close modal container
    setShowModal(false);

    // const copyModals = _.cloneDeep(modals);
    // const copyModals = cloneDeep(projects);
    const copyModals = JSON.parse(JSON.stringify(projects));
    // const copyModals = JSON.parse(JSON.stringify(modals));
    const newModals = copyModals.map((item) => {
      if (item.id === id) {
        item.show = false;
      }
      return item;
    });

    console.log('CloseModals - newModals: ', newModals);
    // setProjectsClone([...newModals]);
    setModalsClone([...newModals]);
  };

  return (
    <>
      <Wrapper>
        <S.ProjectsWrapper>
          {projectsClone.map((item) => (
            <>
              {item.show && (
                <S.Project
                  onClick={() => openModal(item.id)}
                  image={item.image}
                  className="project"
                  key={item.id}
                >
                  <S.SearchIcon />
                </S.Project>
              )}
            </>
          ))}
        </S.ProjectsWrapper>
      </Wrapper>
      <>
        {showModal && (
          <Modal modalsClone={modalsClone} closeModal={closeModal} />
        )}
      </>
    </>
  );
};

// export default index;
