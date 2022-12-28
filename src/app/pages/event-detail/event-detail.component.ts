import { Component, OnInit } from '@angular/core';
import { GoService } from '../../services/go.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  urls = this.go.urls
  id : any;
  event : any = []
  isLoading = false
  days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']

  now = Date.now()
  constructor(private go : GoService, private activatedRoute : ActivatedRoute) { 
    this.activatedRoute.params.subscribe(param=>{
      if(param.id){
        this.id = param.id
        this.getEvent()
      }
    })
  }

  getTime(date){
    let dt = new Date(date)
    return dt.getTime()
  }

  getHari(date){
    let dt = new Date(date)
    return this.days[dt.getDay()]
  }

  getEvent(){
    this.isLoading = true
    this.go.HTTP.get('event/detail/' + this.id)
    .subscribe((res : any)=>{
      this.event = res;
      this.isLoading = false
    })
  }

  doRegister(gform){
    window.open(gform, '_blank')
  }

  ngOnInit(): void {
  }

}
