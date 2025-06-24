function TodoItem2() {
  let college = 'Go to Coolege'
  let Cdate = '04/10/2024'

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">{college}</div>
        <div className="col-4">{Cdate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
