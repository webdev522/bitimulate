import React from 'react';
import { PageTemplate, PolyBackground, Block } from 'components';
import { HeaderContainer } from 'containers';

const HomePage = () => {
  return (
    <PageTemplate 
      header={<HeaderContainer/>}>
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