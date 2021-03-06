import { createStore } from "redux";
// action generators - functions that return action objects


const incrementCount =({incrementBy = 1}={})=>({
    type: 'INCREMENT',
    incrementBy
}) 

const decrementCount =({ decrementBy = 1}={})=>({
    type: 'DECREMENT',
    decrementBy
}) 

// set count

const setCount =({count }={})=>({
type: 'SET',
count
})
// reset count
const resetCount = ()=>({
type: 'RESET',
})

// REDUCERS
// 1. reducers are pure functions--- output depends only on the inpout
// 2. never change state or actions
const countReducer =((state = { count: 0 }, action) => {
    switch (action.type) {
      case "INCREMENT":
          const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy: 1 
        return {
          count: state.count + incrementBy 
        };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy: 3
        return {
            count: state.count - decrementBy
        }
        case 'SET':
            return {
                count: action.count
            }
        case "RESET":
            return {
                count: 0
            }
         
      default:
        return state;
    }
  });

const store = createStore(countReducer)

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
})
// unsubscribe()
store.dispatch((incrementCount()))
store.dispatch(incrementCount({incrementBy: 5}))




 
store.dispatch(decrementCount())
store.dispatch(decrementCount({decrementBy: 10}))


// reset set the count to 0
// DECREMENT by value= 10

  store.dispatch(resetCount())
  store.dispatch(resetCount({count: 10}))


  store.dispatch(setCount())
  store.dispatch(setCount({count: 1050}))

// id like to reset the count to zero

