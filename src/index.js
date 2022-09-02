import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Route, Link, Routes} from 'react-router-dom';
import BeebeBnb from './components/beebebnb';
import CarriageHouse from './components/carriagehousestonington';
import RusticRetreat from './components/rusticretreatct';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route  path='/beebebnb' element={<BeebeBnb />}></Route>
        <Route  path='/rusticretreatct' element={<RusticRetreat />}></Route>
        <Route  path='/carriagehousestonington' element={<CarriageHouse />}></Route>
      </Routes>
    </BrowserRouter>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
