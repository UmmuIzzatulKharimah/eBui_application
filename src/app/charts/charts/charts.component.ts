import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Data } from './models/data.model';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  data: Observable<Data>;

  constructor(private http: HttpClient) {
    this.data = this.http.get<Data>('./assets/data.json');
  }

  ngOnInit(): void {
  }

}
