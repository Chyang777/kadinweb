import { Component, OnInit } from '@angular/core';
import { GoService } from '../../services/go.service';

@Component({
  selector: 'app-sekretariat',
  templateUrl: './sekretariat.component.html',
  styleUrls: ['./sekretariat.component.scss']
})
export class SekretariatComponent implements OnInit {
  wkus : any = []
  urls = this.go.urls
  constructor(private go : GoService) { 
    this.getData()
  }

  isLoading = true
  getData(){
    this.isLoading = true
    this.go.HTTP.get('tentang-kami/sekretariat')
    .subscribe((res : any)=>{
      this.wkus = res;
      this.isLoading = false
    })
  }

  ngOnInit(): void {
  }

}
