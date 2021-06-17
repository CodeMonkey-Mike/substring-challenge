import React from 'react';
import HeaderWrapper, { Heading } from './Header.style';

type Props = {
  className?: string;
  token?: string;
  pathname?: string;
};

const Header: React.FC<Props> = ({ className }) => {
  return (
    <HeaderWrapper className={className}>
      <Heading>Substring Challenge</Heading>
    </HeaderWrapper>
  );
};

export default Header;
