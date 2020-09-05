import React from 'react'
const EditExpense = (props) =>{

    console.log(props)
 return   (
        <div>
        editing expense with id of {props.match.params.id}
        </div>
        )
}



export default EditExpense