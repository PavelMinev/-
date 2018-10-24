import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Indicator } from './indicator';
import { Observable, interval } from "rxjs";

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const indicators = [
		{ id: "1", title: "№1", value: 98, minValue: 40, maxValue: 95 },
		{ id: "2", title: "№2", value: 60, minValue: 40, maxValue: 95 },
		{ id: "3", title: "№3", value: 38, minValue: 40, maxValue: 95 },
		{ id: "4", title: "№4", value: 79, minValue: 40, maxValue: 95 },
		{ id: "5", title: "№5", value: 99, minValue: 40, maxValue: 95 },
		{ id: "6", title: "№6", value: 60, minValue: 40, maxValue: 95 },
		{ id: "7", title: "№7", value: 51, minValue: 40, maxValue: 95 },
		{ id: "8", title: "№8", value: 60, minValue: 40, maxValue: 95 }
		];
		return { indicators };
	}


}
