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
    this.http.post<AdDetails>(
      'https://olxclone-610fc-default-rtdb.firebaseio.com/posts.json', 
      informationAd
    ).subscribe(responseData => {
      console.log(responseData);
    })
  }

  fetchPosts(): Observable<any> {
    return this.http.get<AdDetails>('https://olxclone-610fc-default-rtdb.firebaseio.com/posts.json')
      .pipe(map(responesData => {
        const postsArray = [];
        for(const key in responesData) {
          if(responesData.hasOwnProperty(key)) {
            postsArray.push({ ...responesData[key], id: key});
          }
        }
        return postsArray;
      }))
  }
}
