import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-briefcase-icon',
  imports: [NgClass],
  templateUrl: './todolist-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListIconComponent {
  svgClass = input<string>('');
}
