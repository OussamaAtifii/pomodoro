import { Component, effect, inject, ViewChild } from '@angular/core';
import { interval, Subscription, takeWhile } from 'rxjs';
import { AudioPlayerComponent } from '@components/audio-player/audio-player.component';
import { PomodoroStore } from '@store/pomodoro-store';
import { TimerComponent } from '@components/timer/timer.component';
import { ControlsComponent } from '@components/controls/controls.component';
import { Title } from '@angular/platform-browser';
import { BriefcaseIconComponent } from '@icons/briefcase-icon/briefcase-icon.component';

@Component({
  selector: 'app-root',
  imports: [
    AudioPlayerComponent,
    ControlsComponent,
    TimerComponent,
    BriefcaseIconComponent,
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
        this.store.reset();
        return;
      }

      this.store.decrementTimeLeft();
    });
  }
}
