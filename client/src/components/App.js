import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const pageOne = () => {
  return (
  <div>
    PageOne
    <Link to="/pagetwo">Page Two</Link>
    </div>
    )
};

const pageTwo = () => {
  return (
    <div>
      PageTwo
      <button>Click Me!</button>
      <Link to="/">Page One</Link>
    </div>
  );
};
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={pageOne} />
          <Route path="/pageTwo" component={pageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
