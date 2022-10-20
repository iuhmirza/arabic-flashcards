import { useState } from "react"

const CurrentFlashcard = ({flashcard}) => {
  return (
    <div>
      <p>{flashcard.english}</p>
      <p>{flashcard.arabic}</p>
    </div>
  )
}

const App = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const flashcards = [
    {
      english: "He did",
      arabic: "فَعَلَ"
    },
    {
      english: "He was",
      arabic: "كَانَ"
    }
  ]

  return (
    <div>
      <CurrentFlashcard  flashcard={flashcards[currentCardIndex]}/>
      <button onClick={() => setCurrentCardIndex(Math.floor(Math.random()*flashcards.length))}>Random Card</button>
    </div>
  )
}

export default App;
