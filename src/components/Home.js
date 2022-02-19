import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Home = () =>
{
  const dispatch = useDispatch();
  
  const tsaks = useSelector(state => state)

  const handledelete = (id) =>
  { 
    dispatch({ type: "DELETE_Task", payload: id });
    toast.success("Task deleted successfully");
  }

  

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 text-right">
          <Link to="/add" className="btn btn-outline-dark">
            Create Task
          </Link>
        </div>
        <div className="col-md-10 mx-auto">
          <h2>Welcome to React Redux To-Do App</h2>
          <table className="table table-hover">
            <thead className="text-white bg-dark text-center ">
              <tr>
                <th scope="col">Task No.</th>
                <th scope="col">Task Description </th>
                <th scope="col"> Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              {tsaks.map((task, id) => (
                <tr key={id}>
                  <td className="text-center">
                    <h3>{id+1}</h3>
                  </td>
                  <td className="text-center">
                    <h3>{task.task}</h3>
                  </td>
                  <td className="text-center">
                    <Link
                      className="btn btn-small btn-primary mx-3"
                      to={`/edit/${task.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handledelete(task.id)}
                      type="button"
                      className="btn btn-small btn-danger btn-primary"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home