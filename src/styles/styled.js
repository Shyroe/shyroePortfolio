import styled, { css } from 'styled-components';
import { Github, Linkedin } from '@styled-icons/boxicons-logos/';

import V from './variables';

export const Wrapper = styled.div`
  max-width: 97rem;
  width: 100%;
  margin: 0 auto;
  /* border: 5px solid purple; */
`;

// Social media

export const skeletonIcons = css`
  width: 4.5rem;
  height: 4.5rem;
  fill: ${V.colorIcon};
`;

export const GithubIcon = styled(Github)`
  ${skeletonIcons}
`;
export const LinkedinIcon = styled(Linkedin)`
  ${skeletonIcons}
`;

export const ContactSocial = styled.nav`
  width: 100%;
  height: 10rem;
  margin-top: 2.3rem;

  & > .list {
    display: flex;
    justify-content: center;
    list-style: none;

    & > .item {
      margin-left: 1.3rem;

      & > .btn-social {
        text-decoration: none;
        padding: 1rem 1.5rem;
        border: 3px solid ${V.colorWhite};
        border-radius: 50%;
        display: block;
        /* position: relative; */
        transition: all 0.8s;

        &:hover {
          background-color: ${V.colorWhite};
          border: none;
          transform: translateY(3px);
        }
      }
    }
  }
`;

// divider

export const DividerSkeleton = styled.hr`
  height: 8px;
  width: 30%;
  text-align: center;
  margin: 2.5rem auto;
`;

export const DividerWhite = styled(DividerSkeleton)`
  background-color: rgba(255, 255, 255, 0.9);
`;

export const DividerDark = styled(DividerSkeleton)`
  background-color: rgba(33, 33, 33, 0.9);
`;

// Heading Typography

export const HeadingPrimarySkeleton = styled.h2`
  font-size: 4.4rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  line-height: 5rem;
`;

export const HeadingPrimaryWhite = styled(HeadingPrimarySkeleton)`
  color: ${V.colorWhite};
`;
export const HeadingPrimaryDark = styled(HeadingPrimarySkeleton)`
  color: ${V.colorDark};
`;
