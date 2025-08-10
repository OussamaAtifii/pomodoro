import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PomodoroStore } from '@store/pomodoro-store';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent {
  readonly store = inject(PomodoroStore);
}
