import React, { useState,useEffect } from "react";
// import { useSelector} from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Edit = () => {
  const { id } = useParams();
  const [editTast,seteditTast]= useState("")
  const tasks = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const currentTask=tasks.find(task=>task.id=== +id && task)
  console.log(currentTask);
  // useEffect(() =>
  // {
  //   seteditTast();
  // }, [editTast]);
  
  const handlechange=(e) =>
  {
    //  console.log(e, editTast);
    seteditTast(e.target.value);
    // console.log(e,editTast)

  }
  
   const handleSubmit = (e) => {
     e.preventDefault();

    //  const checksomthing = tasks.find(
    //    (t) => t.task === currentTask.task && currentTask
    //  );

     if (!currentTask) {
       return toast.warning("Cannot find the task !  ");
     }
     if (currentTask.task === editTast) {
       return toast.error("No change detected !");
     }

     const data = {
       id: currentTask.id,
       task: editTast,
     };

     console.log(data);
     dispatch({ type: "UPDATE_TASK", payload: data });
     toast.success("Task Updated successfully");
     navigate("/");
   };


  return (
    <div className="container">
      <div className="row">
        <h1 className="display-3 my-5 text-center">Edit Task {id}</h1>
        <div className="col-md-10 shadow mx-auto p-5">
          <form>
            <div className="form-group mt-5">
              <input
                type="text"
                placeholder="Edit here"
                className="form-control"
                onChange={(e) => handlechange(e)}
              ></input>
              {/* <h1>{editTast}</h1> */}
            </div>
            <div className="form-group">
              <input
                onClick={handleSubmit}
                type="submit"
                value="Update Task"
                className="btn btn-dark m-2 mt-5"
              ></input>
              <Link to="/" className=" btn  btn-danger mt-5 m-2">
                {" "}
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit
                
  