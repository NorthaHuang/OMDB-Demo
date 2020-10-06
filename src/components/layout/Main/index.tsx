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
      <div className="container">
        <div className="row">
          <div className="col">
            <Router>
              <Switch>
                <Route path="/result">
                  <SearchResult />
                </Route>
                <Route path="/detail">
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
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Main;
