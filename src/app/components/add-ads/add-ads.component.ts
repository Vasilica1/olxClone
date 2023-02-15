import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-ads',
  templateUrl: './add-ads.component.html',
  styleUrls: ['./add-ads.component.css']
})
export class AddAdsComponent {
  @ViewChild('f')
  formAd!: NgForm;
  myEmail: string = "vasilica.cernovschi@student.usv.ro";
  myTelephoneNumber: string = "0748898178";
  title1: string = '';

  onSubmit() {
    console.log(this.formAd);
  }
}
