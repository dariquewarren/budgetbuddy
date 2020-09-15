import React from 'react'
import {shallow} from 'enzyme'
import ExpenseDashboard from '../../components/ExpenseDashboard'

test('should render dashboard', ()=>{
    wrapper = shallow(<ExpenseDashboard/>)
    console.log(wrapper)
})