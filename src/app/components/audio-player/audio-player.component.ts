import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  signal,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-audio-player',
  imports: [],
  templateUrl: './audio-player.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioPlayerComponent {
  @ViewChild('audioElement') audioElement!: ElementRef<HTMLAudioElement>;
  audioSrc = signal('./sounds/ding-1.wav');

  play() {
    let count = 0;
    const maxCount = 3;
    const audioEl = this.audioElement.nativeElement;

    audioEl.addEventListener('ended', () => {
      count++;
      if (count < maxCount) {
        audioEl.currentTime = 0;
        audioEl.play();
      }
    });

    audioEl.play();
  }

  pause() {
    this.audioElement.nativeElement.pause();
  }
}
