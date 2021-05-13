import React from 'react';

export default function Result({ palindrome = false }) {
  const color = palindrome ? 'blue' : 'red';
  const text = palindrome ? 'É um Palíndromo' : 'Não é um Palíndromo';
  return <div className={`new badge ${color}`}>{text}</div>;
}
