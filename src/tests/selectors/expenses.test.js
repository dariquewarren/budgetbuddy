import selectExpenses from '../../selectors/expenses'
import moment from 'moment'
import expenses from '../fixtures/expenses'

test('should filter by text value', ()=>{
    const filters = {
        text: 'gum',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result =selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[0]])
})

test('should filter by start date',()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(expenses, {...filters})
    expect(result).toEqual([ expenses[0],expenses[2]])
})

test('should filter by end date',()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([ expenses[0], expenses[1]])
})


// sortby date

test('should filter by sortby date',()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, {...filters})
    expect(result).toEqual([ expenses[0], expenses[1],expenses[2]])
})

// // sortby amount
test('should filter by sortby',()=>{
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, {...filters})
    expect(result).toEqual([ expenses[0],expenses[1],expenses[2]])
})