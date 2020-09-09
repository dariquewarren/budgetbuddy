// react test renderer
import React from 'react'
import Header from '../../components/Header'
import ReactShallowRenderer from 'react-test-renderer/shallow'


test("should render headercmpnt", ()=>{
    const renderer = new ReactShallowRenderer()
    renderer.render(<Header/>)
    console.log(renderer.getRenderOutput())
})