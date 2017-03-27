import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'avo-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, OnChanges {

  @ViewChild('container') private chartContainer: ElementRef;

  @Input() data: any[];

  /**Size Option*/
  @Input() responsive = true;
  @Input() chartHeight;
  @Input() chartWidth;
  @Input() margin = {top: 20, right: 20, bottom: 60, left: 40};
  @Input() showGrid= true;
  @Input() showXAxis= true;
  @Input() showYAxis = true;
  @Input() showMShadows = true;

  /**Grid Default Parameters*/
  @Input() showXGrid = true;
  @Input() XGridOpacity = 0.2;
  @Input() XGridColor= '#000';
  @Input() showYGrid = true;
  @Input() YGridOpacity = 0.2;
  @Input() YGridColor = '#000';
  @Input() showBorders = false;
  @Input() bordersOpacity = 0.2;

  /**Shadows*/
  @Input() zLevel = 1;
  @Input() zEndLevel = 15;

  /**Axises*/
  @Input() XAxisOpacity = 1;
  @Input() YAxisOpacity = 1;
  @Input() tickPadding = 10;

  private width;
  private height;
  private containerWidth;
  private containerHeight;
  private chart;
  private svg;
  private xScale;
  private yScale;
  private colors;
  private colorScheme;
  private line = true;

  constructor() { }

  ngOnInit() {
    this.genChart();
  }

  genChart() {
    const container = this.chartContainer.nativeElement;
    if (this.responsive === true) {
      this.width = container.offsetWidth;
      this.height = container.offsetHeight;
    } else {
      this.width = this.chartWidth;
      this.height = this.chartHeight;
    }
    this.containerWidth = this.width - this.margin.left - this.margin.right;
    this.containerHeight = this.height - this.margin.top - this.margin.bottom;
    const avoLineChart = d3.select(container);
    this.svg = avoLineChart.append('svg')
      .attr('width', this.width)
      .attr('height', this.height);
    this.colors = ['#EF9A9A', '#9FA8DA', '#880E4F', '#2196F3', '#009688'];
    const xDomain = d3.extent(this.data, d => d.date);
    const yDomain = [0, d3.max(this.data, d => d.value)];
    this.colorScheme = d3.scaleOrdinal()
      .range(this.colors);
    this.xScale = d3.scaleTime()
      .domain(xDomain)
      .range([0, this.containerWidth]);
    this.yScale = d3.scaleLinear()
      .domain(yDomain)
      .range([this.containerHeight, 0]);
  }

  ngOnChanges() {
    this.uptChart();
  }

  uptChart() {
    const xDomain = d3.extent(this.data, d => d.date);
    const yDomain = [0, d3.max(this.data, d => d.value)];
    this.xScale = d3.scaleTime()
      .domain(xDomain)
      .range([0, this.containerWidth]);
    this.yScale = d3.scaleLinear()
      .domain(yDomain)
      .range([this.containerHeight, 0]);
  }

}
