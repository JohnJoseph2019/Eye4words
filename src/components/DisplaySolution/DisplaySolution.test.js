import React from "react"
import { shallow } from "enzyme"
import DisplaySolution from "./DisplaySolution"
import "./DisplaySolution.css"

describe('DisplaySolution Component', () => {
  let component
  beforeEach(() => {
    component = shallow(<DisplaySolution
      solution={[]}
    />)

  })
  it("DisplaySolution renders", () => {
    expect(component.exists()).toBe(true);
  });
  it('should containt content Solution', () => {
    expect(component.contains('Solution')).toBe(true);
  });
});