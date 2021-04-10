import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';


class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <>
        <footer className="pt-4 px-4 my-md-5 pt-md-5 border-top">
          <div className="row">
            <div className="col-12 col-md">
              Mymud
              <small className="d-block mb-3 text-muted">&copy; {new Date().getFullYear()} by T Gene Davis</small>
            </div>
            <div className="col-6 col-md">
              <h5>Tools</h5>
              <ul className="list-unstyled text-small">
                <li><LinkContainer to="/"><a className="text-muted" href="/">Cool tool</a></LinkContainer></li>
                <li><LinkContainer to="/"><a className="text-muted" href="/">Random tool</a></LinkContainer></li>
                <li><LinkContainer to="/"><a className="text-muted" href="/">Team tool</a></LinkContainer></li>
                <li><LinkContainer to="/"><a className="text-muted" href="/">Tools for People</a></LinkContainer></li>
                <li><LinkContainer to="/"><a className="text-muted" href="/">Another tool</a></LinkContainer></li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>See also</h5>
              <ul className="list-unstyled text-small">
                <li><LinkContainer to="/"><a className="text-muted" href="/">This</a></LinkContainer></li>
                <li><LinkContainer to="/"><a className="text-muted" href="/">That one</a></LinkContainer></li>
                <li><LinkContainer to="/"><a className="text-muted" href="/">Yet another that</a></LinkContainer></li>
                <li><LinkContainer to="/"><a className="text-muted" href="/">Finally ...</a></LinkContainer></li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>About</h5>
              <ul className="list-unstyled text-small">
                <li><LinkContainer to="/"><a className="text-muted" href="/">Our Team</a></LinkContainer></li>
                <li><LinkContainer to="/"><a className="text-muted" href="/">Find us</a></LinkContainer></li>
                <li><LinkContainer to="/"><a className="text-muted" href="/">Privacy</a></LinkContainer></li>
                <li><LinkContainer to="/about"><a className="text-muted" href="/about">About</a></LinkContainer></li>
              </ul>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
 
export default Footer;