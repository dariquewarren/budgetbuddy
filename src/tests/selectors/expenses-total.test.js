import selectExpensesTotal from '../../selectors/expenses-total.js'
import moment from 'moment'
const expenses = [{
    id: '1',
    description: 'gum',
    note: '',
    amount: 195,
    createdAt: moment(0)
},{
    id: '2',
    description: 'fireworks',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},{
    id: '3',
    description: 'range rover',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}]

// test('should add all expenses', ()=>{
//     const total = selectExpensesTotal(expenses)// map and reduce
    
//     expect(total).toBe(114195)
    
// })

test('should add one expense', ()=>{
    const total = selectExpensesTotal([expenses[0]])// map and reduce
    console.log(total) // 109695
    
})

test('should return 0 if no expenses', ()=>{
    const total = selectExpensesTotal()// map and reduce
    console.log(total) // 0
    
})
