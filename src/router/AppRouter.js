import React from 'react';
// import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GifRedux from '../pages/search/GifRedux';
import Trending from '../pages/trending/Trending';
// import './App.css';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/trending">
          <Trending />
        </Route>
        <Route path="/">
          {/* <Provider store={store}> */}
          <GifRedux />
          {/* </Provider> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
