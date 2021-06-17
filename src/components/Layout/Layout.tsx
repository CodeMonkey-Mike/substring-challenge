import React from 'react';
import Header from '../Header/Header';
import { LayoutWrapper, Footer } from './Layout.style';

type LayoutProps = {
  className?: string;
  token?: string;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ className, children }) => {
  return (
    <LayoutWrapper className={`layoutWrapper ${className}`}>
      <Header className={`home`} />
      {children}
      <Footer>KRAP@Copyright 2021</Footer>
    </LayoutWrapper>
  );
};

export default Layout;
