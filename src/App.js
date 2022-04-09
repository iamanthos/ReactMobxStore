import React, { useState, useEffect } from 'react';
import './style.css';
import { observer } from 'mobx-react';
import { useStore } from './hooks';
import Keypair from './keypair';

const App = () => {
  return (
    <div>
      <Keypair />
    </div>
  );
};

export default App;
