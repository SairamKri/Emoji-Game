// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmojiButton} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => {
    onClickEmojiButton(id)
  }

  return (
    <li className="group-of-emojis">
      <button
        className="emojis-button-container"
        type="button"
        onClick={onClickEmoji}
      >
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
