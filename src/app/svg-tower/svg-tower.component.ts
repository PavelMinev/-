import { Component, OnInit, Input } from '@angular/core';
import { Observable, of, interval } from 'rxjs';

import { Indicator } from '../indicator';
import { SvgTowerService } from '../svg-tower.service';
import { MessageService } from '../message.service';

const mass = 1200;

@Component({
	selector: 'app-svg-tower',
	templateUrl: './svg-tower.component.html',
	styleUrls: ['./svg-tower.component.css']
})

export class SvgTowerComponent implements OnInit {

	@Input() indicator: Indicator;

	height: string = "";
	currentMass: number = 0;
	overFill: boolean = false;

	private log(message: string){
		this.messageService.add(`SVGService: ${message}`);
	}


	constructor(
		private messageService: MessageService,
		private svgTowerService: SvgTowerService) {
	}

	ngOnInit() {
		this.valueCheck();
		this.getHeight();
		this.getMass();
	}

	valueCheck():void {
		this.overFill = this.svgTowerService.valueCheck(this.indicator)
	}

	getHeight():void {
		this.height = this.svgTowerService.getHeight(this.indicator.value);
	}

	getMass():void{
		this.currentMass = this.svgTowerService.getMass(this.indicator.value);
	}



}
