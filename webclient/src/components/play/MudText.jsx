import React, { Component } from 'react';

import DefaultText from './format/DefaultText';
import PreformatText from './format/PreformatText';

// See an example at https://stackoverflow.com/questions/38122068/how-react-js-acts-as-a-websocket-client

//Creates the websocket and returns a reference to the websocket to the Play component.
class MudText extends Component {

  constructor(props) {
    super(props);
    this.state = {
      usertoken:""
    }
  }

  formatMessage = (jsonMessage) => {

    let formattedMessage = "";

    let msgObj = JSON.parse(jsonMessage);

    let style = msgObj.style;
    let message = msgObj.msg;

    //first message of handshake is the user token
    //no messages accepted until a user token is set
    if (! this.state.usertoken)
    {
      const token = message;

      //setting local state token if defined
      if (style==="system_message" && token) 
      {
        this.setState((state, props) => ({
          usertoken:token
        }));
  
        //setting Play.jsx token
        this.props.callbackSetUserToken(token);

        //TODO: remove token from following message
        //TODO: add a SystemText component for displaying system messages
        console.log("session token set to "+token);

      }
      return <DefaultText msg="User session aquired ... " />
    }

    if (style==="p")
    {
      formattedMessage = <DefaultText msg={message} />;
    }
    else if (style==="pre")
    {
      formattedMessage = <PreformatText msg={message} />;
    }

    return formattedMessage;
  }

  componentDidMount(){
    //TODO: make WebSocket address configurable ... 'ws://localhost:8079/ws' won't work on server only 'wss://mymud.io/ws' will
    this.connection = new WebSocket('wss://mymud.io/ws');//TODO: will need to be 'wss://' when using secure connection

    // listen to onmessage event
    this.connection.onmessage = evt => {
      this.props.callbackAddMessage(this.formatMessage(evt.data));
    };

    this.props.callbackSetWebsocket(this.connection);
  }

  render() { 
    return ( 
    <>
      {this.props.commands}
    </> 
    );
  }

}
 
export default MudText;