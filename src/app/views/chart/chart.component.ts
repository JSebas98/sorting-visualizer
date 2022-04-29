import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() steps: number[][] = []; 
  options: EChartsOption = {};
  updateOptions: EChartsOption={};

  constructor() { }

  ngOnInit(): void {
    this.options = this.setOptions();
    this.startAnimation();
  }

  ngOnChanges():void {
    this.options = this.setOptions();
    this.startAnimation();
  }

  startAnimation():void {
    let index = 0;
    let timer = setInterval(() => {
      this.updateOptions = {
        series: [{
          data: this.steps[index]
        }]
      };
      index < (this.steps.length-1) ? index++ : clearInterval(timer);
    }, 500); 
  }

  setOptions(): EChartsOption{
    return {
      xAxis: {
        type: 'category',
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        axisLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        }
      },
      series: [{
        type: 'bar',
        data: this.steps[0],
        label: {
          show: true,
          position: 'top'
        },
      }]
    };
  }
}
