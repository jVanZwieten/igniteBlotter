import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { DataService } from "../services/data.service";
import { WikiPriceData } from '../models/wikiPriceData'
import { CellData } from '../models/cellData'

import { IgxGridCellComponent } from 'igniteui-angular/grid/cell.component'

@Component({
    selector: 'app-blotter',
    templateUrl: './blotter.component.html',
    styleUrls: ['./blotter.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class BlotterComponent implements OnInit {
    public gridData: CellData[];
    title = 'Grid';
    private timer

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.gridData = this.dataService.getInitialWikiPrices().map(initialState => new CellData(initialState))
        console.log('by your command')
        this.timer = setInterval(() => this.updateGridData(), 1000)

        function toCellData(initialState: WikiPriceData) {
            const cellData = new CellData(initialState)
            return cellData
        }
    }

    updateGridData() {
        for (var i = Math.round(Math.random()*10); i < this.gridData.length; i += Math.round(Math.random() * 10)) {
            let oldData = this.gridData[i]
            let newData = this.dataService.getNextWikiPrice(oldData.Ticker, oldData.TimeStamp)
            this.gridData[i].update(newData)


        }
    }
}
