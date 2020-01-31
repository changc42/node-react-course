import { FETCH_USER } from "../actions/types";

export default (state = false, action) => {
  console.log("action is ", action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
};
