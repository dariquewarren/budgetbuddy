import React from 'react'
// setup note state
//setup oncange and value for textarea


export default class ExpenseForm extends React.Component{
    state = {
        description:"",
        note: "",
        amount: ""
    }

    onDescriptionChange =(e)=>{
        const description = e.target.value
        this.setState(()=>({description}))
    }

    onNoteChange=(e)=>{
        const note = e.target.value
        this.setState(()=>({note}))
    }

    onAmountChange=(e)=>{
        const amount = e.target.value
        if(amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(()=>({amount}))
        }
    }
    render(){
        return(
            <div>
            ExpenseForm
            <form>
            <input
            type="text"
            placeholder="description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
            />
            <input
            type="text"
            placeholder="amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
            /><br></br>
            <textarea
            placeholder="add note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
            >
            </textarea>
            <button
            onClick={(e)=>{
                e.preventDefault()
                console.log(this.state)
            }}>add expense</button>
            </form>
            </div>
        )
    }
}