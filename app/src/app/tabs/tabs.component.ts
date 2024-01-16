import { Component, Input,  Output, EventEmitter } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [TabViewModule, CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
@Input() generos:any;
@Input() generoSelect:string="ALL"
@Output() generoSeleccionado = new EventEmitter<string>();


seleccionarGenero(value: string) {
  this.generoSelect = value;
console.log(value);

  this.generoSeleccionado.emit(value);
}
}
