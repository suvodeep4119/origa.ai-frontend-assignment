import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { FrontendDataService } from '../shared/frontendData.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  localData = [];
  latgt0 = 0;
  lnggt0 = 0;
  latlt0 = 0;
  lnglt0 = 0;

  constructor(private frontendDataService: FrontendDataService) {}

  ngOnInit() {
    this.frontendDataService.onFetchData().subscribe((data) => {
      this.localData = data;
      // console.log(this.localData);
    });

    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [
          'Latitude > 0',
          'Latitude < 0',
          'Longitude > 0',
          'Longitude < 0',
        ],
        datasets: [
          {
            label: 'latitude longitude bifurcation',
            data: [3, 7, 5, 5],
            backgroundColor: [
              'rgba(224, 14, 10, 0.2)',
              'rgba(10, 220, 224, 0.2)',
              'rgba(224, 120, 10, 0.2)',
              'rgba(118, 117, 116, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
    });
  }
}
