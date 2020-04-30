import React from "react"
import { shallow, mount, render } from "enzyme"
import PlayGame from "./PlayGame"

function hi() {
  console.log('hi');
}
describe('PlayGame component', () => {
  let component
  beforeEach(() => {
    component = shallow(<PlayGame
      randomLetters={[]}
      inputGuess={"aa"}
      updateInputGuess={hi}
      handleTimer={hi}
      counter={15}
      isActive={true}
      updateUsersList={hi}
      usersInputList={[]}
      solution={[]}
      handleRandomPick={hi}
    />)
  })
  test('should Have className playGame', () => {
    expect(component.contains(<PlayGame />)).toBeDefined()
  });
  test('it should have a form', () => {
    expect(component.find('Form')).toBeDefined();
  });



});