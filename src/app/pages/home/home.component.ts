import { Component, OnInit } from '@angular/core';
import { GoService } from '../../services/go.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
  news : any = []
  bigNews : any = []
  events : any = []
  urls = this.go.urls

  data_program : any = []

  index_program = 0

  sliders : any = []

  data_layanan : any = []
  banners : any = []
  constructor(private go : GoService) { 
    this.getNews()
    this.getEvent()
    this.getSlider()
    this.getProgram()
    this.getLayanan()
    this.getBanner()
  }

  getBanner(){
    this.go.HTTP.get('banner')
    .subscribe((res : any)=>{
      this.banners =res
    })
  }

  getShortDescProgram(){
    return this.data_program.length>0 ? this.data_program[this.index_program].short_description : ''
  }

  setIndexProgram(index){
    this.index_program = index
  }

  getProgram(){
    this.go.HTTP.get('program/with-short')
    .subscribe((res : any)=>{
      this.data_program = res
    })
  }

  getLayanan(){
    this.go.HTTP.get('layanan/with-short')
    .subscribe((res : any)=>{
      this.data_layanan = res
    })
  }

  getLinkProgram(){
    return this.data_program.length>0 ? '/program/' + this.data_program[this.index_program].id + '/' + this.changeTitleToUrl( this.data_program[this.index_program].title) : ''
  }

  doEncode(url){
    return encodeURI(url);
  }

  getSlider(){
    this.go.HTTP.get('slider/home')
    .subscribe((res : any)=>{
      this.sliders = res
    })
  }

  isLoadingEvent = false
  getEvent(){
    this.isLoadingEvent = true
    this.go.HTTP.get('event/home')
    .subscribe((res : any)=>{
      this.events = res;
      this.isLoadingEvent = false
    })
  }

  getNews(){
    this.go.HTTP.get('news/new-top-5')
    .subscribe((res : any)=>{
        this.bigNews = res
    })
  }

  getDay(date){
    let dt = new Date(date)
    return this.days[dt.getDay()]
  }

  changeTitleToUrl(title){
    return this.go.titleToUrl(title)
  }

  ngOnInit(): void {
  }

}
