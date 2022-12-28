import { Component, OnInit } from '@angular/core';
import { GoService } from 'src/app/services/go.service';

@Component({
  selector: 'app-header-new',
  templateUrl: './header-new.component.html',
  styleUrls: ['./header-new.component.scss']
})
export class HeaderNewComponent implements OnInit {
  data_program : any = []
  data_layanan : any = []
  data_kategori_news : any = []
  kabar_utama : any = []
  kabar_layanan : any = []
  kabar_program : any = []
  data_events : any = []

  event_categories : any = []

  urls = this.go.urls

  banners : any = []
  constructor(private go : GoService) { 
    this.getProgram()
    this.getLayanan()
    this.getKategoriNews()
    this.getKabarUtama()
    this.getKabarLayanan()
    this.getKabarProgram()
    this.getBanner()
    this.getEventCategories()
    this.getEvent()
  }

  getEventCategories(){
    this.go.HTTP.get('event/categories')
    .subscribe((res : any)=>{
      this.event_categories = res
    })
  }

  getEvent(){
    this.go.HTTP.get('event/home')
    .subscribe((res : any)=>{
      this.data_events = res;
    })
  }


  getBanner(){
    this.go.HTTP.get('banner')
    .subscribe((res : any)=>{
      this.banners = res
    })
  }

  getKabarUtama(){
    this.go.HTTP.get('news/new-top-5?id_kategori=1')
    .subscribe((res : any)=>{
      this.kabar_utama = res
    })
  }

  getKabarProgram(){
    this.go.HTTP.get('news/new-top-5?id_kategori=5')
    .subscribe((res : any)=>{
      this.kabar_program = res
    })
  }

  getKabarLayanan(){
    this.go.HTTP.get('news/new-top-5?id_kategori=6')
    .subscribe((res : any)=>{
      this.kabar_layanan = res
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

  changeTitleToUrl(title){
    return this.go.titleToUrl(title)
  }

  getLink(item){
    return '/berita/baca/'+ item.id + '/'+ this.go.titleToUrl(item.title)
  }


  ngOnInit(): void {
  }

}
