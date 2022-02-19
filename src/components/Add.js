import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Add = () => {
  
  const [task, setTaskstate] = useState("");
  
  
  const tasks = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) =>
  { 
    e.preventDefault();

    const checksomthing = tasks.find(t => t.task===task && task);

    if (!task)
    { 
      return toast.warning("Task description cant be empty")
    }
    if (checksomthing)
    { 
      return toast.error("already there")
    }
    // let len = 1;
    // if (tasks===[])
    // { 
    //   console.log(tasks)
      
    // }
    const data = {
      id:(tasks[0])? tasks[tasks.length - 1].id + 1:1,
      task: task
    }
    
    console.log(data);
    dispatch({ type: "ADD_TASK", payload: data });
    toast.success("Task created successfully")
    navigate("/");

  }
  
  return (
    <div className="container">
      <div className="row">
        <h1 className="display-3 my-5 text-center">Create Task</h1>
        <div className="col-md-10 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-5">
              <input
                type="text"
                placeholder="Description of task"
                className="form-control"
                value={task}
                onChange={(e) => setTaskstate(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Add Task"
                className="btn btn-block btn-dark mt-5"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Add