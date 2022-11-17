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
    }, 
    {
      english: "Man",
      arabic: "اِنْسَانٌ"
    },
    {
      english: "House",
      arabic: "بَيْتٌ"
    },
    {
      english: "Dates",
      arabic: "تَمْرٌ"
    },
    {
      english: "Fruit",
      arabic: "ثَمْرٌ"
    },
    {
      english: "Ignorant",
      arabic: "جَاهِل"
    },
    {
      english: "Learned",
      arabic: "عَالِمٌ"
    },
    {
      english: "Good, Beautiful",
      arabic: "حَسَنٌ"
    },
    {
      english: "Bread",
      arabic: "خُبْزٌ"
    },
    {
      english: "Lesson",
      arabic: "دَرْسٌ"
    },
    {
      english: "Sin",
      arabic: "ذَنْبٌ"
    },
    {
      english: "Messenger",
      arabic: "رَسُوْلٌ"
    },
    {
      english: "Zakah",
      arabic: "زَكَاةٌ"
    },
    {
      english: "Easy",
      arabic: "سَهْلٌ"
    },
    {
      english: "Thing",
      arabic: "شَيْئٌ"
    },
    {
      english: "Prayer",
      arabic: "صَلَاةٌ"
    },
    {
      english: "Light",
      arabic: "ضَوْءٌ"
    },
    {
      english: "Good, Clean",
      arabic: "طَيِّبٌ"
    },
    {
      english: "Oppressor",
      arabic: "ظَالِمٌ"
    },
    {
      english: "Just",
      arabic: "عَادِلٌ"
    },
    {
      english: "One who forgives",
      arabic: "غَفُوْرٌ"
    },
    {
      english: "Transgressor",
      arabic: "فَاسِقٌ"
    },
    {
      english: "Ugly",
      arabic: "قَبِيْحٌ"
    },
    {
      english: "Generous",
      arabic: "كَرِيْمٌ"
    },
    {
      english: "Milk",
      arabic: "لَبَنٌ"
    },
    {
      english: "Water",
      arabic: "مَاءٌ"
    },
    {
      english: "This is",
      arabic: "نَهَارٌ"
    },
    {
      english: "Boy",
      arabic: "وَلَدٌ"
    },
    {
      english: "Cat",
      arabic: "هِرٌّ"
    },
    {
      english: "Day",
      arabic: "يَوْمٌ"
    },
    {
      english: "And",
      arabic: "وَ"
    },
    {
      english: "Or",
      arabic: "أوْ"
    },
    
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
