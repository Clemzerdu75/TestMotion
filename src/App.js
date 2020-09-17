import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Example1 from "./components/Example1/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import Example4 from "./components/Example4/Example4";
import Example5 from "./components/Example5/Example5";
import Example6 from "./components/Example6/Example6";
import Example7 from "./components/Example7/Example7";
import Example8 from "./components/Example8/Example8";
import Example9 from "./components/Example9/Example9";
import Example10 from "./components/Example10/Example10";
import Example11 from "./components/Example11/Example11";
import Example12 from "./components/Example12/Example12";
import Example13 from "./components/Example13/Example13";
import Example14 from "./components/Example14/Example14";
import Example15 from "./components/Example15/Example15";
import Example16 from "./components/Example16/Example16";


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
          <Route path="/Example6" component={Example6} />
          <Route path="/Example7" component={Example7} />
          <Route path="/Example8" component={Example8} />
          <Route path="/Example9" component={Example9} />
          <Route path="/Example10" component={Example10} />
          <Route path="/Example11" component={Example11} />
          <Route path="/Example12" component={Example12} />
          <Route path="/Example13" component={Example13} />
          <Route path="/Example14" component={Example14} />
          <Route path="/Example15" component={Example15} />
          <Route path="/Example16" component={Example16} />
        </Switch>
        <div className="LinksToPage">
          <Link to="/">Page 1</Link>
          <Link to="/Example2">Page 2</Link>
          <Link to="/Example3">Page 3</Link>
          <Link to="/Example4">Page 4</Link>
          <Link to="/Example5">Page 5</Link>
          <Link to="/Example6">Page 6</Link>
          <Link to="/Example7">Page 7</Link>
          <Link to="/Example8">Page 8</Link>
          <Link to="/Example9">Page 9</Link>
          <Link to="/Example10">Page 10</Link>
          <Link to="/Example11">Page 11</Link>
          <Link to="/Example12">Page 12</Link>
          <Link to="/Example13">Page 13</Link>
          <Link to="/Example14">Page 14</Link>
          <Link to="/Example15">Page 15</Link>
          <Link to="/Example16">Page 16</Link>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
