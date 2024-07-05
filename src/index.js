import React from 'react'
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import './style/main.css'
import 'react-multi-carousel/lib/styles.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import 'react-medium-image-zoom/dist/styles.css'
import 'video-react/dist/video-react.css'
import '../node_modules/react-image-gallery/styles/css/image-gallery.css'
import 'react-image-gallery/styles/css/image-gallery.css'

import reportWebVitals from './reportWebVitals'

// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
