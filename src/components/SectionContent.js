import React, { Component } from 'react';

class SectionContent extends Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

export default SectionContent;
