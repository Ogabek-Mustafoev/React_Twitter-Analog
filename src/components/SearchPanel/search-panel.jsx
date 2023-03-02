import { Component } from "react";
import "./search-panel.css";

export default class SearchPanel extends Component {
  state = {
    term: "",
  }

  setTerm = (e) => {
    const term = e.target.value.toLowerCase();
    this.setState({ term });
    this.props.onUpdateSearch(term);
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Search..."
        className="form-control search-input"
        onChange={this.setTerm}
      />
    );
  }
}
