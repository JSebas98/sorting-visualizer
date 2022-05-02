import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { Step } from 'src/app/shared/models/types';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() steps: Step[] = [];
  @Input() initialStep: number[] = [];
  options: EChartsOption = {};
  updateOptions: EChartsOption={};

  constructor() { }

  ngOnInit(): void {
    this.options = this.setOptions();
  }

  ngOnChanges():void {
    this.options = this.setOptions();
  }

  startAnimation():void {
    let index: number = 0;
    let timer = setInterval(() => {
      if(index === this.steps.length-1) {
        this.updateOptions = {
          series: [
            {
              data: []
            },
            {
              data: this.steps[index].status
            }
          ]
        };
      } else {
        this.updateOptions = {
          series: [
            {
              data: this.getData(this.steps[index])[1]
            },
            {
              data: this.getData(this.steps[index])[0],
            }
          ]
        };
      }      
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
      series: [    
        {
          name: 'fixed',
          type: 'bar',
          stack: '1',
          data: this.initialStep,
          label: {
            show: true,
            position: 'top'
          },
          itemStyle:{
            color: '#13928C'
          },
          animation: false
        },
        {
          name: 'swaped',
          type: 'bar',
          stack: '1',
          data: [],
          label: {
            show: true,
            position: 'top'
          },
          itemStyle:{
            color: '#0D2C53'
          },
          animation: false
        }
      ]
    };
  }

  getData(step: Step): (string|number)[][] {
    let swaped:(string|number)[] = step.status.reduce((acc:(string|number)[], curr, index) => {
      index === step.pointer || index === step.comparedElement ? acc.push(curr) : acc.push('-');
      return acc;
    }, []);
    let fixed:(string|number)[] = step.status.reduce((acc:(string|number)[], curr, index) => {
      index !== step.pointer && index !== step.comparedElement ? acc.push(curr) : acc.push('-');
      return acc;
    }, []);
    return [swaped, fixed];
  }

}



