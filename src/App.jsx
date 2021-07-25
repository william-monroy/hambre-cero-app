import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home/Home.jsx';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Dashboard from './components/dashboard/Dashboard';
import Upload from './components/upload/Upload';
import Results from './components/results/Results';


function App() {
  return (
      <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/results" component={Results} />
        <Route path="/api" component={Upload} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Router>
  );
}

export default App;