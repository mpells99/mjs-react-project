import React, { Component } from "react";
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>MJ's React Portfolio Project</h1>
        <p>{moment().format("MMMM Do YYYY, h:mm:ss a")}</p>
      </div>
    );
  }
}
