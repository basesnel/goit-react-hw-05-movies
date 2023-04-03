import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  padding: 8px;
  list-style: none;
`;

export const Item = styled.li`
  padding-bottom: 8px;
`;

export const MovieLink = styled(Link)`
  display: inline-block;
  padding: 4px 0;
  color: #444;
  border-bottom: 1px solid transparent;
  text-decoration: none;

  transition: border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-bottom: 1px solid #444;
  }
`;
