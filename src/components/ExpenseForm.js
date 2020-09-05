import React from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
const now = moment()
console.log(now.format())

export default class ExpenseForm extends React.Component{
    state = {
        description:"",
        note: "",
        amount: "",
        createdAt: moment(),
        calendarFocused: false,
        error: ""
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
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({amount}))
        }
    }

    onDateChange=(createdAt)=>{
if(createdAt){
    this.setState(()=>({createdAt}))
}
    }

    onFocusChange=({focused})=>{
        this.setState(()=>({calendarFocused: focused}))
    }

    onSubmit=(e)=>{
        e.preventDefault()
       if (!this.state.description || !this.state.amount){
           // set error state to 'please provide descroption and amoint
this.setState=(()=>({error: 'Please provide description and Amount'}))

        }else {
            // clear the error
            this.setState(()=>({error: ""}))
            c
        }
    }

    render(){
        return(
            <div>
            ExpenseForm
            <form onSubmit={this.onSubmit}>
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
            />
            
            <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={2}
            isOutsideRange={()=> false}
            />
            
            <br></br>
            <textarea
            placeholder="add note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
            
            >
            </textarea>
            <button>add expense</button>
            </form>
            </div>
        )
    }
}