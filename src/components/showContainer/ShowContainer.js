import React, { useState } from 'react';
import ShowButtonSet from './ShowButtonSet';

const ShowContainer = ({ children, selectRenderMode }) => {
  const buttonList = ['counter', 'inputs', 'users', 'all'];

  return (
    <div>
      <ShowButtonSet buttonList={buttonList} selectRenderMode={selectRenderMode} />

      <div>{children}</div>
    </div>
  );
};

export default ShowContainer;
