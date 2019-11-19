import React from 'react';

//node modules
import { Redirect, Switch, Route } from "react-router-dom";
import Styled from 'styled-components';

//components
import Login from './components/login/Login';
import Register from './components/login/Register';

//styles
const RauschTitle = Styled.h1`
  color: #FF5A5F;
  margin: 48px 0 64px 0;
`;

const Row = Styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

function LoginPage() {
  return (
    <Row>
      <RauschTitle><ion-icon name="pin"></ion-icon>Airbnb Optimal Price</RauschTitle>
        {/* Register - Login */}
        <Switch>
          <Route path='/login' render={props => <Login {...props} />}/>
          <Route path='/register' render={props => <Register {...props}/>}/>
          <Redirect from="/" to="login" />
        </Switch>
    </Row>
  );
}

export default LoginPage;
