import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './views/header/header.component';
import { LayoutComponent } from './views/layout/layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { ChartComponent } from './views/chart/chart.component';
import { BubbleSorting } from './shared/services/bubble.service';
import { MergeSorting } from './shared/services/merge.service';
import { InsertionSorting } from './shared/services/insertion.service';
import { QuickSorting } from './shared/services/quick.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    NoopAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSliderModule
  ],
  providers: [
    BubbleSorting,
    InsertionSorting,
    MergeSorting,
    QuickSorting
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
