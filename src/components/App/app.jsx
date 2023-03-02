import Header from "../Header/header";
import "./app.css";
import SearchPanel from "./../SearchPanel/search-panel";
import PostStatusFilter from "../PostStatusFilter/post-status-filter";
import PostList from "../PostList/post-list";
import PostAddForm from "../PostAddFrom/post-add-from";
import { Component } from "react";

export default class App extends Component {
  state = {
    data: [
      { id: 1, label: "Hello world", important: false, like: true },
      { id: 2, label: "Lorem ipsum dolor", important: true, like: false },
      { id: 3, label: "String, Boolean, Number", important: true, like: true },
      { id: 4, label: "Array, Object, BigInt", important: false, like: false },
    ],
    maxId: 5,
    term: "",
    filter: "all",
  };

  componentDidMount() {
    const once = localStorage.getItem("once");
    !once && alert("Double type to like or dislike");
    localStorage.setItem("once", true);
  }

  onDelete = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id),
    }));
  };

  onAdd = (value) => {
    this.setState(({ maxId }) => ({ maxId: maxId + 1 }));
    const newItem = {
      like: false,
      label: value,
      important: false,
      id: this.state.maxId,
    };
    this.setState(({ data }) => ({ data: [...data, newItem] }));
  };

  onToggleImportantAndLike = (id, e) => {
    const prop = e.target.getAttribute("data-type");

    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        } else {
          return item;
        }
      }),
    }));
  };

  searchPost = (data, term) => {
    if (!term.length) {
      return data;
    } else {
      return data.filter((item) => item.label.toLowerCase().indexOf(term) > -1);
    }
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterPosts = (data, filter) => {
    switch (filter) {
      case "like":
        return data.filter((item) => item.like);
      case "important":
        return data.filter((item) => item.important);
      case "all":
        return data;
      default:
        return data;
    }
  };

  onUpdateFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state,
      allPostsCount = data.length,
      likeCount = data.filter((item) => item.like).length,
      importantCount = data.filter((item) => item.important).length,
      visiblePosts = this.filterPosts(this.searchPost(data, term), filter);

    return (
      <div className="app">
        <Header
          likeCount={likeCount}
          allPostsCount={allPostsCount}
          importantCount={importantCount}
        />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            onUpdateFilter={this.onUpdateFilter}
            filter={filter}
          />
        </div>
        <PostList
          data={visiblePosts}
          onDelete={this.onDelete}
          onToggleImportantAndLike={this.onToggleImportantAndLike}
        />
        <PostAddForm onAdd={this.onAdd} />
      </div>
    );
  }
}
