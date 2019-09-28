import React, {useCallback, useContext} from 'react';
import {withRouter, Redirect} from 'react-router';
import {Link} from 'react-router-dom';
import app from './base.js';
import {AuthContext} from './Auth.js';

const SignIn = ({history}) => {
  const handleLog = useCallback(
    async event => {
      event.preventDefault();
      const {email, password} = event.target.elements;
      try {
        await app
          .auth()
          .SignInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (err) {
        alert(err);
      }
    },
    [history]
  );

  const {currentUser} = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1 className="animated flipInX">Social Match</h1>
      <h1 className="login">Sign in</h1>
      <form onSubmit={handleLog}>
        <label>
          Email:{' '}
          <input name="email" type="email" placeholder="" className="email" />
        </label>{' '}
        <label>
          Password:{' '}
          <input
            name="password"
            type="password"
            placeholder=""
            className="password"
          />
        </label>{' '}
        <button type="submit">Log In </button>{' '}
        <Link to="/Register">Register</Link>
      </form>
    </div>
  );
};

export default withRouter(SignIn);
