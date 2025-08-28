import { computed } from '@angular/core';
import { Phase, PomodoroState } from '@customTypes/store.types';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { getNextPhase, getPhaseTimeLeft } from '@utils/store-helpers';
import { formatTime } from '@utils/time-helpers';

const initialState: PomodoroState = {
  timeLeft: 25 * 60,
  isRunning: false,
  phase: 'work',
  sessionsCompleted: 0,
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
        timeLeft: getPhaseTimeLeft(state.phase),
      }));
    },

    changePhase() {
      patchState(store, (state) => {
        const { phase, sessionsCompleted } = getNextPhase(state);

        return {
          ...state,
          timeLeft: getPhaseTimeLeft(phase),
          isRunning: false,
          phase,
          sessionsCompleted,
        };
      });
    },
  })),
);
