import React, { useState } from 'react';
import './help.css'; // Import the CSS file for modal styling

const HelpModal = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button onClick={toggleModal}>Request Help</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <h2>Rules of the Game</h2>
            <p>
              The objective of the game is to guess the word correctly before the hangman is fully drawn. Players have a limited number of guesses.
              <br />
              A random word is selected as the target word. This word is typically chosen from a predefined list of words or generated from a specific category.
              <br />
              Players guess letters one by one to uncover the hidden word. If the guessed letter is in the target word, all occurrences of that letter are revealed. If the guessed letter is not in the word, it counts as a wrong guess.
              <br />
              Players have a limited number of incorrect guesses allowed before the hangman is fully drawn. Commonly, players are allowed 6 incorrect guesses before the game ends.
              <br />
              Winning and Losing:
              <br />
              - Winning: The player wins if they successfully guess the word before using up all their allowed guesses.
              <br />
              - Losing: The player loses if they use up all their guesses before correctly guessing the word. In this case, the hangman is fully drawn, and the game ends.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpModal;
