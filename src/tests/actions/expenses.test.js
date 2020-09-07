import {addExpense, EditExpense, removeExpense} from '../../actions/expenses'
 test('setup remove expense action object', ()=>{
     const action = removeExpense({id: '1223d'})
     expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: "1223d"
     })
 })