import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-coffee-icon',
  imports: [NgClass],
  templateUrl: './coffee-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoffeeIconComponent {
  svgClass = input<string>('');
}
