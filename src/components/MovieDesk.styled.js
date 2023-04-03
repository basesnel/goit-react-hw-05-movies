import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 16px;
`;

export const Desc = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid #c0c0c0;
`;

export const BackLink = styled(Link)`
  display: block;
  margin: 16px;
  font-weight: 700;
`;
