import "./header.css";

export default function Header({ likeCount, allPostsCount, importantCount }) {
  return (
    <div className="app-header d-flex">
      <h1>Twitter | Analog</h1>
      <h2>
        {allPostsCount} posts, like {likeCount}, important {importantCount}
      </h2>
    </div>
  );
}
