import {Component, Input, OnChanges, OnInit} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'avo-line',
  template: ``,
  styles: []
})
export class LineComponent implements OnInit, OnChanges {

  @Input() data;
  @Input() svg;
  @Input() xScale;
  @Input() yScale;
  @Input() margin;
  @Input() colorScheme;

  constructor() { }

  ngOnInit() {
    this.genLine();
  }

  genLine() {
    const dataGroup = d3.nest()
      .key((d: any) => d.label)
      .entries(this.data);
    const line = d3.line()
      .x((d: any) => this.xScale(d.date))
      .y((d: any) => this.yScale(d.value));
    const svg = this.svg;
    const data = this.data;
    const margin = this.margin;
    const colorScheme = this.colorScheme;
    dataGroup.forEach(function(d, i) {
      svg.append('path')
        .datum(data)
        .attr('class', 'line' + i)
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
        .attr('fill', 'none')
        .attr('stroke', colorScheme(i))
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')
        .attr('stroke-width', 2)
        .attr('d', line(d.values));
    });
  }

  ngOnChanges() {
    this.uptLine();
  }

  uptLine() {
    const line = d3.line()
      .x((d: any) => this.xScale(d.date))
      .y((d: any) => this.yScale(d.value));
    const svg = this.svg;
    const dataGroup = d3.nest()
      .key((d: any) => d.label)
      .entries(this.data);
    dataGroup.forEach(function(d, i) {
      svg.select('.line' + i).transition().duration(500)
        .attr('d', line(d.values));
    });
    const xScale = this.xScale;
    const yScale = this.yScale;
    svg.selectAll('circle').data(this.data).transition().duration(500)
      .attr('cx', (d: any) => xScale(d.date) )
      .attr('cy', (d: any) => yScale(d.value));
  }

}
