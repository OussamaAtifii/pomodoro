import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { PomodoroStore } from '@store/pomodoro-store';
import { getPhaseColor, getPhaseTimeLeft } from '@utils/store-helpers';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent {
  readonly store = inject(PomodoroStore);
  radius = signal<number>(10);

  circumference = computed(() => {
    return 2 * Math.PI * this.radius();
  });

  strokeDashOffset = computed(() => {
    const timeLeft = this.store.timeLeft();
    const fraction = timeLeft / getPhaseTimeLeft(this.store.phase());
    return this.circumference() * (1 - fraction);
  });

  phaseColor = computed(() => {
    return getPhaseColor(this.store.phase());
  });
}
