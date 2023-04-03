import styled from 'styled-components';

export const SearchBlock = styled.form`
  display: flex;
  gap: 5px;
`;

export const Field = styled.input`
  width: 200px;
  padding: 5px;
  border: 1px solid #191970;
  border-radius: 2px;
`;

export const Search = styled.button`
  padding: 5px;
  border: 1px solid #191970;
  border-radius: 2px;
  color: #191970;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: white;
    background-color: #191970;
  }
`;
