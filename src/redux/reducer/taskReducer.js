import { toast } from "react-toastify";
let c = 0;
const initialState = [
  {
    id: 1,
    task: "Sample task 1",
  },
  {
    id: 2,
    task: "Sample task 2",
  },
  {
    id: 3,
    task: "Sample task 3",
  },
  {
    id: 4,
    task: "Sample task 4",
  },
];

const TaskReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "ADD_TASK":
      state = [...state, action.payload];
      return state;
    case "UPDATE_TASK":
      state = state.map((task) =>
        task.id === +action.payload.id ? action.payload : task
      );
      return state;
    case "DELETE_Task":
      state = state.filter((task) =>
        task.id !== +action.payload
      );
      return state;
    default: {
      if (c > 0) toast.warning("Something went wrong last states restored");
      c++;
      return state;
    }
  }
};

export default TaskReducer;
