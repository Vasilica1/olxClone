import { Component } from '@angular/core';
import { AdDetails } from 'src/app/shared/ad-details.model';
import { PostsService } from 'src/app/shared/services/postsService/posts.service';

@Component({
  selector: 'app-card-ad',
  templateUrl: './card-ad.component.html',
  styleUrls: ['./card-ad.component.css']
})
export class CardAdComponent {
  saveAdInformation: AdDetails [] = [];
  img: string = 'https://frankfurt.apollo.olxcdn.com/v1/files/68ozeijgi5t33-RO/image;s=644x461';

  constructor(private postService: PostsService) {}

  ngOnInit() {
    this.postService.fetchPosts().subscribe(postData => {
      this.saveAdInformation = postData.posts;
      console.log(this.saveAdInformation);
    });

  }
}
