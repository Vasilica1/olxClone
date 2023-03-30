import { Component, OnInit } from '@angular/core';
import { PhotoServiceService } from 'src/app/shared/services/photo-service/photo-service.service';

@Component({
  selector: 'app-galleria',
  templateUrl: './galleria.component.html',
  styleUrls: ['./galleria.component.css']
})
export class GalleriaComponent implements OnInit {
  images!: any[];

  constructor(private photoService: PhotoServiceService){}

  ngOnInit() {
    this.photoService.getImages().then(images => {
      this.images = images;
      console.log(this.images);
    });
  }
}
