import React from "react";
import moment from "moment";
import Datetime from 'react-datetime';


var yesterday = moment().subtract( 1, 'day' );
var valid = function( current ){
    return current.isAfter( yesterday );
};
export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString(): "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      error: "",
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = (date) => {
    this.setState(() => ({ createdAt: date }));
  };

  

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      // set error state to 'please provide descroption and amoint
      this.setState(() => ({ error: "Please provide description and Amount" }));
    } else {
      // clear the error
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt,
        note: this.state.note,
      });
    }
  };

  render() {
    return (
      <div>
        ExpenseForm
        {this.state.error && <p>{this.state.error}</p>}
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

          
          <Datetime
          dateFormat="MM-DD-YYYY" 
          timeFormat={false}
          value={this.createdAt}
          initialValue={'created at date'}
          input={true}
          onChange={this.onDateChange}
          isValidDate={valid}
      /> 
          <br></br>
          <textarea
            placeholder="add note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button>add expense</button>
        </form>
      </div>
    );
  }
}

