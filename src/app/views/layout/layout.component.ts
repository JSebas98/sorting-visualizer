import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from '../chart/chart.component';
import { BubbleSorting } from '../../shared/services/bubble.service';
import { InsertionSorting } from '../../shared/services/insertion.service';
import { MergeSorting } from '../../shared/services/merge.service';
import { QuickSorting } from '../../shared/services/quick.service';
import { RawArray } from '../../shared/models/arrays.model';
import { QuickStep, Step } from '../../shared/models/types';

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

  initialArray: number[]; 
  steps: Step[] | QuickStep[];
  currentService: any;

  constructor(
    private bubbleService: BubbleSorting,
    private insertionService: InsertionSorting,
    private mergeService: MergeSorting,
    private quickService: QuickSorting
  ) {
    this.sliderValue = 'small';
    this.selectedAlgorithm = 'BubbleSort';
    this.initialArray = new RawArray(this.sliderValue).generateArray();
    this.bubbleService.bubbleSortArray(this.initialArray.slice());
    this.steps = this.bubbleService.steps;
  }

  ngOnInit(): void {
  }

  onSelected(option: number): void {
    switch(option) { 
      case 1: {
        this.selectedAlgorithm = 'BubbleSort';
        this.initialArray = new RawArray(this.sliderValue).generateArray();
        break; 
      } 
      case 2: { 
        this.selectedAlgorithm = 'InsertionSort';
        this.initialArray = new RawArray(this.sliderValue).generateArray();
        break; 
      }
      case 3: { 
        this.selectedAlgorithm = 'MergeSort';
        this.initialArray = new RawArray(this.sliderValue).generateArray();
        break; 
      } 
      case 4: { 
        this.selectedAlgorithm = 'QuickSort';
        this.initialArray = new RawArray(this.sliderValue).generateArray();
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
    this.initialArray = new RawArray(this.sliderValue).generateArray();
    return this.sliderValue;
  }

  animation() {
    this.calculateSteps();
    this.chart.startAnimation();
  }

  shuffleArray() {
    this.initialArray = new RawArray(this.sliderValue).generateArray();
  }

  formatValue(value: number) {
    value === 0 ? value=10 : value = value;
    return value;
  }

  calculateSteps() {
    if(this.selectedAlgorithm === 'BubbleSort'){
      this.bubbleService.bubbleSortArray(this.initialArray.slice());
      this.steps = this.bubbleService.steps;
    }
    if(this.selectedAlgorithm === 'InsertionSort') {
      this.insertionService.insertionSortArray(this.initialArray.slice());
      this.steps = this.insertionService.steps;
    }
    if (this.selectedAlgorithm === 'MergeSort') {
      this.mergeService.steps = [];
      this.mergeService.stepsCounter = 0;
      this.mergeService.mergeSortArray(this.initialArray.slice());
      this.steps = this.mergeService.steps;
      console.log(this.steps);
    }
    if(this.selectedAlgorithm === 'QuickSort') {
      this.quickService.steps = [];
      this.quickService.stepsCounter = 0;
      this.quickService.quickSortArray(this.initialArray.slice());
      this.steps = this.quickService.steps;
    } 
  }
}