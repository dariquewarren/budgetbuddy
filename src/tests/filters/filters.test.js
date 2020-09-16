import {
  setStartDate,
  setEndDate,
  sortByDate,
  sortByAmount,
  setTextFilter,
} from "../../actions/filters";
import moment from "moment";
test("should generate set startdate action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("should generate set enddate action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

// setup tests
// 22 tests for settext filter
// 1 each for sortbydate and amount
test("should generate sortby date action pbject", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE",
    date: "date",
  });
});

test("should generate sortbyamount object", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT",
    amount: "amount",
  });
});

// text filter with text
test("should generate set text filter with text", () => {
  const action = setTextFilter("bars");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "bars",
  });
});

// empty text filter
test("should generate set text filter with blank text field", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});
