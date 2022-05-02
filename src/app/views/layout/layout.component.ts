import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  @ViewChild(ChartComponent, { static: true })
  chart: ChartComponent = new ChartComponent;

  private sliderValue: ('small'|'medium'|'big');
  selectedAlgorithm: string;

  constructor() {
    this.sliderValue = 'small';
    this.selectedAlgorithm = 'BubbleSort';
  }

  ngOnInit(): void {
  }

  onSelected(option: number): void {
    switch(option) { 
      case 1: {
        this.selectedAlgorithm = 'BubbleSort';
        break; 
      } 
      case 2: { 
        this.selectedAlgorithm = 'InsertionSort';
        break; 
      }
      case 3: { 
        this.selectedAlgorithm = 'MergeSort';
        break; 
      } 
      case 4: { 
        this.selectedAlgorithm = 'QuickSort';
        break; 
      }  
      default: { 
        this.selectedAlgorithm = 'BubbleSort';
        break; 
      } 
    }
  }

  getSliderValue(event: any): string {
    this.sliderValue = event.value === 0 ? 'small' : event.value === 50 ? 'medium' : 'big';
    console.log(this.sliderValue);
    return this.sliderValue;
  }

  animation() {
    console.log('play');
  }

  shuffleArray() {
    console.log('shuffle')
  }

  formatValue(value: number) {
    value === 0 ? value=10 : value = value;
    return value;
  }
}