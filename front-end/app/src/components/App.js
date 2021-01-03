import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import SessionPage from "./sessions/SessionPage";
import ManageSessionPage from "./sessions/ManageSessionPage";
import SpeakerPage from "./speakers/SpeakerPage";

export default function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/sessions" component={SessionPage} />
        <Route path="/session" component={ManageSessionPage} />
        <Route path="/speakers" component={SpeakerPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
