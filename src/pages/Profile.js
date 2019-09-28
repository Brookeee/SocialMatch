import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import './style.css';

function Profile() {
  return (
    <Container style={{mariginTop: 30}}>
      <Row>
        <Col size="md-12">
          <h1>Social Match Profile</h1>
        </Col>
      </Row>
      <section className="clearfix bg-light profile banner">
          <div className="container">
              <div className="row">
                  <div className="col-md-4 col-sm-5 col-xs-12">
                      <div className="dashboardBox mb30">
                          <div className="profileimg">
                              <img src="images/profile.png" alt="User" className="img-circle"></img>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </Container>
  );
}
// 
export default Profile;
