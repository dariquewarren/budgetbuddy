import React from "react";
import { connect } from "react-redux";

import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from "../actions/filters";

class ExpenseListFilters extends React.Component {
  
constructor(props){
  super(props);
  this.state = {
    value: new Date().toISOString(),
    formattedValue: null
  };
}
  onDatesChange = (value, formattedValue) => {
    this.setState(()=>{
      value: value
      formattedValue: formattedValue
    })
    this.props.dispatch(setStartDate(value));
    this.props.dispatch(setEndDate(value));
  };

  
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));

            console.log(e.target.value);
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === "amount") {
              this.props.dispatch(sortByAmount());
            } else if (e.target.value === "date") {
              this.props.dispatch(sortByDate());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <Datetime
        dateFormat="MM-DD-YYYY" 
        timeFormat={false}
        value={this.createdAt}
        initialValue={this.state.createdAt}
        input={true}
        onChange={this.onDateChange}

    />

       
      </div>
    );
  }
}

const startDatePicker = ()=>{
  return(
<div>
</div>
  )
}

const startDatePicker = ()=>{
  return(
    <div>
    </div>
  )
}
// setup value and onchane for select
const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
