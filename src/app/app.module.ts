import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SparklineComponent } from './custom-charts/sparkline/sparkline.component';
import { TimelineFilterBarChartComponent } from './custom-charts/timeline-filter-bar-chart/timeline-filter-bar-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ComboChartComponent, ComboSeriesVerticalComponent } from './custom-charts/combo-chart';
import { BubbleChartInteractiveModule } from './custom-charts/bubble-chart-interactive';
import { FormsModule } from '@angular/forms';
import { NgxUIModule } from '@swimlane/ngx-ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SparklineComponent,
    TimelineFilterBarChartComponent,
    ComboChartComponent,
    ComboSeriesVerticalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BubbleChartInteractiveModule,
    FormsModule,
    NgxUIModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
