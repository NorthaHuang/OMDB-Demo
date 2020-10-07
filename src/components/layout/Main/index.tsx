import React, { useContext } from 'react';
import StyledWrapper from './styled';
import { Switch, Route } from 'react-router-dom';
import context from '../../../store/context';
import routes from '../../../routes';
import Error from '../../Error';
import Loading from '../../Loading';

const Main = () => {
  const { isLoading } = useContext(context);

  return (
    <StyledWrapper>
      <Switch>
        {routes.map(({ name, path, component, exact }) => (
          <Route key={name} exact={exact} path={path} component={component} />
        ))}
        <Route>
          <Error message="404 PAGE NOT FOUND." />
        </Route>
      </Switch>

      {isLoading && <Loading />}
    </StyledWrapper>
  );
};

export default Main;
