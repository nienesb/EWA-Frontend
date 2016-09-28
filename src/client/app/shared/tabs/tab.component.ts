import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sd-tab',
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `
})
export class TabComponent {
  @Input() title: string;
  @Input() active = false;
  @Output() present: EventEmitter<any> = new EventEmitter(true);
}
