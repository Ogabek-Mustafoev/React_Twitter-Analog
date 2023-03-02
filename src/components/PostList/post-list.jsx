import "./post-list.css";

import PostListItem from "../PostListItem/post-list-item";

export default function PostList({ data, onDelete, onToggleImportantAndLike }) {
  return (
    <ul className="app-list list-group">
      {data.length ? data.map((item) => (
        <PostListItem
          {...item}
          key={item.id}
          onDelete={() => onDelete(item.id)}
          onToggleImportantAndLike={(e) => onToggleImportantAndLike(item.id, e)}
        />
      )) : <h2 className="display-4">Not Found!</h2>}
    </ul>
  );
}
