import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayCardComponent } from './display-card/display-card.component';
import { SelectionComponent } from './selection/selection.component';
import { HttpClientModule } from '@angular/common/http';
import { ReportService } from './report.service';


@NgModule({
  declarations: [
    AppComponent,
    DisplayCardComponent,
    SelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
