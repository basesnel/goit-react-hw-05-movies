import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 8px;
  list-style: none;
`;

export const Item = styled.li`
  padding-bottom: 8px;
`;

export const Attribute = styled.p`
  margin: 0;
  padding: 4px 0;
  color: #808080;
`;

export const Person = styled.p`
  margin: 0;
  padding: 4px 0;
  color: #202020;
`;

export const Blank = styled.div`
  width: 200px;
  height: 300px;
  background: #ddd;
  border: 1px solid #888;
  color: #888;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;
