import React, { useContext } from 'react';
import StyledWrapper from './styled';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import context from '../../../store/context';
import Home from '../../Home';
import SearchResult from '../../SearchResult';
import ItemDetail from '../../ItemDetail';
import Loading from '../../Loading';
import Error from '../../Error';

const Main = () => {
  const { isLoading } = useContext(context);

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
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/error">
            <Error />
          </Route>
          <Route>
            <Error message="404 PAGE NOT FOUND." />
          </Route>
        </Switch>
      </Router>

      {isLoading && <Loading />}
    </StyledWrapper>
  );
};

export default Main;
