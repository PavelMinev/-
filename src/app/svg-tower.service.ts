import { Injectable } from '@angular/core';

import { Indicator } from './indicator';

const mass = 1200;

@Injectable({
	providedIn: 'root'
})
export class SvgTowerService {

	constructor() { }

	valueCheck(indicator: Indicator):boolean {
		return (indicator.value <= indicator.minValue || indicator.value >= indicator.maxValue) ? true : false;
	}

	getHeight(value: number):string {
		if (value < 0) return "0";
		else if (value > 100) return "393.5";
		return "" + 393.5 * (1 - value / 100);
	}

	getMass(value: number):number {
		return value * mass / 100;
	}

}
