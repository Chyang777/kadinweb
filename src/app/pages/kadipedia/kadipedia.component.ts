import { Component, OnInit } from '@angular/core';
import { GoService } from '../../services/go.service';

@Component({
  selector: 'app-kadipedia',
  templateUrl: './kadipedia.component.html',
  styleUrls: ['./kadipedia.component.scss']
})
export class KadipediaComponent implements OnInit {
  wkus : any = []
  urls = this.go.urls
  constructor(private go : GoService) { 
    this.getData()
  }

  getData(){
    this.go.HTTP.get('tentang-kami/kadinsupedia')
    .subscribe((res : any)=>{
      this.wkus = res;
    })
  }

  ngOnInit(): void {
  }

}
