import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as echarts from 'echarts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { NgxEchartsModule } from 'ngx-echarts';
import {ClipboardModule} from '@angular/cdk/clipboard'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {QRCodeModule} from 'angularx-qrcode'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import {NgxPaginationModule} from 'ngx-pagination';
import { TooltipModule } from 'primeng/tooltip';
import { InputGroupModule } from 'primeng/inputgroup';
import { SearchPipe } from './core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { FileSaverModule } from 'ngx-filesaver';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    CardComponent,
    TableComponent,
    SearchPipe 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({
      echarts
    }),
    ClipboardModule,
    SweetAlert2Module.forRoot(),
    QRCodeModule,
    BrowserAnimationsModule,
    TableModule,
    PaginatorModule,
    ButtonModule,
    NgxPaginationModule,
    TooltipModule,
    InputGroupModule,
    FormsModule,
    FileSaverModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
