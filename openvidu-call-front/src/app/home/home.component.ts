import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { uniqueNamesGenerator, adjectives, colors } from 'unique-names-generator';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public roomForm: FormControl;
	public version = require('../../../package.json').version;

	constructor(private router: Router, public formBuilder: FormBuilder) {}

	ngOnInit() {
		const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors], separator: '-', length: 2});
		const random5digits = Math.random().toString(36).substr(2, 5);
		this.roomForm = new FormControl(random5digits, [Validators.minLength(4), Validators.required]);
	}

	public goToVideoCall() {
		if (this.roomForm.valid) {
			const roomName = this.roomForm.value.replace(/ /g, '-'); // replace white spaces by -
			this.roomForm.setValue(roomName);
			this.router.navigate(['/', roomName]);
		}
	}
}
