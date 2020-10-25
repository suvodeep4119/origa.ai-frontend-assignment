import { Component, OnInit } from '@angular/core';
import { FrontendData } from '../shared/models/frontendData.model';
import { FrontendDataService } from '../shared/frontendData.service';

@Component({
  selector: 'app-percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.css'],
})
export class PercentageComponent implements OnInit {
  localData: FrontendData[] = [];

  constructor(private frontendDataService: FrontendDataService) {}

  ngOnInit(): void {
    this.frontendDataService.onFetchData().subscribe((data) => {
      this.localData = data;
      // console.log(this.localData);
    });
  }
}
