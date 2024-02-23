import React, { Component } from "react";
import List from "./List";
import Detail from "./Detail";
import Card from "./Card";

export default class Ex_Shoe extends Component {
  render() {
    return (
      <div className="row w-75">
        <Card />
        <List />
        <Detail />
      </div>
    );
  }
}
