import React, {Component} from 'react';
import Contact from './components/Contact'
import './App.css';


function App() {
  return (

    <div>
    <Contact name="Anita Sutton" avatar="https://randomuser.me/api/portraits/women/82.jpg" status />
    <Contact name="Jim George" avatar="https://randomuser.me/api/portraits/men/85.jpg" />
    <Contact name="Charlotte Ryan" avatar="https://randomuser.me/api/portraits/women/87.jpg" status />
    </div>
  )

}




export default App;
