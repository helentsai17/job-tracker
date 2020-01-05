import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import './App.css';

import Navbar from "./components/navbar.component"
import CompanyApplyList from "./components/company-apply-list.component"
import StatusUpdate from "./components/status-update.component"
import JobAppied from "./components/job-applied.component"
import CreateUser from "./components/create-user.component"

function App() {
  return (
    
    <Router>
      <Header />
      <Navbar />
      <br/>
      <Route path = "/" exact component = {CompanyApplyList} />
      <Route path = "/edit/:id" component = {StatusUpdate} />
      <Route path = "/create" exact component = {JobAppied} />
      <Route path = "/user" exact component = {CreateUser} />
    </Router>
   
  );
}

export default App;
