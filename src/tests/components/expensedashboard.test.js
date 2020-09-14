import React from 'react'
import {shallow} from 'enzyme'
import ExpenseDashboard from '../../components/ExpenseDashboard'

test('dashboard component', ()=>{
    const wrapper = shallow(<ExpenseDashboard/>)
    expect(wrapper).toMatchSnapshot()
})