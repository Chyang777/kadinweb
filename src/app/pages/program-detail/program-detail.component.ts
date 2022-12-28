import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoService } from 'src/app/services/go.service';

@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.scss']
})
export class ProgramDetailComponent implements OnInit {
  data_program : any = []
  program : any = {}
  kabar_program : any = []
  urls = this.go.urls
  constructor(private go : GoService, private activatedRoute : ActivatedRoute) { 
    this.getAllProgram()

    this.activatedRoute.params.subscribe(param=>{
      if(param.id){
        this.go.HTTP.get('program/detail/'+ param.id)
        .subscribe((res : any)=>{
          this.program = res
        })
      }
    })

    this.getKabarProgram()
  }

  getKabarProgram(){
    this.go.HTTP.get('news/new-top-5?id_kategori=5')
    .subscribe((res : any)=>{
      this.kabar_program = res
    })
  }

  getAllProgram(){
    this.go.HTTP.get('program/with-short')
    .subscribe((res : any)=>{
      this.data_program = res
    })
  }

  getLink(item){
    return '/program/'+ item.id + '/' + this.go.titleToUrl(item.title)
  }

  changeTitleToUrl(title){
    return this.go.titleToUrl(title)
  }

  ngOnInit(): void {
  }

}
