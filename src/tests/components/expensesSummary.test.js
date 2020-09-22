import React from 'react'
import { shallow } from "enzyme";
import {ExpensesSummary} from '../../components/ExpensesSummary'
import expenses from '../fixtures/expenses'


test('should render snapshot of component with 0 expenses added', ()=>{
    const wrapper = shallow(<ExpensesSummary/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render snapshot of component with expenses added', ()=>{
    const wrapper = shallow(<ExpensesSummary expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()

})