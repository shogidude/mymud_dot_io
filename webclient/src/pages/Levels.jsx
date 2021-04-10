import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

class Levels extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    document.body.style = 'background: white;';
    return ( 
      <>

      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">Levels</h1>
      <p className="lead">Play for free at the guest level, or enhance your experience and support Mymud by subscibing at the VIP or MVP levels.</p>
      </div>

      <div className="container">
        <div className="card-deck mb-3 text-center">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Guest</h4><h6 className="text-muted">play now</h6>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>1 active characters</li>
                <li>2 saved characters</li>
                <li>Play for free</li>
                <li>In-game chat</li>
              </ul>
              <LinkContainer to="/play">
                <Button className="btn btn-lg btn-block" variant="outline-primary">Play Now</Button>
              </LinkContainer>
            </div>
          </div>
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">VIP</h4><h6 className="text-muted">(coming soon)</h6>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$7 <small className="text-muted">/ mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>2 active characters</li>
                <li>10 saved characters</li>
                <li>Multi-login</li>
                <li>Create parties</li>
                <li>Private messaging</li>
                <li>Supporting Mymud development</li>
             </ul>
              <button type="button" className="btn btn-lg btn-block btn-primary">Level Up</button>
            </div>
          </div>
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">MVP</h4><h6 className="text-muted">(coming soon)</h6>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$14 <small className="text-muted">/ mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>3 active characters</li>
                <li>25 saved characters</li>
                <li>Multi-login</li>
                <li>Create Parties</li>
                <li>Private chat</li>
                <li>Create guilds</li>
                <li>Customizable guild area</li>
                <li>Guild chat</li>
                <li>Supporting Mymud development</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-primary">Level Up</button>
            </div>
          </div>
          </div>
        </div>

      </> 
    );
  }
}
 
export default Levels;