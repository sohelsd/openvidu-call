import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './app-logo.component.html',
  styleUrls: ['./app-logo.component.css']
})
export class AppLogoComponent {

  @Input() lightTheme: boolean;
	@Input() compact: boolean;
	@Input() sessionId: string;
  @Input() logoURL: string;
  constructor() { }

}
