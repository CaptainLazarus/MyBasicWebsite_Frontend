import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {About} from './routes/About.jsx';
import {Blog} from './routes/Blog.jsx';
import {Portfolio} from './routes/Portfolio.jsx';
import {Template} from './routes/Template.jsx';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template current='Home' element={<App/>}/>} />
        <Route path="about" element={<Template current='About' element={<About/>}/>} />
        <Route path="blog" element={<Template current='Blog' element={<Blog/>}/>} />
        <Route path="portfolio" element={<Template current='Portfolio' element={<Portfolio/>}/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
