import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Users from './components/Users';
import FunctionalComponent from './components/FunctionalComponent';

function App() {

  return (
    <div className="App">
        <p>First React Test Case</p>
        <p>Rakesh Ranjan</p>
        <input type='text' placeholder='Enter User Name' name='username' id="userId" value="Rakesh Ranjan" readOnly />
        <br />
        <br />
        <img style={{width:'150px', height:'150px'}} src='https://ideas.darden.virginia.edu/sites/default/files/styles/full_width_1024px_5_3_/public/2024-09/AI%20ART%20ITA.jpg?itok=CIaF2iIX' title='AI Generated img' />
        <Input />
        <Button />
        <Users />
        <FunctionalComponent />
    </div>
  );
}

export default App;
