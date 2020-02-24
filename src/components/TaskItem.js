import React, { Component } from 'react';

class TaskItem extends Component {

    render() {
        return (
            <tr>
                <td></td>
                <td></td>
                <td className="text-center"></td>
            
                <td className="text-center">
                    <button
                        type="button"
                        className="btn btn-warning"
                        >
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button
                        type="button" className="btn btn-danger"
                       >
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        );
    }
}


export default TaskItem;