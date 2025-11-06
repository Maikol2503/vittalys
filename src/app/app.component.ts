import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavInfoComponent } from "./shared/nav-info/nav-info.component";
import { NavComponent } from "./shared/nav/nav.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavInfoComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';
}
