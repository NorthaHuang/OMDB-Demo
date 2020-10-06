import React from 'react';
import StyledWrapper from './styled';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../../Home';
import SearchResult from '../../SearchResult';
import ItemDetail from '../../ItemDetail';
import Error from '../../Error';

const Main = () => {
  return (
    <StyledWrapper>
      <Router>
        <Switch>
          <Route path="/result">
            <SearchResult />
          </Route>
          <Route path="/detail/:id">
            <ItemDetail />
          </Route>
          <Route path="/error">
            <Error />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </StyledWrapper>
  );
};

export default Main;
