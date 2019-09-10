import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Admin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Currency Converter</h1>
      </div>
    );
  }
}

Admin.propTypes = {
  wpObject: PropTypes.object
};
