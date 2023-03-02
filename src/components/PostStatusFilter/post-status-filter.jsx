import { Component } from "react";

export default class PostStatusFilter extends Component {
  render() {
    const filter = this.props.filter;
    return (
      <div className="btn-group">
        <button
          onClick={() => this.props.onUpdateFilter("all")}
          className={`btn ${filter === "all" ? "btn-primary" : "btn-outline-primary"}`}
        >
          All
        </button>
        <button
          onClick={() => this.props.onUpdateFilter("like")}
          className={`btn ${filter === "like" ? "btn-primary" : "btn-outline-primary"}`}
        >
          Liked
        </button>
        <button
          onClick={() => this.props.onUpdateFilter("important")}
          className={`btn ${filter === "important" ? "btn-primary" : "btn-outline-primary"}`}
        >
          Important
        </button>
      </div>
    );
  }
}
