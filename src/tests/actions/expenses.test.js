import {addExpense, EditExpense, removeExpense, editExpense} from '../../actions/expenses'
 test('setup remove expense action object', ()=>{
     const action = removeExpense({id: '1223d'})
     expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: "1223d"
     })
 })

 // setup test case]
 // call editexpense {note: new Value}
 // make an assertion

 test('setup edit expense action object', ()=>{
    const result = editExpense('123d',{ note: 'new note'})
    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id:'123d',
        updates: {
            note: 'new note'
        }

    })
 })

 
 
 
 test('should setup add expense action object with provided values',()=>{
    const expensedata = {
        description:"",
        amount: 109500,
        createdAt: 1000,
        note: 'this was last months rent'
    }

    const action = addExpense(expensedata)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            ...expensedata,
            id: expect.any(String)
        }
    })
 })

 test('should setup add expense action object with default values',()=>{
// call add expense with no data
// assert the value of the oobjectr


const action = addExpense()
expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense:{
        description:"",
        amount: 0,
        createdAt: 0,
        note: '',
        id: expect.any(String)
    }
})
})