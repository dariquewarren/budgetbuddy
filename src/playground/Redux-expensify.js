import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// add expense
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

// // create removexpense action generator. wire up inside expensereducer
// store.dispatch(removeExpense({id: expenseOne.expense.id}))

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});
// edit expense remove expense

const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

// set_tect_filter
const setTextFilter=(text='')=>({
    type: 'SET_TEXT_FILTER',
text
})
// sortby date
// sortby amount
// setSTART DATE
// SETEND DATE

// EXPENSES REDUCER
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
      case 'SET_TEXT_FILTER':
          
          return {...state, text:action.text }
    default:
      return state;
  }
};
// filters reducer
// text=> '' ,sortby => 'date'  ,startdate =>undefined, enddate =>undefined
// store creaton

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

store.subscribe(() => {
  console.log("data to filter?", store.getState());
});

const expenseOne = store.dispatch(
  addExpense({ description: "food", amount: 7000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Rent", amount: 100 })
);


// const store = createStore(expensesReducer)

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

store.dispatch(editExpense(expenseTwo.expense.id, { description:'dadsdasdasdasdasda', amount: 5000 }));


store.dispatch(setTextFilter('rent'))

const demoStats = {
  expenses: [
    {
      id: "adfafsdfs",
      description: "janu rent",
      note: "final expense for apartment",
      amount: 54500,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  },
};

const user = {
  name: "jen",
  age: 40,
};

console.log({ ...user, location: "Harlem", age: 24 });
