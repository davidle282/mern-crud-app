import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import DetailPage from "./components/DetailPage";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route path="/" exact component={LandingPage} />
          <Route path="/posts/:id" component={DetailPage} />
          <Route path="/add" component={CreatePost} />
          <Route path="/edit/:id" component={EditPost} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
