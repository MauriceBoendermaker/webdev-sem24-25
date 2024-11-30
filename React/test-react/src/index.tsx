import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as lesson1 from './lesson1';
import * as reg from './Register';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <>
    <h1>Hello world!</h1>
    <lesson1.F1/>
    <lesson1.F2/>
    <lesson1.F3 n={50} symbol='@'/>
    <lesson1.F4 n={10}/>
    <lesson1.C4 n={8}/>
    <lesson1.Spin min={0} max={10}/>

    <reg.Register/>
    </>
);