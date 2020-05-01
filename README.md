# Project Overview

## Project Title

Words in a Word

## Project Description

This application is a simple game that the user can play on their spare time. The user will play one round of figuring out how many words they can come up with when giving a random of 7 letters. Now here is the intense part, they user will be timed. The user will have 30 seconds to figure out as many words as they can. Once the time is up the user will be able to see how many points it received for the right words. The user will get to play this game as many times they want with a reset button.

## Wireframes

[Wireframes](https://wireframe.cc/pro/pp/b788c4dfd337672)

#### Component Hierarchy

```
node_modules
public
src
|__ index.js
|__ index.css
|__ App.js
|__ App.css
|__ App.test.js
|__ serviceWorker.js
|__ setupTests.js
|__ env.development.local
|__ components/
      |__ Homepage/
            |__ Homepage.js
            |__ Homepage.css
            |__ Homepage.test.css
      |__ PlayGame/
            |__PlayGame.js
            |__ PlayGame.css 
      |__ PointSystem/
            |__PointSystem.js
            |__ PointSystem.css
      |__ RestartButton/
            |__ RestartButton.js
            |__ RestartButton.css
            |__ RestartButton.test.css
      |__ Results/
            |__ Results.js
            |__ Results.css
            |__ Results.test.css
      |__ DisplayUsersInputList/
            |__ DisplayUsersInputList.js
            |__ DisplayUsersInputList.css
            |__ DisplayUsersInputList.test.css
      |__ DisplaySolution/
            |__ DisplaySolution.js
            |__ DisplaySolution.css
            |__ DisplaySolution.test.css 
      |__ DisplayList/
            |__ DisplayList.js
            |__ DisplayList.css
            |__ DisplayList.test.css                       

```

<!-- ## API

[Anagram Solver](https://rapidapi.com/danielthepope/api/countdown/endpoints)
<br>
[WordsApi](https://www.wordsapi.com/) -->

#### API DATA

|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| Anagram Solver |     some     | _https://rapidapi.com/danielthepope/api/countdown/endpoints_ | _https://danielthepope-countdown-v1.p.rapidapi.com/solve/pimgatner_ |


## MVP

- Be able to call the API to check for all the solutions to see if they are words
- Be able to have a fully fucntionaly timer of 30 sec as
- Be able to use that timer to start on click of a button
- User Router to direct to the right components when needed
- Have a structural hierchy on how my project should be presented
- Be able to create test to see if my input fields is working correctly
- Able to use Display flex to align content on each component
- Be able to sytle each component on thier seperate CSS.

## PostMVP 

- Be Able to use a second API to display the definition of the correct words
- Change the input/buttons effects 
- Be able to add music gaming backgrround track
- Be able to add player 2


## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|April 27th| Project Planning/Project Aproval - Start Basic Components| Completed
|April 28th| Start with Timer function / API CAll / Build Homepage /PlayGameButton /PlayGame component| Completed
|April 29th| Finish Result / DisplayList / RestartButton component | Completed
|April 30th| CSS Styling | Completed
|May 1st| Presentation | 

<!-- ## Priority Matrix

![Priotity Matrix](https://i.imgur.com/stsKBoI.jpg) -->

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| React-Setup| L | 1hr|1hr | 1hr |
| CSS Style - Basic | L | 1hr|1hr | 1hr |
| Homepage component - React | M | 2hr | 2hr | 2hr |
| Homepage component - CSS | M | 1hr | 2hr | 2hr |
| PlayGame component - React | M | 3hr | 5hr | 5hr |
| PlayGame component - CSS | L | 1hr | 1hr | 1hr |
| Accessing the API | M | 2hrs | 2hr | 2hr |
| Create the timer function | H | 6hr | 7hr | 7hr |
| Create PointSystem Component| H | 3hr | 3hr | 3hr |
| Create PointSystem CSS Basic| L | 1hr | 1hr  | 1hr |
| Create RestartButton component| H | 5hr | 2hr | 2hr |
| Create RestartButton CSS - Basic| L | 1hr|1hr  | 1hr |
| Create Results component| H | 3hr | 4hr | 4hr |
| Create Resuls CSS Basic| L | 1hr | 1hr | 1hr |
| Create DisplayUsersInputList Component| H | 3hr | 3hr | 3hr |
| Create DisplayUsersInputList CSS Basic| L | 1hr |3hr  | 3hr|
| Create DisplaySolution Button Component| H | 3hr |3hr  | 3hr |
| Create DisplaySolution Button CSS Basic| H | 1hr | 1hr | 1h |
| Create DisplayList Button Component| H | 3hr |3hr  | 3hr |
| Create DisplayList Button CSS Basic| H | 1hr | 1hr | 1h |
| Testing with Enzyme/Jest| H | 1hr | 2hr | 2hrh |
| Styling CSS | H | 6hr | 10hrs | 10hrs  |
| Total | H | 45hrs| 62hrs | 62hrs | 


## SWOT Analysis
My weakeness is understanding the React cycle, I need better understand how React works when loading different components. I will overcome this by reading on this and definitly using my tokens for help ,but I believe the best way is to play around with console.log to see what is happening at each part of the React cycle (trial and error). I also am going to have a major problem in setting a timer using the methods, set-timeout/set-Interval, This is going to take me a while to grip and I need to start reading how to incoporate a 30 sec timer with React and where to place it

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
//App.js
  useEffect(() => {
    let intervalTime = null;
    if (Active && counter > 0) {
      intervalTime = setInterval(() => {
        setCounter(sec => sec - 1);
      }, 1000);
    } else if (!Active && counter === 0) {
      clearInterval(intervalTime);
    }
    return () => clearInterval(intervalTime);
    //this will allow for the counter keep triggering itself - 
  }, [Active, counter])


//PlayGame.js
    {props.counter === 0 ? <Redirect to={
      {
        pathname: "/Results",
        points: points

      }} /> : ""}

```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
