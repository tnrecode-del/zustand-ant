import React from 'react';
import Board from './components/Board';
import Square from './components/Square';
import {useStore} from '@/stores/useStore';

const App: React.FC = () => {


  const {squares, setSquares, isX, setIsX, turnCount, setTurnCount, reset} = useStore();

  const winner = calculateWinner(squares);

  return (
    <Board>
      {squares.map((_, index) => (
        <Square
          key={index}
          disabled={!!winner}
          value={ squares[index] }
          onClick={() => {
            if(squares[index] !== '') return;
            const newSquares = squares.slice();
            newSquares[index] = isX ? 'X' : 'O';
            setSquares(newSquares);
            setIsX(!isX);
            setTurnCount(turnCount + 1);
          }}
        />
      ))}

      <p>{`Current Player: ${isX? 'X': 'O'}`}</p> 
      <p>{turnCount}</p>
      <h1>{winner && `Winner is: ${winner}`}</h1>
      <h1>{winner || turnCount === 9 ? <Square disabled={false} value={'reset'} onClick={reset}/> : ''}</h1>
    </Board>
  );
}


const calculateWinner = (squares: string[]): string | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;