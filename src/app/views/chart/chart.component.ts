import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { EChartsOption } from 'echarts';
import { QuickStep, Step } from 'src/app/shared/models/types';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() steps: Step[] | QuickStep[] = [];
  @Input() initialStep: number[] = [];
  @Input() delay: number = 1;
  @Output() stop: EventEmitter<boolean> = new EventEmitter<boolean>();
  
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
        this.stop.emit(false);
        this.updateOptions = {
          series: [
            {
              data: []
            },
            {
              data: this.steps[index].status
            },
            {
              data: []
            }
          ]
        };
      } else {
        this.stop.emit(true);
        this.updateOptions = {
          series: [
            {
              data: this.getData(this.steps[index])[1]
            },
            {
              data: this.getData(this.steps[index])[0],
            },
            {
              data: this.getData(this.steps[index])[2]
            }
          ]
        };
      }      
      index < (this.steps.length-1) ? index++ : clearInterval(timer);
    }, this.delay*1000);
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
        },
        {
          name: 'pointer',
          type: 'bar',
          stack: '1',
          data: [],
          label: {
            show: true,
            position: 'top'
          },
          itemStyle:{
            color: '#e6e6e6'
          },
          animation: false
        }
      ]
    };
  }

  getData(step: Step | QuickStep): (string|number)[][] {
    let pointer:(string|number)[] = step.status.reduce((acc:(string|number)[], curr, index) => {
      index === step.index ? acc.push(curr) : acc.push('-');
      return acc;
    }, []); 
    let swaped:(string|number)[] = step.status.reduce((acc:(string|number)[], curr, index) => {
      (index === step.pointer || index === step.comparedElement)  ? acc.push(curr) : acc.push('-');
      return acc;
    }, []);
    let fixed:(string|number)[] = step.status.reduce((acc:(string|number)[], curr, index) => {
      index !== step.pointer && index !== step.comparedElement ? acc.push(curr) : acc.push('-');
      return acc;
    }, []);
    return [swaped, fixed, pointer];
  }

}



