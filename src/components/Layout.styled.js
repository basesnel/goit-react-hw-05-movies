import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 16px;
  margin-bottom: 16px;
  /* border-bottom: 1px solid black; */
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);

  nav > ul {
    display: flex;
    padding-left: 0;
    list-style: none;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
