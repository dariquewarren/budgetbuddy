


// set_tect_filter
export const setTextFilter = (text = '') => ({
    type: "SET_TEXT_FILTER",
    text,
  });
  
  // sortby date
  
  export const sortByDate = () => ({
    type: "SORT_BY_DATE",
    date: "date",
  });
  // sortby amount
  export const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT",
    amount: "amount",
  });
  
  // setSTART DATE
  export const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate,
  });
  // SETEND DATE
 export const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate,
  
  });