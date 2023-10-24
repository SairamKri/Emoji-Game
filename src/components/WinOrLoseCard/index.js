// Write your code here.

import './index.css'

const loseImg = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const wonImg = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgainButton, score} = props
  const imageUrl = isWon ? wonImg : loseImg
  const heading = isWon ? 'You Won' : 'You Lose'
  const paragraph = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-card-container">
      <div className="left-side-score-display-container">
        <h1 className="main-heading">{heading}</h1>
        <p className="status-label">{paragraph}</p>
        <p className="status-label-value">{score}/12</p>
        <button
          className="paly-again-button"
          type="button"
          onClick={onClickPlayAgainButton}
        >
          Play Again
        </button>
      </div>
      <img src={imageUrl} alt="win or lose" className="win-or-lose-image" />
    </div>
  )
}

export default WinOrLoseCard
