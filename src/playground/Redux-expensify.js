import {createStore, combineReducers} from 'redux'

/*
add expense
edit expense remove expense
set_tect_filter
sortby date
sortby amount
setSTART DATE
SETEND DATE
*/


// EXPENSES REDUCER
const expensesReducerDefaultState =[]
const expensesReducer =(state= expensesReducerDefaultState, action)=>{
switch(action.type){
default:
    return state
}
}

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined

}

const filtersReducer = (state = filtersReducerDefaultState, action)=>{
    switch(action.type){
        default:
            return state
    }
}
// filters reducer
// text=> '' ,sortby => 'date'  ,startdate =>undefined, enddate =>undefined
// store creaton

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

// const store = createStore(expensesReducer)
console.log(store.getState())



const demoStats ={
    expenses: [{
        id: 'adfafsdfs',
        description: 'janu rent',
        note: 'final expense for apartment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount' ,
        startDate: undefined,
        endDate: undefined
    }
}
