import React, { useState } from 'react';

import { socialIcons } from '../data';
import { GithubIcon, LinkedinIcon, ContactSocial } from '../../styles/styled';

const index = () => {
  // const [icon, setIcon] = useState('');

  const changeIcon = (name) => {
    switch (name) {
      case 'github':
        return <GithubIcon />;
        break;
      case 'linkedin':
        return <LinkedinIcon />;
        break;
      default:
        return <GithubIcon />;
    }
  };
  return (
    <ContactSocial>
      <ul className="list">
        {socialIcons.map((icon) => (
          <li key={icon.id} className="item">
            <a href={icon.link} className="btn-social">
              {changeIcon(icon.name)}
            </a>
          </li>
        ))}
      </ul>
    </ContactSocial>
  );
};

export default index;
