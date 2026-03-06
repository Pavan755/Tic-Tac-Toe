import { Component } from '@angular/core';
import { Square } from '../square/square';  // Import Square component to display individual squares

@Component({
  selector: 'app-board',
  imports: [Square],  // Include Square component so it can be used in the template
  templateUrl: './board.html',
  styleUrl: './board.css',
})
export class Board {
  squares: any[] = [];                 // represents the 9 squares on the board, initialized to null
  xIsNext: boolean = true;         // boolean to keep track of which player's turn it is, initialized to true (X goes first) 
  winner: string | null = null;    // variable to store the winner of the game, initialized to null (no winner at the start)

  constructor() { }
  ngOnInit() {
    this.newGame();
  }

  newGame() {                               // resets the game to its initial state 
    this.squares = Array(9).fill(null);     // creates an array of 9 null values to represent the empty squares on the board
    this.winner = null;                     // resets the winner to null, indicating that there is no winner at the start of a new game
    this.xIsNext = true;                    // sets xIsNext to true, indicating that X will go first in the new game
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';        // tells us which player is next
  }

  makeMove(idx: number) {                        // handles a player's move when they click on a square
    if (!this.squares[idx] && !this.winner) {    // checks if the square is empty and there is no winner yet
      this.squares[idx] = this.player;           // updates the square with the current player's symbol (X or O)
      this.xIsNext = !this.xIsNext;             // toggles the turn to the next player
      this.winner = this.calculateWinner();     // checks if there is a winner after the move
    }
  }

  calculateWinner() {                          // checks all possible winning combinations to determine if there is a winner
    const lines = [                            // defines the winning combinations of squares (rows, columns, diagonals)
      [0, 1, 2], [3, 4, 5], [6, 7, 8],        // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8],        // columns
      [0, 4, 8], [2, 4, 6]                    // diagonals
    ];

    for (let i = 0; i < lines.length; i++) {                    // iterates through each winning combination
      const [a, b, c] = lines[i];                            // destructures the indices of the squares in the current winning combination
      if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {  // checks if the squares in the current combination are all occupied by the same player
        return this.squares[a];                          // returns the symbol of the winning player (X or O)
      }
    }
    return null;                                      // returns null if there is no winner
  }
}