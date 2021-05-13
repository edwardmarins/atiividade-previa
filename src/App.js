import { useState } from 'react';
import Result from './Result';

function App() {
  const [word, setWord] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(false);

  const handleChange = ({ target }) => {
    const { value } = target;
    setWord(value);
    setIsPalindrome(checkPalindrome(value));
  };

  function checkPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  return (
    <>
      <input
        type="text"
        value={word}
        onChange={handleChange}
        placeholder="Digite uma Palavra"
      />
      <Result palindrome={isPalindrome} />
    </>
  );
}

export default App;
