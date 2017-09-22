import React from 'react';
import { Header, PageTemplate, PolyBackground, Block } from 'components';

const HomePage = () => {
  return (
    <PageTemplate 
      header={<Header/>}>
      <PolyBackground>
        <Block center shadow>
          <h1>Please trade your bitcoin here - Cryptocurrency Virtual Trade</h1>
          <h2>All trade is being processed by real-time bitcoin data</h2>
        </Block>
      </PolyBackground>
    </PageTemplate>
  );
};

export default HomePage;