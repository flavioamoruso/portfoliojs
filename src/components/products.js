export function Products(props) {
  return (
    <div key={props.id} className="card">
      <div className="top">
        <p className="title">{props.title}</p>
      </div>
      <p className="desc">{props.body}</p>
    </div>
  );
}
