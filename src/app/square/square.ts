import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-square',
  imports: [],
  templateUrl: './square.html',
  styleUrl: './square.css',
})
export class Square {
  value = input<'X' | 'O' | null>(null);     // input property to receive the value of the square (X, O, or null) from the parent component (Board)
  squareClick = output<void>();              // output event that emits when the square is clicked, so the Board component can handle the move

  // Method called when the button inside this square is clicked
  onClick() {
    this.squareClick.emit();  // emits the click event to the parent Board component
  }
}