import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './home/banner/banner.component';
import { BestOFComponent } from './home/best-of/best-of.component';
import { TunisiaBannerComponent } from './home/tunisia-banner/tunisia-banner.component';
import { MapComponent } from './map/map.component';
import { FilltreComponent } from './map/filltre/filltre.component';
import { ResultComponent } from './map/result/result.component';
import { PlaneBannerComponent } from './home/plane-banner/plane-banner.component';
import { ValiseBannerComponent } from './home/valise-banner/valise-banner.component';
import { TailwindComponent } from './tailwind/tailwind.component';
import { FooterComponent } from './footer/footer.component';
import { ProvidingComponent } from './home/providing/providing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    BannerComponent,
    BestOFComponent,
    TunisiaBannerComponent,
    MapComponent,
    FilltreComponent,
    ResultComponent,
    PlaneBannerComponent,
    ValiseBannerComponent,
    TailwindComponent,
    FooterComponent,
    ProvidingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
