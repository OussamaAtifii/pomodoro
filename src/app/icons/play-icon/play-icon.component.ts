import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-play-icon',
  imports: [NgClass],
  templateUrl: './play-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayIconComponent {
  svgClass = input<string>('');
}
