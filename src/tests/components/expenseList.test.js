import React from 'react'
import { shallow } from "enzyme";
import {ExpenseList} from '../../components/ExpenseList'
import expenses from '../fixtures/expenses'
test('should render ExpenseList with expenses', ()=>{
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(wrapper.props()).toMatchSnapshot()
})
test('should render explist with no expenses paragraph', ()=>{
    const wrapper = shallow(<ExpenseList expenses={[]}/>)
    expect(wrapper.props()).toMatchSnapshot()
})