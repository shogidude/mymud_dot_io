import React, { Component } from 'react';

import '../css/mymud.css';
import { createUUID } from '../js/hash.js';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import PlayFooter from '../components/play/PlayFooter'
import MudText from '../components/play/MudText'


class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mudtext:[<h2 key={createUUID()} >Welcome to Mymud</h2>,<p key={createUUID()} ><em>Have an enjoyable and safe time. Keep all user interaction safe for work and children. All in-game activity may be logged and, if deemed illegal, reported to authorities.</em></p>],
      mudcommand:"",
      sendcommand:""
    }
  }

  sendCommandToWebsocket = () => {

    //don't want to send if the command is empty string
    if ("" !== this.state.sendcommand) 
    {
      this.state.socket.send( JSON.stringify({usertoken:this.state.usertoken,usercommand:this.state.sendcommand}) );

      this.setState((state, props) => {
        return {sendcommand:""};//remove send command
      });
    }
  }
  
  callbackAddMessage = (messageFromServer) => {
    this.setState((state, props) => ({
      mudtext: [...state.mudtext, messageFromServer]
    }));
  }
  
  callbackSetUserToken = (token) => {
    this.setState((state, props) => ({
      usertoken:token
    }));
  }

  callbackSetWebsocket = (ws) => {
    this.setState((state, props) => ({
      socket: ws
    }));
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  
  componentDidMount() {
    this.scrollToBottom();
    this.commandInput.focus();

    // starting up the websocket command sender
    let intervalId = setInterval( this.sendCommandToWebsocket, 500 );
    this.setState({intervalId: intervalId});
  }

  componentWillUnmount() {
    // cleaning up socket
    this.state.socket.close();

    // cleaning up the interval to avoid a memory leak
    clearInterval(this.state.intervalId);
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }

  handleCommandButton = (e) => {
    e.preventDefault();

    this.setState((state, props) => {

      if ("" === state.mudcommand)
      {
        return {};
      }

      return {
        mudtext: [state.mudtext, <p key={createUUID()} className="whitetext">&gt;&nbsp;{state.mudcommand}</p>],
        sendcommand:state.mudcommand,
        mudcommand:""
      };
    })}

  handleCommandInput = (e) => {
    e.preventDefault();
    e.persist();

    if (e.target != null && e.target.value != null)
    {
      let newText = e.target.value;
      
      this.setState((state, props) => ({
        mudcommand:newText
      }));
    }
  }

  handleKeyPress = (e) => {
    if(e.charCode===13){
      this.handleCommandButton(e);    
    } 
  }

  render() {
    document.body.style = 'background: black;';
    return ( 
      <div className="blackbackground">

        <div className="mudview">

          <MudText 
            commands={this.state.mudtext} 
            callbackAddMessage={this.callbackAddMessage} 
            callbackSetWebsocket={this.callbackSetWebsocket} 
            callbackSetUserToken={this.callbackSetUserToken} />
            
          <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
          </div>
        </div>

        <PlayFooter>
          <InputGroup className="m-8">
            <FormControl
              placeholder="Enter Command"
              aria-label="Enter Command"
              value={this.state.mudcommand}
              onChange={this.handleCommandInput}
              onKeyPress={this.handleKeyPress}
              ref={(input) => { this.commandInput = input; }}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" onClick={this.handleCommandButton} >Send Command</Button>
            </InputGroup.Append>
          </InputGroup>
        </PlayFooter>
      </div> 
    );
  }
}
 
export default Play;