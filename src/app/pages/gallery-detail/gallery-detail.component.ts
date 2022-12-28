import { Component, OnInit } from '@angular/core';
import { GoService } from '../../services/go.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.scss']
})
export class GalleryDetailComponent implements OnInit {
  urls = this.go.urls
  id : any
  galeries : any = []
  isLoading = true;
  days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
  iszoom = false;
  image = ''
  constructor(private go : GoService, private activatedRoute : ActivatedRoute) { 
    this.activatedRoute.params.subscribe(param=>{
      if(param.id){
        this.id = param.id
        this.getGaleri()
      }
    })
  }

  toZoom(image){
    this.iszoom = true;
    this.image = this.urls + 'images/galeri/' + image
  }

  closeZoom(){
    this.iszoom = false
  }

  getHari(date){
    let dt = new Date(date)
    return this.days[dt.getDay()]
  }

  getGaleri(){
    this.isLoading = true
    this.go.HTTP.get('galeri/detail/' + this.id)
    .subscribe((res : any)=>{
      this.isLoading = false
      this.galeries = res
    }, error=>{
      this.isLoading = false
    })
  }

  ngOnInit(): void {
  }

}
