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

const withAdminWarning =(WrappedComponent)=>{

    return (props)=>(
        <div>
        {props.isAdmin && <p>this is private info. please dont share</p>}
        <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent)=>{
    return(props)=>(
        <div>
        {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>please login</p>}

        </div>
    )
}
// alt way to create function
// const requireAuthentication = (WrappedComponent)=>{
//     return(props)=>(
//         <div>
       
//         {props.isAuthenticated ?  <div>
//             <p>Here is your info</p> <WrappedComponent {...props} />
//             </div> : <p>please login</p>}
        
//         </div>
//     )
// }
// requreAuthentication if true, show component if false---please login for info
const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)
// ReactDOM.render(<AdminInfo isAdmin={false} info="the details"  />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="the details"  />, document.getElementById('app'))