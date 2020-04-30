import React from "react"
import { shallow, mount, render } from "enzyme"
import RestartButton from "./RestartButton"

describe('RestartButton Component', () => {
  let component
  beforeEach(() => {
    component = shallow(<RestartButton />)
  })
  test("renders", () => {
    expect(component.exists()).toBe(true);
  });
  test('should have a Table', () => {
    expect(component.find('Table')).toBeDefined();
  });
});
