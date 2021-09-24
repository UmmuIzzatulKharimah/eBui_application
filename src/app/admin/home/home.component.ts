import { Component, OnInit } from '@angular/core';


export interface Element1 {
  news: string;
  date: string;
  source: string;
  views: number;
}

export interface Element2 {
  topic: string;
  symbol: string;
}

const ELEMENT_DATA_1: Element1[] = [
  {news: 'Banjir Batu Bara Berdampak Ratusan Hektar PT Perkebunan Sejahtera', date: '16 Agustus', source: 'Kompas', views: 12.250},
  {news: 'Demonstran Menghadiri Demo di Kantor Gubernur', date: '26 Agustus', source: 'Detik.com', views: 4.129},
  {news: 'Bansos Baru Sebagian Diterima Masyarakat', date: '30 Agustus', source: 'iNews', views: 14.550},
  {news: 'Vaksin Dosis 2 Telah Disuntikan Lebih Dari 12 Juta Dosis', date: '1 September', source: 'MetroTv', views: 3.650},
];

const ELEMENT_DATA_2: Element2[] = [
  {topic: 'Koruptor', symbol: 'corrupt'},
  {topic: 'Bansos', symbol: 'corrupt'},
  {topic: 'FSBI', symbol: 'corrupt'},
];
 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fitur:any=
  {
   icon : 'topic'
  }

  displayedColumns1: string[] = ['news', 'date', 'source', 'views'];
  dataSource1 = ELEMENT_DATA_1;

  displayedColumns2: string[] = ['topic', 'symbol'];
  dataSource2 = ELEMENT_DATA_2;

  //histogram 
  public chartType1: string = 'bar';

  public chartDatasets1: Array<any> = [
    { data: [6, 4, 1, 5, 4, 6, 3, 5.5, 5, 5, 5.5, 4, 0,7], label: 'My First dataset' }
  ];

  public chartLabels1: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  public chartColors1: Array<any> = [
    {
      backgroundColor: [
        '#5885EA',
        '#5885EA',
        '#5885EA',
        '#5885EA',
        '#5885EA',
        '#5885EA',
        '#5885EA',
        '#5885EA',
        '#5885EA',
        '#5885EA',
        '#5885EA',
        '#5885EA'
      ],
      
      hoverBackgroundColor: [
        '#5885EA',
        '#5885EA',
        '#5885EA',
        '#5885EA',
        '#5885EA',
        '#5885EA',
        '#5885EA',
        '#5885EA',
        '#5885EA',
        '#5885EA',
        '#5885EA',
        '#5885EA'
      ],
      borderWidth: 2,
    }
  ];

  // doughnut chart
  public chartType: string = 'doughnut';

  public chartDatasets: Array<any> = [
    { data: [300, 500, 100], label: 'My First dataset' }
  ];

  public chartLabels: Array<any> = ['Compass', 'Okezone', 'Trans89'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#0F123F', '#EFEFEF'],
      hoverBackgroundColor: ['#F7464A', '#0F123F', '#EFEFEF'],
      borderWidth: 2,
    }
  ];

  

  constructor() { }

  ngOnInit(): void {
  }

  

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
