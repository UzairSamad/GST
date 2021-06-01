import React, { Component } from "react";


const withTracker = (WrappedComponent, options = {}) => {
  

  // eslint-disable-next-line
  const HOC = class extends Component {
 

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return HOC;
};

export default withTracker;
