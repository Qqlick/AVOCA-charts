import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartBuildersModule } from '../chart-builders/chart-builders.module';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
  imports: [
    CommonModule,
    ChartBuildersModule
  ],
  declarations: [
    LineChartComponent
  ],
  exports: [
    LineChartComponent
  ]
})
export class AvocaChartsModule { }
