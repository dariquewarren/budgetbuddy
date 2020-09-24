import React from "react";
import { connect } from "react-redux";
import Datetime from 'react-datetime';

import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from "../actions/filters";


const detailStyles = {
  width: '18rem'
}


class ExpenseListFilters extends React.Component {
  
constructor(props){
  super(props);
  this.state = {
    startDate: 'set start date',
    endDate: 'set end date'
  };
}
  onDatesChange = (value) => {
    
    this.props.dispatch(setStartDate(value));
    this.props.dispatch(setEndDate(value));
  };

  onSetStartDate = (value)=>{
    this.props.dispatch(setStartDate(value))
  }

  onSetEndDate = (value)=>{
    this.props.dispatch(setEndDate(value));

  }

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
      

<details styles={detailStyles}>
<summary>Filter by date range</summary>
<details>
<summary>set a start date </summary>
<Datetime
        dateFormat="MM-DD-YYYY" 
        timeFormat={false}
        value={this.state.startDate}
        initialValue={this.state.startDate}
        input={false}
        onChange={this.onSetStartDate}

    /> 
</details>

<details>
<summary>set an end date</summary>
<Datetime
dateFormat="MM-DD-YYYY" 
timeFormat={false}
value={this.createdAt}
initialValue={this.state.endDate}
input={false}
onChange={this.onSetEndDate}

/>
</details>

</details>


   

       
      </div>
    );
  }
}




// setup value and onchane for select
const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
