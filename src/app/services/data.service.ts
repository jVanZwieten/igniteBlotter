import { Injectable } from '@angular/core';

declare function require(url: string);
const mockupData = require('../data/mockupData.json');

@Injectable()
export class DataService {
    public getData():any {
        return mockupData;
    }
}
