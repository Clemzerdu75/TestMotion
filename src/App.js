import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Example1 from "./components/Example1/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import Example4 from "./components/Example4/Example4";
import Example5 from "./components/Example5/Example5";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Example1} />
          <Route path="/Example2" component={Example2} />
          <Route path="/Example3" component={Example3} />
          <Route path="/Example4" component={Example4} />
          <Route path="/Example5" component={Example5} />
        </Switch>
        <div className="LinksToPage">
          <Link to="/">Page 1</Link>
          <Link to="/Example2">Page 2</Link>
          <Link to="/Example3">Page 3</Link>
          <Link to="/Example4">Page 4</Link>
          <Link to="/Example5">Page 5</Link>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
