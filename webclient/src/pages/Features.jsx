import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    document.body.style = 'background: white;';
    return (
      <>
        <CardGroup className="m-2">
          <Card className="m-2 bg-primary" style={{ width: '18rem' }}>
            <Card.Body className="text-light">
              <Card.Title>Fully Responsive</Card.Title>
              <Card.Text>
              This theme will look great on any device, no matter the size!
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card className="m-2 bg-primary" style={{ width: '18rem' }}>
            <Card.Body className="text-light">
              <Card.Title>Bootstrap 4 Ready</Card.Title>
              <Card.Text>
              Featuring the latest build of the new Bootstrap 4 framework!
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card className="m-2 bg-primary" style={{ width: '18rem' }}>
            <Card.Body className="text-light">
              <Card.Title>Easy to Use</Card.Title>
              <Card.Text>
              Ready to use with your own content, or customize the source files!
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </CardGroup>


          <section className="testimonials text-center bg-light">
            <div className="container">
              <h2 className="mb-5 pt-3">This is a construction site...</h2>
              <div className="pb-3 row">
                <div className="col-lg-4">
                  <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                    <h5>Placeholder 1</h5>
                    <p className="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                    <h5>Placeholder 2</h5>
                    <p className="font-weight-light mb-0">"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                    <h5>Placeholder 3</h5>
                    <p className="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

      <section className="call-to-action text-white text-center">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h2 className="mb-4">Game play coming soon!</h2>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <Form>
                <div className="form-row">
                  <div className="col-12 col-md-9 mb-2 mb-md-0">
                    <input type="email" className="form-control form-control-lg" placeholder="Yes ... another placeholder" />
                  </div>
                  <div className="col-12 col-md-3">
                  <Button variant="primary" type="submit">Coming soon!</Button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>

      </> 
    );
  }
}
 
export default Features;