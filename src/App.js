import React from 'react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Example1 from "./components/Example1/Example1"
import Example2 from "./components/Example2"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Example1}/>
        <Route path='/Example2' component={Example2}/>
      </Switch>
      <div className="LinksToPage">
        <Link to="/">Page 1</Link>
        <Link to="/Example2">Page 2</Link>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
