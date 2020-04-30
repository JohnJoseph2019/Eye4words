import React from "react"
import { shallow } from "enzyme"
import DisplayList from "./DisplayList"
import "./DisplayList.css"

describe('DisplayList Component', () => {
  let component
  beforeEach(() => {
    component = shallow(<DisplayList />)
  })
  test("DisplaySolution renders", () => {
    expect(component.exists()).toBe(true);
  });
  test('should contain element DIV', () => {
    expect(component.find('Div')).toBeDefined();
  });
});