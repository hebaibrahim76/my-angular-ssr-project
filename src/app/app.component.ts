import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'my-angular-ssr-project';
  isDarkMode = false;

  ngOnInit(): void {
    if (localStorage?.getItem('theme'))
      this.isDarkMode = localStorage.getItem('theme') === 'dark';
  }

  onThemeClick() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }
}
