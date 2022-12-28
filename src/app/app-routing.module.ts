import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EventComponent } from './pages/event/event.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';
import { BeritaComponent } from './pages/berita/berita.component';
import { BeritaDetailComponent } from './pages/berita-detail/berita-detail.component';
import { SejarahComponent } from './pages/sejarah/sejarah.component';
import { PersyaratanProsedurComponent } from './pages/persyaratan-prosedur/persyaratan-prosedur.component';
import { PendaftaranOnlineComponent } from './pages/pendaftaran-online/pendaftaran-online.component';
import { AsosiasiHimpunanComponent } from './pages/asosiasi-himpunan/asosiasi-himpunan.component';
import { AsosiasiTerakreditasiComponent } from './pages/asosiasi-terakreditasi/asosiasi-terakreditasi.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { PublikasiComponent } from './pages/publikasi/publikasi.component';
import { TentangKamiComponent } from './pages/tentang-kami/tentang-kami.component';
import { VisiMisiComponent } from './pages/visi-misi/visi-misi.component';
import { KadipediaComponent } from './pages/kadipedia/kadipedia.component';
import { AdRtComponent } from './pages/ad-rt/ad-rt.component';
import { PeraturanPedomanComponent } from './pages/peraturan-pedoman/peraturan-pedoman.component';
import { LambangMarsComponent } from './pages/lambang-mars/lambang-mars.component';
import { StrukturOrganisasiComponent } from './pages/struktur-organisasi/struktur-organisasi.component';
import { KebijakanPemerintahComponent } from './pages/kebijakan-pemerintah/kebijakan-pemerintah.component';
import { RegulasiComponent } from './pages/regulasi/regulasi.component';
import { GalleryDetailComponent } from './pages/gallery-detail/gallery-detail.component';
import { CekKeabsahanComponent } from './pages/cek-keabsahan/cek-keabsahan.component';
import { SekretariatComponent } from './pages/sekretariat/sekretariat.component';
import { ProgramDetailComponent } from './pages/program-detail/program-detail.component';
import { LayananDetailComponent } from './pages/layanan-detail/layanan-detail.component';
import { MenuComponent } from './pages/menu/menu.component';


const routes: Routes = [
  
  {
    path : 'tentang-kami',
    component : TentangKamiComponent,
    children : [
      {
        path : 'sejarah',
        component : SejarahComponent
      },
      {
        path : 'uu-ad-art',
        component : AdRtComponent
      },
      {
        path : 'peraturan-pedoman',
        component : PeraturanPedomanComponent
      },
      {
        path : 'lambang-mars-hymne',
        component : LambangMarsComponent
      },
      {
        path : 'struktur-organisasi',
        component : StrukturOrganisasiComponent
      },
      {
        path : 'visi-misi',
        component : VisiMisiComponent
      },
      {
        path : 'kadinsupedia',
        component : KadipediaComponent
      },
      {
        path : 'sekretariat',
        component : SekretariatComponent
      }
    ]
  },

  {
    path : 'keanggotaan/persyaratan-prosedur',
    component : PersyaratanProsedurComponent
  },
  {
    path : 'keanggotaan/pendaftaran-online',
    component : PendaftaranOnlineComponent
  },
  {
    path : 'keanggotaan/cek-keabsahan',
    component : CekKeabsahanComponent
  },
  {
    path : 'keanggotaan/asosiasi-himpunan',
    component : AsosiasiHimpunanComponent
  },
  {
    path : 'keanggotaan/asosiasi-terakreditasi',
    component : AsosiasiTerakreditasiComponent
  },

  {
    path : 'program/:id/:title',
    component : ProgramDetailComponent
  },

  {
    path : 'layanan/:id/:title',
    component : LayananDetailComponent
  },

  {
    path : 'event',
    component : EventComponent
  },
  {
    path : 'event/:kategori/:nama_kategori',
    component : EventComponent
  },
  {
    path : 'event-detail/:id',
    component : EventDetailComponent
  },
  {
    path : 'berita/baca/:id/:title',
    component : BeritaDetailComponent
  },
  {
    path : 'berita/:kategori/:nama_kategori',
    component : BeritaComponent
  },
  {
    path : 'berita-detail/:id',
    component : BeritaDetailComponent
  },
  {
    path : 'publikasi',
    component : PublikasiComponent,
    children : [
      {
        path : 'gallery',
        component : GalleryComponent
      },
      {
        path : 'gallery/detail/:id',
        component : GalleryDetailComponent
      },
      {
        path : 'kebijakan-pemerintah',
        component : KebijakanPemerintahComponent
      },
      {
        path : 'regulasi',
        component : RegulasiComponent
      }
    ]
  },
  {
    path : 'menu',
    component : MenuComponent
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : '',
    pathMatch : 'full',
    redirectTo : 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
