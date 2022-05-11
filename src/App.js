import './App.css';
import nodeEmoji from 'node-emoji';
import { useState } from 'react';

export default function App() {
  const [emoji, setEmoji] = useState(nodeEmoji.random().emoji);
  const [emojiName, setEmojiName] = useState('');
  return (
    <div className="App">
      <div>Emoji: {emoji}</div>
      <button onClick={() => setEmoji(nodeEmoji.random().emoji)}>Random</button>
      <h2>Choose an emoji</h2>
      <input
        value={emojiName}
        onChange={(event) => setEmojiName(event.currentTarget.value)}
      />
      <br />
      {nodeEmoji.hasEmoji(emojiName)
        ? nodeEmoji.get(emojiName)
        : 'Emoji not found'}
    </div>
  );
}
console.log(nodeEmoji.random().emoji);
