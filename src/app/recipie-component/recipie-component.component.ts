import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recipie-component',
  imports: [CommonModule],
  templateUrl: './recipie-component.component.html',
  styleUrl: './recipie-component.component.css'
})
export class RecipieComponentComponent {

   isOpen:boolean=false
  onClick(){

    this.isOpen=!this.isOpen


  }

}
