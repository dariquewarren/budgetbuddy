import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import { connect } from "react-redux";

const ExpenseDashboard = (props)=>(
    <div>
    this is from my dash component
    <ExpenseListFilters/>
    <ExpenseList/>

    </div>
    )
    const mapStateToProps = (state) => {
        return {
          state
        };
      };
export default connect(mapStateToProps)(ExpenseDashboard)
