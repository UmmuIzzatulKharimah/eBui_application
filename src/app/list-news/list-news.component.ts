import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Component({
    selector: 'app-list-news',
    templateUrl: './list-news.component.html',
    styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {

    dataNews: Object;

    constructor(private rest: RestApiService) { }

    async ngOnInit() {
    try {
        const data = await this.rest.get(
            'http://localhost:8080/news'
        );
        this.dataNews = data['data'];
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id){     
        await this.rest.delete(
        'http://localhost:8080/news/delete/$[{id}]'
        );
        this.ngOnInit();
    }

}