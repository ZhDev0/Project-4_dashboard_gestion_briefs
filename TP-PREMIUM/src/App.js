import "./App.css";
import Table from "./components/Crud Data/Table";
import Chart from "./components/Chart/Chart";
import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    DataTasks: [],
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/task").then((res) => {
      this.setState({
        DataTasks: res.data,
      });
    });
  }

  render() {
    // console.log()

    return (
      <div className="container">
        <div className="row my-5">
          <div className="col-md-12">
            <div className="gestion">
              <div className="">
                <Table />
              </div>
              <div className="App">
                <Chart DataTasks={this.state.DataTasks} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
