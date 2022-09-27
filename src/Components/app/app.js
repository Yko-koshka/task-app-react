import { Component } from "react";

import TimeAddForm from "../time-add-form/time-add-form";
import TimeList from "../time-list/time-list";

import "./app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { startTime: "09:00", endTime: "15:00", id: 1 },
        { startTime: "10:00", endTime: "20:00", id: 2 },
        { startTime: "08:00", endTime: "18:00", id: 3 },
      ],
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (startTime, endTime) => {
    const newItem = {
      startTime,
      endTime,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h2 className="App-tittle">The time log</h2>
        <TimeAddForm onAdd={this.addItem} />
        <TimeList data={this.state.data} onDelete={this.deleteItem} />
      </div>
    );
  }
}

export default App;
