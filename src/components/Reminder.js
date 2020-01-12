import React, { Component } from "react";

class Reminder extends Component {
  render() {
    return (
      <div className="reminder">
        <div className="title">Reminder</div>
        <form className="form-inline">
          <div className="form-group">
            <input
              type="text"
              placeholder="I have to .."
              className="form-control"
            />
          </div>
          <button className="btn btn-success" type="button">
            Add reminder
          </button>
        </form>
      </div>
    );
  }
}

export default Reminder;
