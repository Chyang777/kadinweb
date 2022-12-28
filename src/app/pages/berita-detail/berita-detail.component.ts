import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoService } from 'src/app/services/go.service';

@Component({
  selector: 'app-berita-detail',
  templateUrl: './berita-detail.component.html',
  styleUrls: ['./berita-detail.component.scss']
})
export class BeritaDetailComponent implements OnInit {
  urls = this.go.urls
  news: any = {}
  others: any = []
  days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']

  categories : any = []

  constructor(private go: GoService, private activatedRoutes: ActivatedRoute) {
    this.activatedRoutes.params.subscribe(param => {
      if (param.id) {
        this.getData(param.id)
      }

      this.go.HTTP.get('news/kategori')
        .subscribe((res: any) => {
          this.categories = res
        })
    })
  }

  getDay(date) {
    let dt = new Date(date)
    return this.days[dt.getDay()]
  }

  getData(id) {
    this.go.HTTP.get('news/read/' + id)
      .subscribe((res: any) => {
        this.news = res.news
        this.others = res.others
      })
  }

  getLink(item) {
    return '/berita/baca/' + item.id + '/' + this.go.titleToUrl(item.title)
  }

  titleToUrl(title){
    return this.go.titleToUrl(title)
  } 

  ngOnInit(): void {
  }

}
