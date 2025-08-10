import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-reset-icon',
  imports: [NgClass],
  templateUrl: './reset-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetIconComponent {
  svgClass = input<string>('');
}
