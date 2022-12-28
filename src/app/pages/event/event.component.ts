import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoService } from '../../services/go.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  urls = this.go.urls
  events : any = []
  filter = 1
  isLoading = false
  data_kategori : any = []

  param = {
    kategori : 1,
    nama_kategori : ''
  }
 
  constructor(private go : GoService, private activatedRoute : ActivatedRoute) { 
    this.activatedRoute.params.subscribe(param=>{
      if(param.kategori){
        this.param.kategori = param.kategori
        this.param.nama_kategori = param.nama_kagetori
      }

      this.getEvents()
    })
    

    this.go.HTTP.get('event/categories')
    .subscribe((res: any) => {
      this.data_kategori = res
    })
  }

  doEncode(url){
    return encodeURI(url);
  }

  getEvents(){
    this.isLoading = true
    this.go.HTTP.post('event/filter?kategori=' + this.param.kategori, {filter : this.filter})
    .subscribe((res : any)=>{
      this.events = res
      this.isLoading = false
    })
  }

  titleToUrl(title){
    return this.go.titleToUrl(title)
  } 

  doFilter(filter){
    this.filter = filter
    this.getEvents()
  }

  ngOnInit(): void {
  }

}
