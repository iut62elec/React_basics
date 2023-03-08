import { useState } from "react"

// function Squre() {
//   const [value, setValue] = useState (null)
  
//   function handleClick() {
//     //console.log('clicked')
//     setValue('X')
//   }


//   return (
    
//   <button className="squre" onClick={handleClick}> {value} </button>


//   )
//   }
function Squre({value, onSquarClick}) {
  return <button className="square" onClick={onSquarClick}>
    {value}</button>;
}
export default function Board() {
const [xIsNext, setXIsNext] = useState(true);

const [squres, setSqures] = useState(Array(9).fill(null))
function handleClick(i) {
  if (squres[i] || calculateWinner(squres)) {
    return;
  }
  const nextSqures= squres.slice();
  if (xIsNext) {
      nextSqures[i]= "X"


  }
  else {
      nextSqures[i]= "O"
  }

  //nextSqures [i]="X"
  setSqures(nextSqures);
  setXIsNext(!xIsNext);

}
const winner = calculateWinner(squres);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (
  <div>
<div className="status">{status}</div>
  <div className="board-row">
    <Squre value={squres[0]} onSquarClick={() =>handleClick(0)}></Squre>
    <Squre value={squres[1]} onSquarClick={() =>handleClick(1)}> </Squre>
    <Squre value={squres[2]} onSquarClick={() =>handleClick(2)}> </Squre>
  </div>
  <div className="board-row">
    <Squre value={squres[3]} onSquarClick={() =>handleClick(3)}> </Squre>
    <Squre value={squres[4]} onSquarClick={() =>handleClick(4)}> </Squre>
    <Squre value={squres[5]} onSquarClick={() =>handleClick(5)}> </Squre>
  </div>
  <div className="board-row">
    <Squre value={squres[6]} onSquarClick={() =>handleClick(6)}> </Squre>
    <Squre value={squres[7]} onSquarClick={() =>handleClick(7)}> </Squre>
    <Squre value={squres[8]} onSquarClick={() =>handleClick(8)}> </Squre>
  </div>


  </div>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
