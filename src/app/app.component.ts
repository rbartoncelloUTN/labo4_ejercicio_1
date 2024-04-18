import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'my-app';
  numberOne!: number | undefined;
  numberTwo!: number | undefined;
  addResult: number = 0;
  nombre: string = '';

  add() {
    this.addResult = ((this.numberOne || 0) + (this.numberTwo || 0)) / 2;
  }
  clear() {
    this.addResult = 0;
    this.numberOne = undefined;
    this.numberTwo = undefined;
  }
}
