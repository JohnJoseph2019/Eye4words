import React from "react"
import { shallow, mount, render } from "enzyme"
import PointSystem from "./PointSystem"

describe('PointSystem Component', () => {
  let component
  beforeEach(() => {
    component = shallow(<PointSystem />)
  })
  test("renders", () => {
    expect(component.exists()).toBe(true);
  });
  test('should have a Table', () => {
    expect(component.find('Table')).toBeDefined();
  });
});
