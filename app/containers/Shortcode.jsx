import React, { Component } from "react";
import PropTypes from "prop-types";

//TODO: Show currency converter component here
export default class Shortcode extends Component {
  render() {
    return (
      <div>
        <h1>WP Currency Converter Frontend</h1>
        <p>Title: {this.props.wpObject.title}</p>
      </div>
    );
  }
}

Shortcode.propTypes = {
  wpObject: PropTypes.object
};
