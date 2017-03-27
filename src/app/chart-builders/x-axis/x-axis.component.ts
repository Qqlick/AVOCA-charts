import {Component, Input, OnInit} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'avo-x-axis',
  template: ``,
  styles: []
})
export class XAxisComponent implements OnInit {

  @Input() data: any[];
  @Input() containerWidth;
  @Input() containerHeight;
  @Input() margin;
  @Input() svg;
  @Input() xScale;
  @Input() width;
  @Input() XAxisOpacity;
  @Input() tickPadding;

  private xAxis;

  constructor() { }

  ngOnInit() {
    this.genXAxis();
  }

  genXAxis() {
    this.xAxis = this.svg.append('g')
      .attr('class', 'axis axis-x')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top + this.containerHeight})`)
      .call(
        d3.axisBottom(this.xScale)
        .ticks(Math.max(this.width / 100, 2))
        .tickPadding(this.tickPadding)
        .tickSize(0)
        .tickFormat(
          d3.timeFormat('%x')
        )
      );
    this.xAxis.selectAll('path')
      .style('stroke', '#000')
      .style('stroke-opacity', this.XAxisOpacity)
      .style('shape-rendering', 'crispEdges');
    this.xAxis.selectAll('text').style('text-anchor', 'center');
  }
}
