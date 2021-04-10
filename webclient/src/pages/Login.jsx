import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import { UserContextConsumer } from '../context/UserContextProvider';

class Tools extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    document.body.style = 'background: white;';
    return ( 
      <div className="m-5">
        <main className="login-form">
            <div className="cotainer">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Login</div>
                            <div className="card-body">
                                <Form>
                                  <div className="form-group row">
                                      <label htmlFor="email_address" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                      <div className="col-md-6">
                                          <input type="text" id="email_address" className="form-control" name="email-address" required autoFocus />
                                      </div>
                                  </div>

                                  <div className="form-group row">
                                      <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                      <div className="col-md-6">
                                          <input type="password" id="password" className="form-control" name="password" required />
                                      </div>
                                  </div>

                                  <div className="form-group row">
                                      <div className="col-md-6 offset-md-4">
                                          <div className="checkbox">
                                              <label>
                                                  <input type="checkbox" name="remember" /> Remember Me
                                              </label>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="col-md-6 offset-md-4">
                                    <UserContextConsumer>
                                    {({ setLoginResult }) => (
                                      <Button variant="primary" type="submit" onClick={() => setLoginResult('my_user_token_123')}>
                                        Submit
                                      </Button>
                                    )}
                                    </UserContextConsumer>
                                    <a href="/" className="btn btn-link text-dark">
                                        Forgot Your Password?
                                    </a>
                                  </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
      </div> 
    );
  }
}
 
export default Tools;