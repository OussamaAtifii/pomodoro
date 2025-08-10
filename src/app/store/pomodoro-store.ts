import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { formatTime } from '@utils/time-helpers';

type Phase = 'work' | 'shortBreak' | 'longBreak';

type PomodoroState = {
  timeLeft: number;
  isRunning: boolean;
  phase: Phase;
};

const initialState: PomodoroState = {
  timeLeft: 25 * 60,
  isRunning: false,
  phase: 'work',
};

export const PomodoroStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),

  withComputed(({ timeLeft }) => ({
    timer: computed(() => {
      const minutes = formatTime(Math.floor(timeLeft() / 60));
      const seconds = formatTime(timeLeft() % 60);
      return `${minutes}:${seconds}`;
    }),
  })),

  withMethods((store) => ({
    decrementTimeLeft() {
      patchState(store, (state) => {
        const newTime = state.timeLeft > 0 ? state.timeLeft - 1 : 0;

        return {
          ...state,
          timeLeft: newTime,
        };
      });
    },

    stopTimer() {
      patchState(store, (state) => ({
        ...state,
        isRunning: false,
      }));
    },

    startTimer() {
      patchState(store, (state) => ({
        ...state,
        isRunning: true,
      }));
    },

    reset() {
      patchState(store, (state) => ({
        ...state,
        isRunning: false,
        timeLeft: 25 * 60,
      }));
    },
  })),
);
