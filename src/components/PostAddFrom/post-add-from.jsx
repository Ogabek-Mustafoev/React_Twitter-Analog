import { Component } from "react";
import "./post-add-from.css";

export default class PostAddForm extends Component {
  state = {
    value: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.value) {
      this.props.onAdd(this.state.value);
      this.setState({ value: "" });
    }
  };

  render() {
    return (
      <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="New post..."
          className="form-control new-post-label"
          onChange={(e) => this.setState({ value: e.target.value })}
          value={this.state.value}
        />
        <button type="submit" className="btn btn-outline-info add_post">
          Add Post
        </button>
      </form>
    );
  }
}
