import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AdDetails } from '../../ad-details.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  createAndStoreAds( details: AdDetails) {
    const informationAd = details;
    this.http.post<{message: string}>(
      'http://localhost:3000/api/posts', 
      informationAd
    ).subscribe(responseData => {
      console.log(responseData.message);
    })
  }

  fetchPosts(): Observable<{message: string, posts: any}> {
    return this.http.get<{message: string, posts: any}>('http://localhost:3000/api/posts');
  }
}
