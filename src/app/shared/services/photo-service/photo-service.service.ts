import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {

  constructor(private http: HttpClient) {}

  getImages() {
    return this.http.get<any>('assets/photos.json')
      .toPromise()
      .then(res => res.data)
      .then(data => {return data;});
  }
}
