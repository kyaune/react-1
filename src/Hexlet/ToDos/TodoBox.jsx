import { uniqueId } from "lodash";
import React from "react";
import Item from "./Item";

// BEGIN (write your solution here)
export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], task: "My fist task" };
  }
  handleChange = e => {
    this.setState({ task: e.target.value });
    console.log(e.target.value);
  };
  onSubmit = e => {
    e.preventDefault();
    const newItems = this.state.items;
    newItems.unshift(this.state.task);
    this.setState({ items: newItems });
  };
  handleRemove = task => e => {
    e.preventDefault();
    const newItems = this.state.items.filter(item => item !== task);
    this.setState({ items: newItems });
  };
  render() {
    return (
      <div>
        <div className="mb-3">
          <form className="todo-form form-inline mx-3" onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                className="form-control mr-3"
                placeholder="I am going..."
                required="required"
                type="text"
                value={this.state.task}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              add
            </button>
          </form>
        </div>
        {this.state.items.map((i, index) => (
          <Item task={this.state.items[index]} onRemove={this.handleRemove} />
        ))}
      </div>
    );
  }
}
// END
