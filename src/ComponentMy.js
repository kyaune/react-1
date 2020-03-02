import _ from "lodash";
import React from "react";

// BEGIN (write your solution here)
export default class Component extends React.Component {
  constructor(props) {
    super(props);
    const log = [].map(i => ({ id: i }));
    this.state = { log };
  }
  addItem = num => e => {
    // console.log(num);
    e.preventDefault();
    const log = this.state.log;
    const newItem = log.length === 0 ? num : log[0] + num;
    //console.log(newItem);
    const newLog = [newItem, ...log];
    // console.log(newLog);
    this.setState({ log: newLog });
  };
  removeItem = id => e => {
    e.preventDefault();
    console.log(id);
    const log = this.state.log;
    const newLog = log.slice(0, id).concat(log.slice(id + 1, log.length));
    console.log(newLog);
    this.setState({ log: newLog });
  };
  renderBlankList() {
    return (
      <div>
        <div class="btn-group" role="group">
          <button
            type="button"
            className="btn hexlet-inc"
            onClick={this.addItem(1)}
          >
            +
          </button>
          <button
            type="button"
            className="btn hexlet-dec"
            onClick={this.addItem(-1)}
          >
            -
          </button>
        </div>
      </div>
    );
  }
  renderList() {
    return (
      <div>
        <div class="btn-group" role="group">
          <button
            type="button"
            className="btn hexlet-inc"
            onClick={this.addItem(1)}
          >
            +
          </button>
          <button
            type="button"
            className="btn hexlet-dec"
            onClick={this.addItem(-1)}
          >
            -
          </button>
        </div>
        <div class="list-group">
          {this.state.log.map((item, index) => (
            <button
              type="button"
              key={item.id}
              className="list-group-item list-group-item-action"
              onClick={this.removeItem(index)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    );
  }
  render() {
    if (this.state.log.length === 0) {
      // console.log("1");
      return this.renderBlankList();
    } else {
      // console.log("2");
      return this.renderList();
    }
  }
}
