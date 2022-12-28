import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
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

import { HttpClientModule } from '@angular/common/http';
import { VisiMisiComponent } from './pages/visi-misi/visi-misi.component';
import { TentangKamiComponent } from './pages/tentang-kami/tentang-kami.component';
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
import { HeaderNewComponent } from './components/header-new/header-new.component';
import { ProgramComponent } from './pages/program/program.component';
import { ProgramDetailComponent } from './pages/program-detail/program-detail.component';
import { LayananDetailComponent } from './pages/layanan-detail/layanan-detail.component';
import { MenuComponent } from './pages/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    EventComponent,
    EventDetailComponent,
    BeritaComponent,
    BeritaDetailComponent,
    SejarahComponent,
    PersyaratanProsedurComponent,
    PendaftaranOnlineComponent,
    AsosiasiHimpunanComponent,
    AsosiasiTerakreditasiComponent,
    GalleryComponent,
    PublikasiComponent,
    VisiMisiComponent,
    TentangKamiComponent,
    KadipediaComponent,
    AdRtComponent,
    PeraturanPedomanComponent,
    LambangMarsComponent,
    StrukturOrganisasiComponent,
    KebijakanPemerintahComponent,
    RegulasiComponent,
    GalleryDetailComponent,
    CekKeabsahanComponent,
    SekretariatComponent,
    HeaderNewComponent,
    ProgramComponent,
    ProgramDetailComponent,
    LayananDetailComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
