// Write your code here.

import './index.css'

const NavBar = props => {
  const {currentScore, topScore, isGameInProgress} = props
  return (
    <div className="navbar-container">
      <div className="logo-tagline-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="navbar-image"
        />
        <h1 className="game-name">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="score-card-container">
          <p className="score-heading">Score:{currentScore}</p>
          <p className="score-heading">Top Score:{topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
