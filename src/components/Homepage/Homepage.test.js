import React from "react"
import { shallow } from "enzyme"
import Homepage from "./Homepage"

describe('Homepage Component', () => {
  let component
  beforeEach(() => {
    component = shallow(<Homepage />)
  })
  test("renders", () => {
    expect(component.exists()).toBe(true);
  });
  test('should render as the title of the pagew', () => {
    expect(component.contains("Eye4Words")).toBe(true);
  });
  test('it should have a button', () => {
    expect(component.find('Button')).toBeDefined();
  });

});