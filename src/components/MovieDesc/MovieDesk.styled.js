import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 0 16px;
`;

export const Desc = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  border-bottom: 1px solid #c0c0c0;
  padding: 16px 0;
`;

export const BackLink = styled(Link)`
  display: inline-block;
  padding: 8px 16px;
  color: orangered;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 700;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: white;
    background-color: orangered;
  }
`;

export const List = styled.ul`
  padding: 8px;
  list-style: none;
`;

export const Item = styled.li`
  padding-bottom: 8px;
`;

export const MoreDetailLink = styled(Link)`
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

export const Loading = styled.div`
  width: 150px;
  height: 50px;
  margin: 16px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #808080;
  border-radius: 5px;
  color: #808080;
`;
