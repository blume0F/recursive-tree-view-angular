import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css'],
})
export class TreeViewComponent {
  @Input() tree: any;
  @Output() selectedValue = new EventEmitter<any>();

  ngOnInit() {
    this.setAllToFalse(this.tree);
  }

  setAllToFalse(nodes) {
    for (let child of nodes) {
      child.active = false;
      if (
        child.children &&
        Array.isArray(child.children) &&
        child.children.length > 0
      )
        this.setAllToFalse(child.children);
    }
  }

  toggleChild(node) {
    this.selectedValue.emit(node);
    node.showChildren = !node.showChildren;
    node.isOpen = !node.isOpen;
  }

  /* Events are not bubbled up so emitting the parent event on <app-tree>
   * when one of the child emits an event - this will create a new EventEmitter per child.
   */
  emitOnChildClicked(node) {
    this.selectedValue.emit(node);
    this.setAllToFalse(this.tree);
    node.active = true;
  }

  applyStyle(node) {
    this.setAllToFalse(this.tree);
    node.active = true;
  }
}
