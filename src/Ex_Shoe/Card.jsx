import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteAction } from "./redux/action";

class Card extends Component {
  render() {
    return (
      <div className="col-12">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.card.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <strong>{item.price * item.amount}$</strong>
                  </td>
                  <td>
                    <button className="btn btn-dark">-</button>
                    <strong> {item.amount}</strong>
                    <button className="btn btn-warning">+</button>
                  </td>

                  <td>
                    <img src={item.image} width={80} alt="" />
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.props.handleDelete(item.id);
                      }}
                      className="btn btn-secondary"
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

let mapstateToProps = (state) => {
  return {
    card: state.card,
  };
};
let mapDisPatchToProps = (dispatch) => {
  return {
    handleDelete: (id) => {
      dispatch(deleteAction(id));
    },
  };
};

export default connect(mapstateToProps, mapDisPatchToProps)(Card);
