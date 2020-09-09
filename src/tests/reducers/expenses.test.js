import expensesReducers from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', ()=>{
    const state = expensesReducers(undefined, {type: '@@init'})
    
})


test('should remove expense by id', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expensesReducers(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})


test('should not remove expense if id not found', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    }

    const state = expensesReducers(expenses, action)
    expect(state).toEqual(expenses)
})
/*

expense example
{
    description = "",
    note = "",
    amount = 0,
    createdAt = 0,
  }

*/
// should add an expense

test('',()=>{
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            description: "darique",
            note : "",
            amount: 2020202,
            createdAt : 0,
            id: 4
          }
    }
    const state = expensesReducers(expenses, action)
    expect(state[3]).toEqual(action.expense)
})
// should edit expense

test('should edit expense', ()=>{
    const action = {
        type: 'EDIT_EXPENSE',
       id: expenses[0].id,
        updates: {
            description: "Darique"}
            
            
         
    }
    const state = expensesReducers(expenses, action)
    expect(state[0].description).toEqual('Darique')
})
// should not edit expense if expense not found

test('',()=>{
const action ={
    type: 'EDIT_EXPENSE',
    id: 5,
    updates: {
        description: "Darique"}
     
}

const state = expensesReducers(expenses, action)
expect(state).toEqual(expenses)
})

