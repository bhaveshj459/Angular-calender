import { Component } from '@angular/core';
import { ModelService } from './services/model.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-card';
  constructor(public model: ModelService) { }

  openModel(event: Event) {
    event.preventDefault();
    this.model.toggleModel('auth');
  }

}
