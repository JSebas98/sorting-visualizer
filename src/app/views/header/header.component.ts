import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedOption = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  selectOption(option: number) {
    switch(option) { 
      case 1: {
        this.selectedOption.emit(option);
        break; 
      } 
      case 2: { 
        this.selectedOption.emit(option);
        break; 
      }
      case 3: { 
        this.selectedOption.emit(option);
        break; 
      } 
      case 4: { 
        this.selectedOption.emit(option);
        break; 
      }  
      default: { 
        this.selectedOption.emit(0);
        break; 
      } 
   } 
  }
}
