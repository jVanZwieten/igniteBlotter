import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from "../services/data.service";

import { IgxGridCellComponent } from 'igniteui-angular/grid/cell.component'

@Component({
  selector: 'app-blotter',
  templateUrl: './blotter.component.html',
  styleUrls: ['./blotter.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlotterComponent implements OnInit {
  public localData: any[];
  title = 'Grid';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.localData = this.dataService.getData();
  }
}
