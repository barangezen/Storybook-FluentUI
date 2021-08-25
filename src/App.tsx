import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MyButton} from './components/MyButton/MyButtons'
import { MyCheckBox } from './components/MyCheckBox/MyCheckBox';

function App() {
  return (
    <div style={{lineHeight:'30px' }}>
     <MyCheckBox label={'Tolga'} defaultChecked={false} disabled={false} />
     <MyCheckBox label={'Baran'} defaultChecked={false} disabled={false} />
     </div>
  );
}

export default App;
