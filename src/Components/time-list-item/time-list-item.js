import { Component } from "react";

import "./time-list-item.scss";

class TimeListItem extends Component {
  render() {
    const { startTime, endTime, onDelete } = this.props;

    return (
      <li className="time-group d-flex justify-content-evenly">
        <input type="text" defaultValue={startTime} />
        <input type="text" defaultValue={endTime} />
        <div className="d-flex justify-content-center align-items-center">
          <button type="button" className="btn-square btn-sm ">
            <i className="fa-solid fa-pen-to-square"></i>
          </button>

          <button
            type="button"
            className="btn-trash btn-sm "
            onClick={onDelete}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </li>
    );
  }
}

export default TimeListItem;
