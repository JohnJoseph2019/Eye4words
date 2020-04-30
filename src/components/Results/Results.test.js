import React from "react"
import { shallow, mount, render } from "enzyme"
import { MemoryRouter as Router } from "react-router-dom"

import Results from "./Results"
import "./Results.css"

jest.mock('react-router-dom', () => ({
  useLocation: () => ({
    pathname: "/Results",
    points: 1
  }),
}));

function hi() {
  console.log('hi');
}

describe('Results Component', () => {
  let component
  beforeEach(() => {
    component = shallow(
      <Results
        handleTimer={hi}
        isActive={true}
        solution={[]}
        usersInputList={[]}
      />)
  })
  test("renders", () => {
    expect(component.contains(<Results />)).toBeDefined()
  });
  test('should have a Results text', () => {
    expect(component.contains('Results')).toBe(true);
  });
});