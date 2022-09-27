import { Component } from "react";

import "./time-add-form.scss";

class TimeAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: "",
      endTime: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.startTime, this.state.endTime);
    this.setState({
      startTime: "",
      endTime: "",
    });
  };

  render() {
    const { startTime, endTime } = this.state;
    return (
      <div className="time-add-form">
        <form
          className="time-add-form d-flex justify-content-evenly"
          onSubmit={this.onSubmit}
        >
          <label>Beginning of time:</label>

          <input
            type="time"
            id="appt"
            name="startTime"
            min="08:00"
            max="20:00"
            value={startTime}
            onChange={this.onValueChange}
            required
          />

          <label>End of Time:</label>
          <input
            type="time"
            id="appt"
            name="endTime"
            min="08:00"
            max="20:00"
            value={endTime}
            onChange={this.onValueChange}
            required
          />

          <button type="submit" className="btn btn-primary">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default TimeAddForm;
