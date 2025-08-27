import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-maximize-icon',
  imports: [NgClass],
  templateUrl: './maximize-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaximizeIconComponent {
  svgClass = input<string>('');
}
