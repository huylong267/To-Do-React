import React, { Component } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks : [
        {
          id : 1,
          name : 'abc',
          status : false
        }
      ]
    }
  }

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1><hr />
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <TaskForm />
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" className="btn btn-primary"  >
              <span className="fa fa-plus mr-5"></span>
              Thêm Công Việc
            </button>

            <button type="button" className="btn btn-danger" 
            onClick ={() => {this.generataData()}}>
              Thêm Data
            </button>            
                        
            <TaskControl />
            <TaskList />
          </div>
        </div>
      </div>
    );
  }
}
export default App;