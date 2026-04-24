import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './style.css';

window.React = React;

import './components/HomeHero.jsx';
import './components/HomeArchitecture.jsx';
import './components/HomeServices.jsx';
import './components/HomeReviews.jsx';
import './components/HomeBlog.jsx';
import './components/HomeCTA.jsx';
import './components/Footer.jsx';
import './components/Consult.jsx';
import './components/Intro.jsx';
import './components/MoreThanDesign.jsx';
import './components/Nav.jsx';
import './components/Portfolio.jsx';
import './components/Process.jsx';
import './components/ServiceArea.jsx';
import './components/Hero.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
