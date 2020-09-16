import filterReducers from "../../reducers/filters";
import moment from "moment";

test("should setup default filter values", () => {
  const state = filterReducers(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test(" should set sotby  to amount", () => {
  const state = filterReducers(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test(" should set sotby  to amount", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount",
  };

  const action = { type: "SORT_BY_DATE" };

  const state = filterReducers(currentState, action);
  expect(state.sortBy).toBe("date");
});

// should set text filter

test("should set text filter", () => {
  const text = "jjjjjjj";
  const action = { type: "SET_TEXT_FILTER", text };
  const state = filterReducers(undefined, action);

  expect(state.text).toBe(text);
});
// should set start date filter
test("should set start date filter", () => {
  const startDate = moment().startOf('month');
  const action = { type: "SET_TEXT_FILTER", startDate };
  const state = filterReducers(undefined, action);

  expect(state.startDate).toEqual(startDate);
});
// should set end date filter
test("should set end date filter", () => {
    const endDate = moment().startOf('month');
    const action = { type: "SET_TEXT_FILTER", endDate };
    const state = filterReducers(undefined, action);
  
    expect(state.startDate).toEqual(endDate);
});
