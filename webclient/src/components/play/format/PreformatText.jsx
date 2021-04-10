import React, { Component } from 'react';
import { createUUID } from '../../../js/hash.js';

class PreformatText extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <pre className="greentext" key={createUUID()} >{this.props.msg}</pre> );
  }
}
 
export default PreformatText;