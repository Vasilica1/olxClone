import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs';
import { AdDetails } from 'src/app/shared/ad-details.model';

@Component({
  selector: 'app-add-ads',
  templateUrl: './add-ads.component.html',
  styleUrls: ['./add-ads.component.css']
})
export class AddAdsComponent implements OnInit {
  @ViewChild('f')
  formAd!: NgForm;
  myEmail: string = "vasilica.cernovschi@student.usv.ro";
  myTelephoneNumber: string = "0748898178";
  title1: string = '';
  informationAd!: AdDetails;
  subbmited: boolean = false;
  img: string = '';

  ngOnInit() {
    this.fetchPosts();
  }

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.informationAd = {
      "ad-1": {
        title: this.formAd.value.title,
        category: this.formAd.value.category,
        image: this.formAd.value.file,
        description: this.formAd.value.description,
        location: this.formAd.value.location,
        emailAdreess: this.myEmail,
        telephoneNumber: this.formAd.value.numberTel
      }
    }
    this.subbmited = true;

    // this.formAd.form.patchValue({
    //   title: '',
    //   category: '',
    //   file: '',
    //   description: '',
    //   location: ''
    // })
    
    this.http.post<AdDetails>(
      'https://olxclone-610fc-default-rtdb.firebaseio.com/posts.json', 
      this.informationAd
    ).subscribe(responseData => {
      console.log(responseData);
    })
  }

  fetchPosts() {
  this.http.get<AdDetails>('https://olxclone-610fc-default-rtdb.firebaseio.com/posts.json')
      .pipe(map(responesData => {
        const postsArray = [];
        for(const key in responesData) {
          if(responesData.hasOwnProperty(key)) {
            postsArray.push({ ...responesData[key], id: key});
          }
        }
        return postsArray;
      }))
      .subscribe(posts => {
        console.log(posts);
      });
  }
}
