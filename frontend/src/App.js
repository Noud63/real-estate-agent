import React from 'react';
import Main from './components/Main'
import Header from './components/Header'
import Content from './pages/Content'
import Footer from './components/Footer'
import Register from './pages/Register'
import Login from './pages/Login'
import Buy from './pages/Buy'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Main />
        <Routes>
          <Route path='/' element={<Content />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/buy' element={<Buy />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
