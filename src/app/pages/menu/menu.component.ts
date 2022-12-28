import { Component, OnInit } from '@angular/core';
import { GoService } from 'src/app/services/go.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  data_program : any = []
  data_layanan : any = []
  data_kategori_news : any = []

  event_categories : any = []

  urls = this.go.urls

  banners : any = []
  constructor(private go : GoService) { 
    this.getProgram()
    this.getLayanan()
    this.getKategoriNews()
    this.getEventCategories()
  }

  getEventCategories(){
    this.go.HTTP.get('event/categories')
    .subscribe((res : any)=>{
      this.event_categories = res
    })
  }


  getKategoriNews(){
    this.go.HTTP.get('news/kategori')
    .subscribe((res : any)=>{
      this.data_kategori_news = res
    })
  }

  getProgram(){
    this.go.HTTP.get('program/with-short')
    .subscribe((res : any)=>{
      this.data_program =res
    })
  }

  getLayanan(){
    this.go.HTTP.get('layanan/with-short')
    .subscribe((res : any)=>{
      this.data_layanan = res
    })
  }

  titleToUrl(title){
    return this.go.titleToUrl(title)
  }

  getLink(item){
    return '/berita/baca/'+ item.id + '/'+ this.go.titleToUrl(item.title)
  }


  ngOnInit(): void {
  }

}
