import "./post-list-item.css";

export default function PostListItem(props) {
  const { label, onDelete, onToggleImportantAndLike, important, like } = props;
  return (
    <li
      className={`app-list-item d-flex justify-content-between border py-2 ${
        important && "important"
      } ${like && "like"}`}
    >
      <span
        data-type="like"
        onDoubleClick={onToggleImportantAndLike}
        className={`app-list-item-label`}
      >
        {label}
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={onToggleImportantAndLike}
          type="button"
          className="btn-star btn-sm"
          data-type="important"
        >
          <i data-type="important" className="fa fa-star"></i>
        </button>
        <button onClick={onDelete} type="button" className="btn-trash btn-sm">
          <i className="fa fa-trash"></i>
        </button>
        <i
          data-type="like"
          onClick={onToggleImportantAndLike}
          className="fa fa-heart"
        ></i>
      </div>
    </li>
  );
}
