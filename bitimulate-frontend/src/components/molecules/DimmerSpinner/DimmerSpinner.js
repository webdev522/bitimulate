import React from 'react';
import { Dimmer, Spinner } from 'components';

const DimmerSpinner = ({visible}) => {
  if (!visible) return null;
  return (
    <div>
      <Dimmer>
        <Spinner/>
      </Dimmer>      
    </div>
  );
};

export default DimmerSpinner;