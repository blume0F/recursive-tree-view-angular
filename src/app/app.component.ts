import { Component } from '@angular/core';
import { NODES } from './tree-view/tree-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tree = NODES;
  selectedNode : any;

  nodeSelected(event){
    this.selectedNode = event.name;
  }
}
