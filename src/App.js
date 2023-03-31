import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './components/homePage/HomePage';
import SearchPage from './components/searchPage/SearchPage';
import DealDetails from './components/dealDetails/Deal.Details';
import './App.css';

function App(props) {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/search' element={<SearchPage />} />
        <Route exact path='/deal-details/:dealId' element={<DealDetails />} />
      </Routes>
    </Router>
  );
}
export default App;