// react test renderer
import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/Header";

test("should render headercmpnt", () => {
  const wrapper = shallow(<Header />);
// console.log(wrapper.props())

    expect(wrapper.props()).toMatchSnapshot();
  // expect(wrapper.find('h1').text()).toBe('Budget Buddy')
  // const renderer = new ReactShallowRenderer()
  // renderer.render(<Header/>)
  // expect(renderer.getRenderOutput()).toMatchSnapshot()
});
