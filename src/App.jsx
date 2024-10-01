import './App.css';
import { useState } from 'react';
import Flashcard from './components/flashcard';

const App = () => {
  const [count, setCount] = useState(0);

  const flashcards = [{'easy':['What is the closest planet to the Sun?', 'Mercury']}, {'easy':["What's the name of our star?", "Sun"]}, {'medium':["What phenomenon causes the red appearance of Mars?", "Iron Oxide/rust"]}, {'medium':["What is the name of the galaxy that contains our Solar System?", "Milky Way"]}, {'hard':["What is the term for the boundary around a black hole beyond which no light or matter can escape?", "Event Horizon"]}, {'hard':["What is the name of the nearest star system to Earth, located about 4.37 light-years away?", "Alpha Centauri"]}]

  const rando = () => {
    while(true){
      let rand = Math.floor(Math.random() * 5)
      if (rand == count){
        continue
      }else{
        return rand
      }
    }
  }

  const next = () => {
    setCount(rando())
  }


  return (
    <div className="App">
      <div className="header">
        <h1>Flashcards in Space</h1>
        <h2>Number of Cards: 6</h2>
        <Flashcard difficulty = {(Object.entries(flashcards[count]))[0][0]} question = {(Object.entries(flashcards[count]))[0][1][0]} answer={(Object.entries(flashcards[count]))[0][1][1]}/>
      </div>
      <div className ="button-container">
        <button onClick={next}>Next</button>
      </div>
    </div>
  )
}

export default App
