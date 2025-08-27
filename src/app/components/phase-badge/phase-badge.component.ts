import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodoListIconComponent } from '@icons/briefcase-icon/todolist-icon.component';
import { CoffeeIconComponent } from '@icons/coffee-icon/coffee-icon.component';
import { MoonIconComponent } from '@icons/moon-icon/moon-icon.component';
import { PomodoroStore } from '@store/pomodoro-store';

@Component({
  selector: 'app-phase-badge',
  imports: [TodoListIconComponent, CoffeeIconComponent, MoonIconComponent],
  templateUrl: './phase-badge.component.html',
  styleUrl: './phase-badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhaseBadgeComponent {
  readonly store = inject(PomodoroStore);
}
