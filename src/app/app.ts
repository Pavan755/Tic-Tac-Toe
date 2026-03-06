import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Board } from './board/board';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Board],  // Import Board component to display the tic-tac-toe game
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Tic-Tac-Toe');
}
