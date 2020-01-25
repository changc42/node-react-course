import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";

function Landing() {
  return <h1>landing</h1>;
}

function Dashboard() {
  return <h1>Dashboard</h1>;
}

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
