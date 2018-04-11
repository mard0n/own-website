import { Component, OnInit } from '@angular/core';
import Canvas from '../assets/scripts/canvas.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    Canvas();
  }
}
