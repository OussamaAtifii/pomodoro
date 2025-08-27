import { Component, effect, inject, signal, ViewChild } from '@angular/core';
import { interval, Subscription, takeWhile } from 'rxjs';
import { AudioPlayerComponent } from '@components/audio-player/audio-player.component';
import { PomodoroStore } from '@store/pomodoro-store';
import { TimerComponent } from '@components/timer/timer.component';
import { ControlsComponent } from '@components/controls/controls.component';
import { Title } from '@angular/platform-browser';
import { PhaseBadgeComponent } from '@components/phase-badge/phase-badge.component';
import { Phase } from '@customTypes/store.types';
import { getNextBreak } from '@utils/store-helpers';

@Component({
  selector: 'app-root',
  imports: [
    AudioPlayerComponent,
    ControlsComponent,
    TimerComponent,
    PhaseBadgeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly store = inject(PomodoroStore);
  readonly title = inject(Title);
  sub = new Subscription();
  @ViewChild(AudioPlayerComponent) audioElement!: AudioPlayerComponent;

  source = interval(1000).pipe(takeWhile(() => this.store.isRunning()));

  constructor() {
    effect(() => {
      if (this.store.timeLeft() === 0) {
        this.audioElement.play();
      }
    });

    effect(() => {
      this.title.setTitle(`${this.store.timer()} - Time to focus!`);
    });
  }

  start() {
    this.store.startTimer();

    this.sub = this.source.subscribe(() => {
      const timeLeft = this.store.timeLeft();

      if (timeLeft === 0) {
        this.store.changePhase();
        return;
      }

      this.store.decrementTimeLeft();
    });
  }

  get nextBreak(): Phase {
    const nextBreak = getNextBreak(this.store.sessionsCompleted());
    return nextBreak;
  }
}
