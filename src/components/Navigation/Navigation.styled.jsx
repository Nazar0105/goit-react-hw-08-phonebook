import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #7fff00; /* Кислотно зелений колір */
  font-size: 20px;

  &:hover {
    color: #ff4500; /* Яскраво червоний колір при наведенні */
  }
`;
