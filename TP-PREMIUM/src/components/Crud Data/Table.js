import React from "react";
import axios from "axios";
import "./Table.css";

class Table extends React.Component {
  state = {
    Task: [],
    id: "",
    data: [],
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/task").then((res) => {
      this.setState({
        data: res.data,
      });
    });
  }

  handleChange = (event) => {
    this.setState({
      Task: event.target.value,
    });
  };

  handleSubmit = (event) => {
    axios
      .post("http://127.0.0.1:8000/api/task/store", this.state)
      .then((res) => {
        window.location.reload(false);
      });
  };

  handleDelete = (id) => {
    axios.delete("http://127.0.0.1:8000/api/task/delete/" + id).then((res) => {
      window.location.reload(false);
    });
  };

  handleEdit = (id) => {
    axios.get("http://127.0.0.1:8000/api/task/" + id).then((res) => {
      this.setState({
        Task: res.data.Task,
        id: res.data.id,
      });
    });

    let btnAdd = document.querySelector("#btnAdd");
    let btnUpdate = document.querySelector("#btnUpdate");

    // btn.setAttribute("type", "submit");
    btnAdd.style.display = "none";
    btnUpdate.style.display = "inline";
  };
  handleUpdate = (id) => {
    console.log(id);
    axios
      .put("http://127.0.0.1:8000/api/task/update/" + id, this.state)
      .then((res) => {
        window.location.reload(false);
      });
  };

  render() {
    return (
      <div className="gestions">
        <div className="group form-group">
          Task <input className="form-control"
            type="text"
            value={this.state.Task}
            onChange={this.handleChange}
          />
          Start date <input className="form-control" type="datetime-local"></input>
          end date <input className="form-control" type="datetime-local"></input>
          <br />
          <button
            id="btnAdd"
            className="btn btn-primary w-100"
            onClick={this.handleSubmit}
          >
            Add
          </button>
          <button
            id="btnUpdate"
            style={{ display: "none" }}
            className="btn btn-warning w-100"
            onClick={() => this.handleUpdate(this.state.id)}
          >
            update
          </button>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th className="text-center">Id</th>
              <th className="text-center">Task</th>
              <th className="text-center">Edit</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((task) => (
              <tr id="tr" key={task.id}>
                <td className="text-center">{task.id} </td>
                <td className="text-center">{task.Task} </td>
                <td>
                  <button
                    className="btn btn-success offset-3"
                    onClick={() => this.handleEdit(task.id)}
                  >
                    Edit
                  </button>{" "}
                </td>
                <td>
                  <button
                    className="btn btn-danger offset-3"
                    onClick={() => this.handleDelete(task.id)}
                  >
                    Delete
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Table;
