import React, { Component } from 'react';
import { createUUID } from '../../../js/hash.js';

class DefaultText extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <p className="greentext" key={createUUID()} >{this.props.msg}</p> );
  }
}
 
export default DefaultText;