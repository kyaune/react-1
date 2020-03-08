import React from "react";
import axios from "axios";

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "", res: {} };
  }
  handleChange = e => {
    // e.preventDefault();
    this.setState({ search: e.target.value });
    console.log(this.state.search);
    this.searchEngine();
  };
  searchEngine = async () => {
    // const resNew = await axios.get("https://restcountries.eu/rest/v2/all", {
    //   params: { name: `${this.state.search}` }
    // });
    // this.setState({ res: resNew });
    //  console.log(this.state.res.data);
  };

  render() {
    const { search, res } = this.state;
    return (
      <div>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Country"
              value={search}
              onChange={this.handleChange}
            ></input>
          </div>
        </form>
        {/* <ul>
          {res.data.map(item => (
            <li>{item}</li>
          ))}
        </ul> */}
      </div>
    );
  }
}
