import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoService {
  urls = 'https://api.kadinsumut.id/'
  constructor(private http : HttpClient) { }

  HTTP : any = {
    get : (url)=>{
      return this.http.get(this.urls + url)
    },
    post : (url , data)=>{
      return this.http.post(this.urls + url, data)
    }
  }

  titleToUrl(title){
    let result = title.trim().toLowerCase().replace(/(([\w]+\/){3})([^\/]+)(\/.+)(\/,+)/gm, '')
    result = result.replace(/[,.'"()\/?!]/gi, '')
    return result.replace(/ /gi, '-')
  }
}
