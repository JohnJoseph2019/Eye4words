import React from "react"
import { shallow } from "enzyme"
import PlayGame from "./PlayGame"

describe('PlayGame component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<PlayGame />)
  })
  test("renders", () => {
    expect(component.exists()).toBe(true);
  });



})