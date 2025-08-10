import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  output,
} from '@angular/core';
import { PauseIconComponent } from '@icons/pause-icon/pause-icon.component';
import { PlayIconComponent } from '@icons/play-icon/play-icon.component';
import { ResetIconComponent } from '@icons/reset-icon/reset-icon.component';
import { PomodoroStore } from '@store/pomodoro-store';

@Component({
  selector: 'app-controls',
  imports: [PlayIconComponent, ResetIconComponent, PauseIconComponent],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlsComponent {
  readonly store = inject(PomodoroStore);

  start = output();
}
