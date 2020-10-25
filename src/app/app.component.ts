import { Component, OnInit } from '@angular/core';
import { FrontendDataService } from './shared/frontendData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(private frontendDataService: FrontendDataService) {}
  ngOnInit() {
    // this.frontendDataService.onFetchData();
  }

  onFetchingData() {
    // this.frontendDataService.onFetchData();
  }
}
