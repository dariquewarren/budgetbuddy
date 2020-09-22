import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";
import moment from 'moment'
test("should render expense form correctly", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

// should render expense form with expense data from fixture

test("should render expense form with expense data from fixture", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render error for invalid form submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();

  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });

  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("should set description on input change", () => {
  const value = "new description";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(0).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("description")).toBe(value);
});


// should set note on textarea chamge

test("should set note on textarea chamge", () => {
    const value = "new note";
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
    wrapper.find("textarea").at(0).simulate('change', {
        target: { value }
      });
    expect(wrapper.state('note')).toBe(value)
  });


  test('should set amount if input is valid', ()=>{
      
    const value = '122.34'
    const wrapper = shallow(<ExpenseForm />)
      wrapper.find("input").at(1).simulate("change", {
        target: { value },
      });
      expect(wrapper.state("amount")).toBe(value);
  })

  test('should set amount if input is not valid', ()=>{
      
    const value = '1.222'
    const wrapper = shallow(<ExpenseForm />)
      wrapper.find("input").at(1).simulate("change", {
        target: { value },
      });
     expect(wrapper.state("amount")).toBe('');
  })

  // amount
  // valid amount should set maount if valid input. ex 23.50
  // should not set amount if invalid input ex 12.122

  test('should call onsubmit prop for valid form submissions', ()=>{
     const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)
    wrapper.find("form").simulate("submit", {
        preventDefault: () => {},
      });
      expect(wrapper.state('error')).toBe('')
    

      expect(onSubmitSpy).toHaveBeenLastCalledWith({
          description: expenses[0].description,
          amount: expenses[0].amount,
          note: expenses[0].note,
          createdAt: 0
      })
  })

  test('should set new date on date change', ()=>{
      const now = moment(0)
      const wrapper = shallow(<ExpenseForm/>)
      wrapper.find('SingleDatePicker').prop('onDateChange')(now)
      expect(wrapper.state('createdAt')).toEqual(now)
  })

  test('should set calendar focus on change',()=>{
     const newFocused = {focused:true}
      const wrapper = shallow(<ExpenseForm/>)
      wrapper.find('SingleDatePicker').prop('onFocusChange')(newFocused)
        expect(wrapper.state('calendarFocused')).toEqual(true)
    })