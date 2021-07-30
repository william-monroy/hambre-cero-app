import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Upload from "./pages/upload/Upload";
import Results from "./pages/results/Results";
import Products from "./pages/products/Products";
import Categories from "./pages/categories/Categories";
import ResultDetail from "./pages/results/ResultDetail";
import Terms from "./pages/terms/Terms";
import Policy from "./pages/policy/Policy";
import Deletion from "./pages/deletion/Deletion";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/deletion" component={Deletion} />
        <Route path="/policy" component={Policy} />
        <Route path="/terms" component={Terms} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/results" component={Results} />
        <Route path="/results/:id" component={ResultDetail} />
        <Route path="/products" component={Products} />
        <Route path="/categories" component={Categories} />
        <Route path="/api" component={Upload} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Router>
  );
}

export default App;
