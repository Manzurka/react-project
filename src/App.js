import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./views/Homepage";
import About from "./views/About";
import Add from "./views/Add";
import Teachers from "./views/Teachers";
import Regions from "./views/Regions";
import Header from "./components/Header";
import Students from "./views/Students";
import ViewStudents from "./views/ViewStudents";
import { DataProvider } from "./providers/DataProvider";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route
              path="/table/:region/:teacher"
              render={routeProps => {
                return (
                  <>
                    <Regions match={routeProps.match} />
                  </>
                );
              }}
            />
            <Route
              path="/table/:region"
              render={routeProps => {
                return <Regions match={routeProps.match} />;
              }}
            />

            <Route path="/table" component={Regions} />
            <Route
              path="/add"
              render={() => {
                return <Add />;
              }}
            />
            <Route
              path="/news"
              render={() => {
                return <About />;
              }}
            />
            <Route
              path="/view"
              render={() => {
                return <ViewStudents />;
              }}
            />

            <Route
              path="/"
              render={() => {
                return <Homepage />;
              }}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default () => (
  <DataProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataProvider>
);
