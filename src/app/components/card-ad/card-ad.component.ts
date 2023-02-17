import { Component } from '@angular/core';
import { AdDetails } from 'src/app/shared/ad-details.model';
import { PostsService } from 'src/app/shared/posts.service';

@Component({
  selector: 'app-card-ad',
  templateUrl: './card-ad.component.html',
  styleUrls: ['./card-ad.component.css']
})
export class CardAdComponent {
  data: any[] = [];
  saveAdInformation: any [] = [];
  img: string = 'https://frankfurt.apollo.olxcdn.com/v1/files/68ozeijgi5t33-RO/image;s=644x461';

  nameDeclaration: string = "ad-1";

  constructor(private postService: PostsService) {}

  ngOnInit() {
    this.data = [
      {
        description: "Cablu troliu otel 6x25 11mm inima metalica batut 80m/rola",
        image: "https://frankfurt.apollo.olxcdn.com/v1/files/68ozeijgi5t33-RO/image;s=644x461",
        location: "Suceava - 4 feb",
        price: "4300 lei"
      },
      {
        description: "Duba cu sofer de inchiriat/Transport b",
        image: "https://frankfurt.apollo.olxcdn.com/v1/files/7ikw075905ds2-RO/image;s=644x461",
        location: "Bucuresti, Sectorul 3 Azi 11:56",
        price: "24 lei"
      },
      {
        description: "Disc Kuhn discover xm 40/660",
        image: "https://frankfurt.apollo.olxcdn.com/v1/files/17bwhy5ggjqo-RO/image;s=644x461",
        location: "Madaras Ieri 01:55",
        price: "13 566 lei"
      },
    ]

    this.postService.fetchPosts().subscribe(posts => {
      this.data = posts;
      for(var key of this.data) {
        this.saveAdInformation.push(key[this.nameDeclaration]) ;
      }
       console.log(this.saveAdInformation);
    });



  }
}
