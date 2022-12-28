import { Component, OnInit } from '@angular/core';
import { GoService } from '../../services/go.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  urls = this.go.urls
  galeries : any = []
  isLoading = false
  days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
  constructor(private go : GoService) { 
    this.getGaleri()
  }

  getHari(date){
    let dt = new Date(date)
    return this.days[dt.getDay()]
  }

  getGaleri(){
    this.isLoading = true
    this.go.HTTP.get('galeri/lists')
    .subscribe((res : any)=>{
      this.galeries = res
      this.isLoading = false
    })
  }
  ngOnInit(): void {
  }

}
