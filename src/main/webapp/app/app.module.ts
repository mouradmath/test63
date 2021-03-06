import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Test63SharedModule } from 'app/shared/shared.module';
import { Test63CoreModule } from 'app/core/core.module';
import { Test63AppRoutingModule } from './app-routing.module';
import { Test63HomeModule } from './home/home.module';
import { Test63EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Test63SharedModule,
    Test63CoreModule,
    Test63HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Test63EntityModule,
    Test63AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class Test63AppModule {}
