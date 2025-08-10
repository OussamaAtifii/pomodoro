import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-pause-icon',
  imports: [NgClass],
  templateUrl: './pause-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PauseIconComponent {
  svgClass = input<string>('');
}
