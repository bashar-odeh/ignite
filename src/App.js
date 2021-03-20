import React from "react";
import Home from "./pages/Home";
import Stores from "./pages/Stores";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Navbar from "./components/Navbar";
import Tags from "./pages/Tags";

// import router
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path={["/games/:id", "/"]} exact>
          <Nav />
          <Home />
        </Route>
        <Route path={["/stores/:id", "/stores"]} exact>
          <Stores />
        </Route>
        <Route
          path={[
            "/Tags/1",
            "/Tags/:number",
            "/Tags/allgames/:id",
            "/Tags/gener/:id",
          ]}
        >
          <Tags />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
