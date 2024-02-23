import React, { Component } from "react";
import { connect } from "react-redux";

class Detail extends Component {
  render() {
    let { name, image } = this.props.shoe;
    return (
      <div className="col-5">
        <img src={image} alt="" />
        <h6>{name}</h6>
      </div>
    );
  }
}

let mapstateToProps = (state) => {
  return {
    shoe: state.detail,
  };
};
export default connect(mapstateToProps)(Detail);
