import {Component, Input, OnInit} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'avo-y-axis',
  template: `    
  `,
  styles: []
})
export class YAxisComponent implements OnInit {

  @Input() svg;
  @Input() margin;
  @Input() yScale;
  @Input() height;
  @Input() YAxisOpacity;
  @Input() tickPadding;

  private yAxis;

  constructor() {
  }

  ngOnInit() {
    this.genYAxis();
  }

  genYAxis() {
    this.yAxis = this.svg.append('g')
      .attr('class', 'axis axis-y')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)
      .call(d3.axisLeft(this.yScale).ticks(Math.max(this.height / 50, 2)).tickSize(0).tickPadding(this.tickPadding));
    this.yAxis.selectAll('path')
      .style('stroke', '#000')
      .style('stroke-opacity', this.YAxisOpacity)
      .style('shape-rendering', 'crispEdges');
  }
}
