function Todo({ todoName, todoDate, onDeleteClick }) {
  return (
    <>
      <div className="container kg-btn">
        <div className="row">
          <div className="col-6 matter">{todoName}</div>
          <div className="col-4 matter">{todoDate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger dan"
              onClick={() => onDeleteClick(todoName)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Todo;
