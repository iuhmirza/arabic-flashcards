import { useState } from "react"

const CurrentFlashcard = ({ flashcard }) => {
  return (
    <div>
      <p>{flashcard.arabic}</p>
    </div>
  )
}

const App = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [showEnglish, setShowEnglish] = useState(false)
  const flashcards = [
    {
      english: "He did",
      arabic: "فَعَلَ"
    },
    {
      english: "He was",
      arabic: "كَانَ"
    },
    {
      english: "This is",
      arabic: "هٰذَا"
    }
  ]

  const randomFlashcard = () => {
    setCurrentCardIndex(Math.floor(Math.random() * flashcards.length))
    setShowEnglish(false)
  }

  const toggleTranslation = () => {
    setShowEnglish(!showEnglish)
  }

  return (
    <div>
      <div>
        <CurrentFlashcard flashcard={flashcards[currentCardIndex]} />
        {showEnglish ? (flashcards[currentCardIndex].english) : ("")}
      </div>
      <div>
        <button onClick={toggleTranslation}>Translate</button>
        <button onClick={randomFlashcard}>Random Card</button>
      </div>
    </div>
  )
}

export default App;
