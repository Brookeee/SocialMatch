import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
// import Profile from './pages/Profile';
import {AuthProvider} from './Auth';
import Private from './Private';
import './index.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        {/* <h1 className="animated flipInX">Social Match</h1> */}
        <div>
          <Private exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
          {/* <Route exact path="/Profile" component={Profile} /> */}
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
