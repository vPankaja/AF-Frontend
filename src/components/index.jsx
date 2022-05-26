import React from 'react';
import {render} from 'react-dom';
import App from './App';
import Header from './Header';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import StudentRegister from './Student/studentRegister';

render(
    <>
    <Header/>
    <BrowserRouter>
        <Routes>
          <Route path='/studentRegister' exact element={<StudentRegister/>} />
        </Routes>
        </BrowserRouter>
    </>
    , document.getElementById('app'));

export default App;