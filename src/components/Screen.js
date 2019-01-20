import React, { Component } from 'react';

class Screen extends Component {
  render() {
    const {className,children} = this.props;
    return (
      <div className={["app-screen",className].join(' ')}>
          {children}
      </div>
    );
  }
}
export default Screen;
