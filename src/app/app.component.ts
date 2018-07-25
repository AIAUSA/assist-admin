import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  showNav(): void {
    document.getElementById("mainNav").style.display = "flex";
  }
  hideNav(): void {
    if (window.innerWidth < 880) document.getElementById("mainNav").style.display = "none";
  }
}
