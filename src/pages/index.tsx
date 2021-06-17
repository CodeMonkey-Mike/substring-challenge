import React from 'react';
import Head from 'next/head';
import { Substring } from 'src/containers';

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Substring />
    </>
  );
};

export default Index;
