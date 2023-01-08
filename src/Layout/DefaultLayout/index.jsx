import React from 'react';
import Header from '../../components/Header';

const DefaultLayout = ({ children }) => {
  return (
    <div>
    
      <div className="container">{children}</div>
    </div>
  );
};

export default DefaultLayout;
