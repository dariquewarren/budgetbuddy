// react test renderer
import React from "react";
import { shallow } from "enzyme";
import toJSON from 'enzyme-to-json'
import Header from "../../components/Header";

test("should render headercmpnt", () => {
  const wrapper = shallow(<Header />);
// console.log(wrapper.props())

    expect(toJSON(wrapper)).toMatchSnapshot();
  // expect(wrapper.find('h1').text()).toBe('Budget Buddy')
  // const renderer = new ReactShallowRenderer()
  // renderer.render(<Header/>)
  // expect(renderer.getRenderOutput()).toMatchSnapshot()
});
