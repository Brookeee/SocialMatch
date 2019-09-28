import React, {useCallback} from "react";
import {Link} from 'react-router-dom';
import {withRouter} from "react-router";
import app from "./base";

const Register = ({history}) => {
  const handleReg = useCallback(
    async event => {
      event.preventDefault();
      const {email, password} = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (err) {
        alert(err);
      }
    },
    [history]
  );
  return (
    <div>
      <h1 className="register">Register</h1>
      <form onSubmit={handleReg}>
        <label>
          Email
          <input name="email" type="email" placeholder="" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="" />
        </label>
        <button type="submit">Sign Up</button>
        <Link to="/Login">Login</Link>
      </form>
    </div>
  );
};

export default withRouter(Register);
