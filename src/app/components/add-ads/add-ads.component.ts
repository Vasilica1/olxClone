import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdDetails } from 'src/app/shared/ad-details.model';
import { PostsService } from 'src/app/shared/services/postsService/posts.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-add-ads',
  templateUrl: './add-ads.component.html',
  styleUrls: ['./add-ads.component.css']
})

export class AddAdsComponent  {
  
  @ViewChild('f')
  formAd!: NgForm;
  myEmail: string = "vasilica.cernovschi@student.usv.ro";
  title1: string = '';
  myTelephoneNumber: string = "0748898178";
  informationAd!: AdDetails;
  subbmited: boolean = false;
  selectedFile!: string;
  imgSrc: string = '../../../assets/v996-009_1-kroir4dk.jpg';
  imageWasChanged: boolean = true;

  constructor(private postService: PostsService, private http: HttpClient, private af: AngularFireStorage) {}

  onFileSelected(event: any) {
    const reader = new FileReader();
    reader.onload = (e:any) => this.imgSrc = e.target.result;
    reader.readAsDataURL(event.target.files[0]);
    this.selectedFile = event.target.files[0];
    this.imageWasChanged = false;
  }

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
    this.postService.createAndStoreAds(this.informationAd);
    this.af.upload("/files" + Math.random()+this.selectedFile, this.selectedFile);
  }
}
