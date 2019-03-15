import { type } from "os";
import { bindActionCreators } from "redux";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});

//can use this too but is longer :->

// export function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     {
//       increment,
//       decrement
//     },
//     dispatch
//   );
// }
