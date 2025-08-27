import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-moon-icon',
  imports: [NgClass],
  templateUrl: './moon-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoonIconComponent {
  svgClass = input<string>('');
}
