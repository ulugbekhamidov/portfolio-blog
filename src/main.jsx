import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from "./components/header/header"
import Main from "./components/main/tana"
import Info from "./components/info/info"
import Collection from "./components/collection/collection/"
import Footer from "./components/footer/footer"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Main/>
    <Info/>
    <Collection/>
    <Footer/>
  </React.StrictMode>,
)
