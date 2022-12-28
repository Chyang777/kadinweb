import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoService } from '../../services/go.service';

@Component({
  selector: 'app-berita',
  templateUrl: './berita.component.html',
  styleUrls: ['./berita.component.scss']
})
export class BeritaComponent implements OnInit {
  news : any = []
  bigNews : any = []
  days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
  urls = this.go.urls
  param = {
    kategori : 1,
    nama_kagetori : ''
  }

  data_kategori : any = []
  constructor(private go : GoService, private activatedRoute : ActivatedRoute) { 
    this.activatedRoute.params.subscribe(param=>{
      if(param.kategori){
        this.param.kategori = param.kategori
        this.param.nama_kagetori = param.nama_kagetori
      }

      this.getNews()
    })
    
    this.go.HTTP.get('news/kategori')
    .subscribe((res : any)=>{
      this.data_kategori = res
    })
  }

  getDay(date){
    let dt = new Date(date)
    return this.days[dt.getDay()]
  }

  getNews(){
    this.go.HTTP.get('news?kategori=' + this.param.kategori)
    .subscribe((res : any)=>{
      for(let item of res){
        item.link = '/berita/baca/' + item.id + '/' + this.go.titleToUrl(item.title)
      }
      this.bigNews = []
      this.news = []
      if(res.length>0){
        this.bigNews = [res[0]]
        this.news = res.splice(1, res.length-1)
      }
    })
  }

  titleToUrl(title){
    return this.go.titleToUrl(title)
  }

  ngOnInit(): void {
  }

}
