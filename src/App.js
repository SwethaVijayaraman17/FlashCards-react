import React, { useState } from 'react';
import './App.css';
import FlashCards from './FlashCards';
import FlashCardsCollection from './FlashCardsCollection';

function App() {

  const [flashCards, setflashcards] = useState(false);

  return (
    <div className="App">
      <FlashCardsCollection /> 
    </div>
  );
}

export default App;
