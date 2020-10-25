import { Component, OnInit } from '@angular/core';
import { FrontendData } from '../shared/models/frontendData.model';
import { FrontendDataService } from '../shared/frontendData.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  localData: FrontendData[] = [];
  constructor(private frontendDataService: FrontendDataService) {}

  ngOnInit() {
    this.frontendDataService.onFetchData().subscribe((data) => {
      this.localData = data;
      // console.log(this.localData);
    });
  }
}
