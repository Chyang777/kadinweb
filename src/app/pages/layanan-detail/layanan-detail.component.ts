import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoService } from 'src/app/services/go.service';

@Component({
  selector: 'app-layanan-detail',
  templateUrl: './layanan-detail.component.html',
  styleUrls: ['./layanan-detail.component.scss']
})
export class LayananDetailComponent implements OnInit {
  data_layanan : any = []
  layanan : any = {}
  kabar_layanan : any = []
  urls = this.go.urls
  constructor(private go : GoService, private activatedRoute : ActivatedRoute) { 
    this.getAllLayanan()

    this.activatedRoute.params.subscribe(param=>{
      if(param.id){
        this.go.HTTP.get('layanan/detail/'+ param.id)
        .subscribe((res : any)=>{
          this.layanan = res
        })
      }
    })

    this.getKabarLayanan()

  }

  changeTitleToUrl(title){
    return this.go.titleToUrl(title)
  }


  getKabarLayanan(){
    this.go.HTTP.get('news/new-top-5?id_kategori=6')
    .subscribe((res : any)=>{
      this.kabar_layanan = res
    })
  }

  getAllLayanan(){
    this.go.HTTP.get('layanan/with-short')
    .subscribe((res : any)=>{
      this.data_layanan = res
    })
  }

  getLink(item){
    return '/layanan/'+ item.id + '/' + this.go.titleToUrl(item.title)
  }

  ngOnInit(): void {
  }

}
