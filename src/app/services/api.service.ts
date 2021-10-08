// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {
//   serverUrl='http://localhost:5000/api/v1/'
//   // serverUrl='http://192.168.29.91:5004/api/v1/'

//   constructor(
//     public http: HttpClient
//   ) { }

//   get(url){
//     return this.http.get(this.serverUrl+url);
//   }
//   post(url,data){
// return this.http.post(this.serverUrl+url, data);
//   }
//   put(url, data){
//     return this.http.put(this.serverUrl+url, data);
//   }
//   delete(url){
//     return this.http.delete(this.serverUrl+url);
//   }
  
// }
// ==================================================
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAll(params, url): Observable<any> {
    return this.http.get(baseUrl+url, { params });
  }

  get(id, url): Observable<any> {
    return this.http.get(`${baseUrl+url}/${id}`);
  }

  create(url,data): Observable<any> {
    // return this.http.post(baseUrl, data);
    return this.http.post(baseUrl+url, data);
  }

  update(id, data,url): Observable<any> {
    return this.http.put(`${baseUrl+url}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  // deleteAll(): Observable<any> {
  //   return this.http.delete(baseUrl);
  // }
}
