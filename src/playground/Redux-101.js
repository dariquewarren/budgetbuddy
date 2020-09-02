import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
      case 'DECREMENT':
      return {
          count: state.count - 1
      }
      case "RESET":
          return {
              count: 0
          }
       
    default:
      return state;
  }
});

console.log(store.getState());

// Actions - an object that gets sent to the store
// increment, decrement reset

// id like to increment the count
store.dispatch({
  type: "INCREMENT",
});
store.dispatch({
    type: "INCREMENT",
  });

  store.dispatch({
  type: "DECREMENT",
});
store.dispatch({
    type: "INCREMENT",
  });
// reset set the count to 0

store.dispatch({
    type: "RESET",
  });
  
// id like to reset the count to zero

console.log(store.getState());
