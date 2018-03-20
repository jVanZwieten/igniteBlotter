import { Injectable } from '@angular/core';

import { WikiPriceData } from '../models/wikiPriceData'

declare function require(url: string);
const mockupData = require('../data/mockupData.json');
const wikiPricesData: WikiPriceData[] = require('../data/wikiPrices.json').map(toWikiPrice)

function toWikiPrice(record): WikiPriceData {
    const wikiPrice = new WikiPriceData(record)
    wikiPrice.TimeStamp = new Date(record.TimeStamp)
    return wikiPrice
}

@Injectable()
export class DataService {
    public getMockupData(): any[] {
        return mockupData;
    }

    public getInitialWikiPrices(): WikiPriceData[] {
        return wikiPricesData.filter(record => sameDate(record.TimeStamp, new Date('1-1-2018')))

        function sameDate(date1: Date, date2: Date): boolean {
            const sameDay = date1.getDate() === date2.getDate()
            const sameMonth = date1.getMonth() === date2.getMonth()
            return sameDay && sameMonth
        }
    }

    public getNextWikiPrice(ticker: string, previousDate: Date): WikiPriceData {
        let tickerData = wikiPricesData.filter(record => record.Ticker === ticker)
        let nextPrices = tickerData.filter(record => record.TimeStamp > previousDate).sort((i1, i2) => i1.TimeStamp.getTime() - i2.TimeStamp.getTime())
        return nextPrices.length > 0 ? nextPrices[0] : tickerData.filter(record => record.TimeStamp === previousDate)[0]
    }
}
