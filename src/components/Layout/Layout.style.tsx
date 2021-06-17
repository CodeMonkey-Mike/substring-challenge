import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const LayoutWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Footer = styled.div`
  background-color: ${themeGet('colors.primary')};
  color: ${themeGet('colors.white')};
  text-align: center;
  padding: 1rem;
`;
