import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LanguageListComponent } from './language-list/language-list.component';
import { ParadigmListComponent } from './paradigm-list/paradigm-list.component';
import { LanguageAddComponent } from './language-add/language-add.component';
import { ParadigmEditComponent } from './paradigm-edit/paradigm-edit.component';
import { ParadigmAddComponent } from './paradigm-add/paradigm-add.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LanguageListComponent,
    ParadigmListComponent,
    LanguageAddComponent,
    ParadigmEditComponent,
    ParadigmAddComponent
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
