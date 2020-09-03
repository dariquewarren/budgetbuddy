// hgher oreder component(HOC) A COMPONENT THAT RENDERS ANOTHER COMPONENT
// goal is to- reuse code
// reder hijacking
// prop manipulation
// abstract state


import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props)=>(
    <div>
    <h1>Info</h1>
    <p>some info is: {props.info}</p>
    </div>
)


ReactDOM.render(<Info info="the details"  />, document.getElementById('app'))