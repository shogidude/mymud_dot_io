import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    document.body.style = 'background: white;';
    return ( 
      <div className="m-5">

        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Interactive Storytelling</h1>
            <p className="lead"><em>"Study and learn, and become acquainted with all good books, and with languages,
                tongues, and people." -<a href="https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/90.15?lang=eng">D&amp;C&nbsp;90:15</a></em></p>
        </div>
        <p>Video games and movies entertain our culture. Many games and movies are based on
          books--the written entertainment from the last thousand years. However,
          the written word found in books and stories seems to be sidelined and forgotten, more and more.</p>
        <p>Mymud attempts to provide a 21st century adaptation of books and stories
          in an interactive format that is accessible to everyone with a web browser.
          The goal is to provide new stories and books in an interactive format, rather than reinterpretting
          the classics.</p>
        <p>Please enjoy the site and give me feedback <a href="https://twitter.com/TGeneDavis">@TGeneDavis on Twitter</a>.</p>

        <h1>Releases Schedule</h1>
        <p>I am working on Mymud mostly alone while holding down a fulltime job to pay the bills. So, don't expect massive
          progress immediately. Having said that, I try to publish a new minor release every weekend.</p>

        <h1>Design Details</h1>
        <p>For those interested in the technical details of Mymud, I've included the details that I've had time to
          document.</p>

        <h2>Brief Overview</h2>
        <p>Mymud is written with a combination of modern languages and frameworks. Mymud's server uses the Clojure
          Luminus framework. Mymud's client technology uses ReactJS.</p>
        <p>At its simplest, Mymud defines Clojure records for areas, rooms, players, mobs, items, (etc). Then, it uses
          clojure multimethods to handle polymorphism and behavior details.</p>
        <img src={`${process.env.PUBLIC_URL}/img/design/mud_record_associations.png`}
             alt="Diagram of Clojure record associations"/>
        <p>Check back for more design documentation as I have time to write it.</p>

      <h1>License</h1>
      <p>My intention is to get Mymud to a stable, usable state and then release it as an opensource project
          for others to enjoy, play with and, of course, to mod.</p>

      </div> 
    );
  }
}
 
export default About;