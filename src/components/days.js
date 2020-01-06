import React, { Component } from 'react';
import Week from './week';

class Month extends Component {
    render() {
      console.log(this.props.setDays);
      
        return (
        <div>
          <Week/>
          {this.props.setDays}
        </div>
      )
    }
}

export default Month;