import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineComponent } from './line/line.component';
import { BarComponent } from './bar/bar.component';
import { GridComponent } from './grid/grid.component';
import { XAxisComponent } from './x-axis/x-axis.component';
import { YAxisComponent } from './y-axis/y-axis.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LineComponent,
    BarComponent,
    GridComponent,
    XAxisComponent,
    YAxisComponent
  ],
  exports: [
    LineComponent,
    BarComponent,
    GridComponent,
    XAxisComponent,
    YAxisComponent
  ]
})
export class ChartBuildersModule { }
