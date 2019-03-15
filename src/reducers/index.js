import { INCREMENT, DECREMENT } from "../actions";

const initialState = {
  count: 0
};

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?

export default (state = initialState.count, action) => {
  {
    console.log(state);
  }
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case "INCREMENT_IF_ODD":
      if (Math.floor(state / 2) !== state / 2) {
        return state + 1;
      }
      return state;
    default:
      return state;
  }
};
