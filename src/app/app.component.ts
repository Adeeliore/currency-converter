import {Component, createComponent} from '@angular/core';
import {AppModule} from "./app.module";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    AppModule
  ]
})
export class AppComponent {
  title = 'currency-converter';
}
