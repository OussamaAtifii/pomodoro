import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-briefcase-icon',
  imports: [NgClass],
  templateUrl: './briefcase-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BriefcaseIconComponent {
  svgClass = input<string>('');
}
