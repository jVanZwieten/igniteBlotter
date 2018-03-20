import { WikiPriceData } from "./wikiPriceData";

export class CellData {
    constructor(initialState: WikiPriceData) {
        this.Ticker = initialState.Ticker
        this.TimeStamp = initialState.TimeStamp
        this.Open = new ChangingNumber(initialState.Open)
        this.High = new ChangingNumber(initialState.High)
        this.Low = new ChangingNumber(initialState.Low)
        this.Close = new ChangingNumber(initialState.Close)
        this.Volume = new ChangingNumber(initialState.Volume)
        this.AdjustedOpen = new ChangingNumber(initialState.AdjustedOpen)
        this.AdjustedHigh = new ChangingNumber(initialState.AdjustedHigh)
        this.AdjustedLow = new ChangingNumber(initialState.AdjustedLow)
        this.AdjustedClose = new ChangingNumber(initialState.AdjustedClose)
        this.AdjustedVolume = new ChangingNumber(initialState.AdjustedVolume)
    }

    public Ticker: string
    public TimeStamp: Date
    public Open: ChangingNumber
    public High: ChangingNumber
    public Low: ChangingNumber
    public Close: ChangingNumber
    public Volume: ChangingNumber
    public AdjustedOpen: ChangingNumber
    public AdjustedHigh: ChangingNumber
    public AdjustedLow: ChangingNumber
    public AdjustedClose: ChangingNumber
    public AdjustedVolume: ChangingNumber

    public update(newData: WikiPriceData) {
        this.TimeStamp = newData.TimeStamp
        this.Open.change = newData.Open - this.Open.currentValue
        this.Open.currentValue = newData.Open
        this.High.change = newData.High - this.High.currentValue
        this.High.currentValue = newData.High
        this.Low.change = newData.Low - this.Low.currentValue
        this.Low.currentValue = newData.Low
        this.Close.change = newData.Close - this.Close.currentValue
        this.Close.currentValue = newData.Close
        this.Volume.change = newData.Volume - this.Volume.currentValue
        this.Volume.currentValue = newData.Volume
        this.AdjustedOpen.change = newData.AdjustedOpen - this.AdjustedOpen.currentValue
        this.AdjustedOpen.currentValue = newData.AdjustedOpen
        this.AdjustedHigh.change = newData.AdjustedHigh - this.AdjustedHigh.currentValue
        this.AdjustedHigh.currentValue = newData.AdjustedHigh
        this.AdjustedLow.change = newData.AdjustedLow - this.AdjustedLow.currentValue
        this.AdjustedLow.currentValue = newData.AdjustedLow
        this.AdjustedClose.change = newData.AdjustedClose - this.AdjustedClose.currentValue
        this.AdjustedClose.currentValue = newData.AdjustedClose
        this.AdjustedVolume.change = newData.AdjustedVolume - this.AdjustedVolume.currentValue
        this.AdjustedVolume.currentValue = newData.AdjustedVolume
    }
}

export class ChangingNumber {
    constructor(initialValue: number) {
        this.currentValue = initialValue
        this.change = null
    }

    public currentValue: number
    public change: number
}
