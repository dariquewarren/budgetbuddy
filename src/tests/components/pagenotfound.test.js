import React from 'react'
import {shallow} from 'enzyme'
import NotFoundPage from '../../components/PageNotFound'

test('page not found component', ()=>{
    const wrapper =  shallow(<NotFoundPage/>)
    expect(wrapper.props()).toMatchSnapshot()
})